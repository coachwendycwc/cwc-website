/**
 * CWC Booking Email Automation - Event Data Extraction
 */

/**
 * Extract the external attendee (the person who booked, not Wendy).
 */
function extractAttendee_(event) {
  if (!event.attendees || event.attendees.length === 0) return null;

  for (var i = 0; i < event.attendees.length; i++) {
    var attendee = event.attendees[i];
    if (attendee.email.toLowerCase() !== CONFIG.OWNER_EMAIL.toLowerCase()) {
      if (attendee.resource) continue;  // skip conference rooms
      return attendee;
    }
  }

  return null;
}

/**
 * Detect which booking type this event is (organizations, individuals, speaking).
 * Checks the event description for Motion booking link slugs.
 */
function detectBookingType_(event) {
  var description = event.description || '';
  var title = event.summary || '';
  var searchText = description + ' ' + title;

  // Check organizations patterns first (most specific)
  var orgPatterns = CONFIG.BOOKING_TYPE_PATTERNS.organizations;
  for (var i = 0; i < orgPatterns.length; i++) {
    if (orgPatterns[i].test(searchText)) return 'organizations';
  }

  // Check speaking patterns
  var speakingPatterns = CONFIG.BOOKING_TYPE_PATTERNS.speaking;
  for (var j = 0; j < speakingPatterns.length; j++) {
    if (speakingPatterns[j].test(searchText)) return 'speaking';
  }

  // Default to individuals
  return 'individuals';
}

/**
 * Extract first name from display name or email.
 */
function extractNameFromEmail_(email) {
  var localPart = email.split('@')[0];
  var name = localPart
    .replace(/[._-]/g, ' ')
    .replace(/\d+/g, '')
    .trim()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');

  return name || 'there';
}

/**
 * Get first name from full name.
 */
function getFirstName_(fullName) {
  if (!fullName || fullName === 'there') return fullName;
  return fullName.split(' ')[0];
}

/**
 * Extract Zoom link from event.
 */
function extractZoomLink_(event) {
  // 1. Check conferenceData
  if (event.conferenceData && event.conferenceData.entryPoints) {
    for (var i = 0; i < event.conferenceData.entryPoints.length; i++) {
      var ep = event.conferenceData.entryPoints[i];
      if (ep.entryPointType === 'video' && ep.uri) return ep.uri;
    }
  }

  // 2. Check hangoutLink (Google Meet)
  if (event.hangoutLink) return event.hangoutLink;

  // 3. Parse description for Zoom links
  var description = event.description || '';
  var zoomMatch = description.match(/https:\/\/[\w.-]*zoom\.us\/j\/[\w?=&%-]+/i);
  if (zoomMatch) return zoomMatch[0];

  // 4. Generic video meeting URL
  var genericMatch = description.match(/https:\/\/[^\s<"]+(?:zoom|meet|teams|webex)[^\s<"]*/i);
  if (genericMatch) return genericMatch[0];

  return '#';
}

/**
 * Extract Motion reschedule or cancel link from event description.
 */
function extractMotionLink_(description, type) {
  if (!description) return '#';

  // Pattern: https://app.usemotion.com/reschedule/{id} or /cancel/{id}
  var pattern = new RegExp(
    'https://app\\.usemotion\\.com/' + type + '/[^\\s<"]+', 'i'
  );
  var match = description.match(pattern);
  if (match) return match[0];

  // Also try href="..." format (HTML descriptions)
  var hrefPattern = new RegExp(
    'href=["\']([^"\']*usemotion\\.com/' + type + '/[^"\']*)["\']', 'i'
  );
  var hrefMatch = description.match(hrefPattern);
  if (hrefMatch) return hrefMatch[1];

  return '#';
}

/**
 * Format date/time for email display.
 * Output: "Wednesday, March 28, 2026 at 2:00 PM EST"
 */
function formatDateTime_(isoDateString) {
  var date = new Date(isoDateString);

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
    timeZone: CONFIG.TIMEZONE,
  };

  return date.toLocaleString('en-US', options);
}
