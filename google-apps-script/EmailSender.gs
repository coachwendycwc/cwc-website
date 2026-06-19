/**
 * CWC Booking Email Automation - Email Sending
 *
 * Fetches the correct branded HTML template based on booking type,
 * replaces placeholders, and sends via Gmail.
 */

/**
 * Send the branded confirmation email.
 */
function sendBrandedEmail_(eventData) {
  // Get the correct template for this booking type
  var htmlTemplate = getEmailTemplate_(eventData.bookingType);

  // Replace all placeholders
  var firstName = getFirstName_(eventData.attendeeName);
  var formattedDateTime = formatDateTime_(eventData.startDateTime);

  htmlTemplate = htmlTemplate
    .replace(/\{\{first_name\}\}/g, firstName)
    .replace(/\{\{meeting_type\}\}/g, eventData.title)
    .replace(/\{\{date_time\}\}/g, formattedDateTime)
    .replace(/\{\{zoom_link\}\}/g, eventData.zoomLink)
    .replace(/\{\{reschedule_link\}\}/g, eventData.rescheduleLink)
    .replace(/\{\{cancel_link\}\}/g, eventData.cancelLink);

  // Get the correct subject line
  var subject = CONFIG.EMAIL_SUBJECTS[eventData.bookingType] || CONFIG.EMAIL_SUBJECTS.individuals;

  // Plain text fallback
  var plainText = 'Hi ' + firstName + ', your ' + eventData.title +
    ' with Wendy Perdomo is confirmed for ' + formattedDateTime +
    '. Join via Zoom: ' + eventData.zoomLink;

  // Send via Gmail
  GmailApp.sendEmail(
    eventData.attendeeEmail,
    subject,
    plainText,
    {
      htmlBody: htmlTemplate,
      name: CONFIG.SENDER_NAME,
      replyTo: CONFIG.REPLY_TO,
    }
  );
}

/**
 * Fetch and cache the email HTML template for a given booking type.
 */
function getEmailTemplate_(bookingType) {
  var cache = CacheService.getScriptCache();
  var cacheKey = 'EMAIL_TEMPLATE_' + bookingType;

  // Try cache first
  var template = cache.get(cacheKey);
  if (template) return template;

  // Fetch from URL
  var templateUrl = CONFIG.TEMPLATES[bookingType] || CONFIG.TEMPLATES.individuals;

  try {
    var response = UrlFetchApp.fetch(templateUrl, {
      muteHttpExceptions: true,
      followRedirects: true,
    });

    if (response.getResponseCode() === 200) {
      template = response.getContentText();

      // Cache for 1 hour (max 6 hours / 21600 seconds)
      cache.put(cacheKey, template, CONFIG.TEMPLATE_CACHE_SECONDS);
      return template;
    } else {
      throw new Error('Template fetch returned status: ' + response.getResponseCode());
    }
  } catch (e) {
    Logger.log('Failed to fetch template for ' + bookingType + ': ' + e.toString());
    return getFallbackTemplate_();
  }
}

/**
 * Fallback template if hosted version is unreachable.
 */
function getFallbackTemplate_() {
  return '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">' +
    '<h1 style="color: #1a1a1a;">You\'re all set, {{first_name}}.</h1>' +
    '<p style="color: #525252; font-size: 16px;">' +
    'Your <strong>{{meeting_type}}</strong> with Wendy Perdomo is confirmed.</p>' +
    '<p style="color: #525252; font-size: 16px;">' +
    '<strong>Date & Time:</strong> {{date_time}}</p>' +
    '<p><a href="{{zoom_link}}" style="display: inline-block; padding: 12px 32px; ' +
    'background-color: #E91E8C; color: #ffffff; text-decoration: none; border-radius: 6px; ' +
    'font-weight: 600;">Join Zoom Meeting</a></p>' +
    '<p style="color: #737373; font-size: 14px; margin-top: 24px;">' +
    '<a href="{{reschedule_link}}" style="color: #3EBCE8;">Reschedule</a> | ' +
    '<a href="{{cancel_link}}" style="color: #737373;">Cancel</a></p>' +
    '<hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />' +
    '<p style="color: #737373; font-size: 12px;">' +
    'Coaching Women of Color&reg; | wendy@coachingwomenofcolor.com</p></div>';
}
