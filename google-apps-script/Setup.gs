/**
 * CWC Booking Email Automation - Setup & Testing
 *
 * Run setupAutomation() ONCE to install triggers.
 * Run test functions to verify everything works before going live.
 */

/**
 * ONE-TIME SETUP: Creates both triggers.
 * Run this manually from the Apps Script editor: Run > setupAutomation
 */
function setupAutomation() {
  // Remove existing triggers (avoid duplicates)
  removeAllTriggers();

  // 1. EventUpdated trigger — fires on any calendar change (near real-time)
  ScriptApp.newTrigger('onCalendarUpdate')
    .forUserCalendar(CONFIG.CALENDAR_ID)
    .onEventUpdated()
    .create();

  // 2. Time-driven trigger — polls every 10 minutes (safety net)
  ScriptApp.newTrigger('pollForNewEvents')
    .timeBased()
    .everyMinutes(10)
    .create();

  Logger.log('Triggers created successfully!');
  Logger.log('  - EventUpdated trigger: active');
  Logger.log('  - Time-driven trigger: every 10 minutes');

  // 3. Initial full sync to establish syncToken
  Logger.log('Running initial sync...');
  var events = fetchEventsFullSync_();
  Logger.log('Initial sync complete. Found ' + events.length + ' upcoming events.');
  Logger.log('');
  Logger.log('Setup complete! The automation is now running.');
}

/**
 * Remove all triggers for this script.
 */
function removeAllTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  Logger.log('Removed ' + triggers.length + ' existing trigger(s).');
}

/**
 * TEST: Scan upcoming events and log what would happen (no emails sent).
 */
function testEventDetection() {
  var now = new Date();
  var futureDate = new Date(now.getTime() + CONFIG.LOOKAHEAD_DAYS * 24 * 60 * 60 * 1000);

  var response = Calendar.Events.list(CONFIG.CALENDAR_ID, {
    timeMin: now.toISOString(),
    timeMax: futureDate.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
    maxResults: 10,
  });

  if (!response.items || response.items.length === 0) {
    Logger.log('No upcoming events found.');
    return;
  }

  Logger.log('=== Upcoming Events ===\n');
  for (var i = 0; i < response.items.length; i++) {
    var event = response.items[i];
    Logger.log('--- Event ' + (i + 1) + ' ---');
    Logger.log('Title: ' + event.summary);
    Logger.log('Start: ' + (event.start.dateTime || event.start.date));
    Logger.log('Is Motion event: ' + isMotionEvent_(event));
    Logger.log('Booking type: ' + detectBookingType_(event));
    Logger.log('Description: ' + ((event.description || '(empty)').substring(0, 300)));

    var attendee = extractAttendee_(event);
    if (attendee) {
      Logger.log('Attendee: ' + (attendee.displayName || 'no name') + ' <' + attendee.email + '>');
    } else {
      Logger.log('Attendee: none found');
    }

    Logger.log('Zoom link: ' + extractZoomLink_(event));
    Logger.log('Reschedule: ' + extractMotionLink_(event.description || '', 'reschedule'));
    Logger.log('Cancel: ' + extractMotionLink_(event.description || '', 'cancel'));
    Logger.log('Already emailed: ' + isEmailAlreadySent_(event.id));
    Logger.log('');
  }
}

/**
 * TEST: Send a test email to Wendy (no real booking needed).
 */
function testSendEmail() {
  var testData = {
    eventId: 'test-' + Date.now(),
    bookingType: 'individuals',
    title: 'Discovery Call (Test)',
    description: 'Test event',
    startDateTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    endDateTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 30 * 60 * 1000).toISOString(),
    attendeeName: 'Wendy Test',
    attendeeEmail: CONFIG.OWNER_EMAIL,  // sends to Wendy for testing
    zoomLink: 'https://zoom.us/j/1234567890',
    rescheduleLink: 'https://app.usemotion.com/reschedule/test123',
    cancelLink: 'https://app.usemotion.com/cancel/test123',
  };

  sendBrandedEmail_(testData);
  logSentEmail_(testData);
  Logger.log('Test email sent to ' + testData.attendeeEmail);
}

/**
 * TEST: Send test emails for all 3 booking types.
 */
function testAllTemplates() {
  var types = ['individuals', 'organizations', 'speaking'];

  for (var i = 0; i < types.length; i++) {
    var type = types[i];
    var testData = {
      eventId: 'test-' + type + '-' + Date.now(),
      bookingType: type,
      title: type === 'speaking' ? 'Speaking Inquiry Call (Test)' : 'Discovery Call (Test)',
      description: 'Test event - ' + type,
      startDateTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      endDateTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 30 * 60 * 1000).toISOString(),
      attendeeName: 'Wendy Test',
      attendeeEmail: CONFIG.OWNER_EMAIL,
      zoomLink: 'https://zoom.us/j/1234567890',
      rescheduleLink: 'https://app.usemotion.com/reschedule/test-' + type,
      cancelLink: 'https://app.usemotion.com/cancel/test-' + type,
    };

    sendBrandedEmail_(testData);
    logSentEmail_(testData);
    Logger.log('Sent ' + type + ' test email');
  }

  Logger.log('All 3 test emails sent to ' + CONFIG.OWNER_EMAIL);
}

/**
 * UTILITY: Clear sync token to force a full re-sync.
 */
function resetSyncToken() {
  clearSyncToken_();
  Logger.log('Sync token cleared. Next run will do a full sync.');
}

/**
 * UTILITY: View current triggers.
 */
function viewTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  if (triggers.length === 0) {
    Logger.log('No triggers installed. Run setupAutomation() first.');
    return;
  }
  for (var i = 0; i < triggers.length; i++) {
    Logger.log('Trigger: ' + triggers[i].getHandlerFunction() +
      ' | Type: ' + triggers[i].getEventType() +
      ' | ID: ' + triggers[i].getUniqueId());
  }
}
