/**
 * CWC Booking Email Automation - Calendar Sync
 *
 * Uses the Advanced Calendar Service (Google Calendar API) with syncToken
 * for efficient incremental sync. Only fetches events that changed.
 */

/**
 * Get new Motion-created events since the last sync.
 */
function getNewMotionEvents_() {
  var newMotionEvents = [];
  var events;
  var syncToken = getSyncToken_();

  if (syncToken) {
    try {
      events = fetchEventsIncremental_(syncToken);
    } catch (e) {
      // syncToken expired — do a full sync
      Logger.log('syncToken invalid, doing full sync: ' + e.toString());
      clearSyncToken_();
      events = fetchEventsFullSync_();
    }
  } else {
    events = fetchEventsFullSync_();
  }

  if (!events || events.length === 0) {
    return newMotionEvents;
  }

  // Filter for Motion-created, future, un-emailed events
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    if (event.status === 'cancelled') continue;
    if (!isMotionEvent_(event)) continue;
    if (isEmailAlreadySent_(event.id)) continue;

    // Only process future events (or events starting within the last hour)
    var startTime = new Date(event.start.dateTime || event.start.date);
    var oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    if (startTime < oneHourAgo) continue;

    newMotionEvents.push(event);
  }

  return newMotionEvents;
}

/**
 * Incremental sync — only events changed since last syncToken.
 */
function fetchEventsIncremental_(syncToken) {
  var allEvents = [];
  var pageToken = null;
  var newSyncToken = null;

  do {
    var options = { syncToken: syncToken };
    if (pageToken) options.pageToken = pageToken;

    var response = Calendar.Events.list(CONFIG.CALENDAR_ID, options);

    if (response.items) {
      allEvents = allEvents.concat(response.items);
    }

    pageToken = response.nextPageToken;
    if (response.nextSyncToken) {
      newSyncToken = response.nextSyncToken;
    }
  } while (pageToken);

  if (newSyncToken) saveSyncToken_(newSyncToken);

  return allEvents;
}

/**
 * Full sync — fetch all upcoming events and establish a syncToken.
 */
function fetchEventsFullSync_() {
  var allEvents = [];
  var pageToken = null;
  var newSyncToken = null;

  var now = new Date();
  var futureDate = new Date(now.getTime() + CONFIG.LOOKAHEAD_DAYS * 24 * 60 * 60 * 1000);

  do {
    var options = {
      timeMin: now.toISOString(),
      timeMax: futureDate.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 250,
    };
    if (pageToken) options.pageToken = pageToken;

    var response = Calendar.Events.list(CONFIG.CALENDAR_ID, options);

    if (response.items) {
      allEvents = allEvents.concat(response.items);
    }

    pageToken = response.nextPageToken;
    if (response.nextSyncToken) {
      newSyncToken = response.nextSyncToken;
    }
  } while (pageToken);

  if (newSyncToken) saveSyncToken_(newSyncToken);

  Logger.log('Full sync found ' + allEvents.length + ' upcoming events');
  return allEvents;
}

/**
 * Check if an event was created by Motion booking links.
 */
function isMotionEvent_(event) {
  var description = (event.description || '').toLowerCase();

  for (var i = 0; i < CONFIG.MOTION_IDENTIFIERS.length; i++) {
    if (description.indexOf(CONFIG.MOTION_IDENTIFIERS[i].toLowerCase()) !== -1) {
      return true;
    }
  }

  return false;
}

// --- SyncToken persistence ---

function getSyncToken_() {
  return PropertiesService.getScriptProperties().getProperty('CALENDAR_SYNC_TOKEN');
}

function saveSyncToken_(token) {
  PropertiesService.getScriptProperties().setProperty('CALENDAR_SYNC_TOKEN', token);
}

function clearSyncToken_() {
  PropertiesService.getScriptProperties().deleteProperty('CALENDAR_SYNC_TOKEN');
}
