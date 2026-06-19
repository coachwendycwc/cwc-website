/**
 * CWC Booking Email Automation - Email Tracking (Google Sheet)
 *
 * Uses a Google Sheet to track which events have already received emails.
 * Prevents duplicates even across trigger types and script restarts.
 */

/**
 * Check if an email was already sent for this event ID.
 */
function isEmailAlreadySent_(eventId) {
  var sheet = getTrackingSheet_();
  var data = sheet.getDataRange().getValues();

  // Column A (index 0) = Event ID
  for (var i = 1; i < data.length; i++) {  // Skip header row
    if (data[i][0] === eventId) return true;
  }

  return false;
}

/**
 * Log a sent email to the tracking sheet.
 */
function logSentEmail_(eventData) {
  var sheet = getTrackingSheet_();

  sheet.appendRow([
    eventData.eventId,
    eventData.attendeeName,
    eventData.attendeeEmail,
    eventData.bookingType,
    eventData.title,
    formatDateTime_(eventData.startDateTime),
    new Date().toLocaleString('en-US', { timeZone: CONFIG.TIMEZONE }),
    'SENT',
  ]);
}

/**
 * Get or create the tracking sheet with headers.
 */
function getTrackingSheet_() {
  var ss = SpreadsheetApp.openById(CONFIG.TRACKING_SPREADSHEET_ID);
  var sheet = ss.getSheetByName(CONFIG.TRACKING_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.TRACKING_SHEET_NAME);
    sheet.appendRow([
      'Event ID',
      'Attendee Name',
      'Attendee Email',
      'Booking Type',
      'Event Title',
      'Event Time',
      'Email Sent At',
      'Status',
    ]);

    // Format header row
    var headerRange = sheet.getRange(1, 1, 1, 8);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f3f3f3');

    for (var i = 1; i <= 8; i++) {
      sheet.autoResizeColumn(i);
    }
  }

  return sheet;
}
