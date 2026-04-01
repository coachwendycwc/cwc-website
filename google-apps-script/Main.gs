/**
 * CWC Booking Email Automation - Main Entry Points
 *
 * Two triggers run in parallel:
 * 1. onCalendarUpdate() - fires on any calendar change (near real-time)
 * 2. pollForNewEvents() - runs every 10 min as a safety net
 *
 * Both use the same tracking sheet, so duplicate emails are impossible.
 */

/**
 * EventUpdated trigger handler.
 * Fires on ANY calendar change. We use incremental sync to find only new events.
 */
function onCalendarUpdate(e) {
  try {
    Logger.log('EventUpdated trigger fired');
    var newEvents = getNewMotionEvents_();
    processNewEvents_(newEvents);
  } catch (error) {
    Logger.log('Error in onCalendarUpdate: ' + error.toString());
    MailApp.sendEmail(CONFIG.OWNER_EMAIL, 'CWC Email Automation Error', error.toString());
  }
}

/**
 * Time-driven trigger handler (runs every 10 minutes).
 * Safety net to catch any events missed by the EventUpdated trigger.
 */
function pollForNewEvents() {
  try {
    Logger.log('Polling for new events...');
    var newEvents = getNewMotionEvents_();
    processNewEvents_(newEvents);
  } catch (error) {
    Logger.log('Error in pollForNewEvents: ' + error.toString());
    MailApp.sendEmail(CONFIG.OWNER_EMAIL, 'CWC Email Automation Error', error.toString());
  }
}

/**
 * Process new Motion events: detect type, send branded email, log it.
 */
function processNewEvents_(events) {
  if (!events || events.length === 0) {
    Logger.log('No new Motion events to process.');
    return;
  }

  Logger.log('Found ' + events.length + ' new Motion event(s) to process.');

  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    try {
      // Extract attendee (the person who booked, not Wendy)
      var attendee = extractAttendee_(event);
      if (!attendee) {
        Logger.log('No external attendee found for event: ' + event.summary);
        continue;
      }

      // Skip if already emailed
      if (isEmailAlreadySent_(event.id)) {
        Logger.log('Email already sent for event: ' + event.id);
        continue;
      }

      // Detect booking type from event description
      var bookingType = detectBookingType_(event);

      // Build event data object
      var eventData = {
        eventId: event.id,
        bookingType: bookingType,
        title: event.summary || 'Discovery Call',
        description: event.description || '',
        startDateTime: event.start.dateTime,
        endDateTime: event.end.dateTime,
        attendeeName: attendee.displayName || extractNameFromEmail_(attendee.email),
        attendeeEmail: attendee.email,
        zoomLink: extractZoomLink_(event),
        rescheduleLink: extractMotionLink_(event.description, 'reschedule'),
        cancelLink: extractMotionLink_(event.description, 'cancel'),
      };

      // Send the branded email
      sendBrandedEmail_(eventData);

      // Log to tracking sheet
      logSentEmail_(eventData);

      Logger.log('Sent ' + bookingType + ' email for: ' + eventData.title + ' to ' + eventData.attendeeEmail);

    } catch (eventError) {
      Logger.log('Error processing event ' + event.id + ': ' + eventError.toString());
    }
  }
}
