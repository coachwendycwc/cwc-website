/**
 * CWC Booking Email Automation - Configuration
 *
 * SETUP:
 * 1. Create a Google Sheet named "CWC Email Tracking"
 * 2. Copy the spreadsheet ID from the URL (between /d/ and /edit)
 * 3. Paste it below as TRACKING_SPREADSHEET_ID
 * 4. Run setupAutomation() once from the Apps Script editor
 */

const CONFIG = {
  // Google Calendar ID (Wendy's primary calendar)
  CALENDAR_ID: 'wendy@coachingwomenofcolor.com',

  // Google Sheet for tracking sent emails (prevents duplicates)
  TRACKING_SPREADSHEET_ID: '1p6uXonPFUUBJMMBKI2P_KFmNnhWd3-5MwXbiWOzqVQ0',
  TRACKING_SHEET_NAME: 'Email Log',

  // Email templates hosted on CWC website
  TEMPLATES: {
    organizations: 'https://coachingwomenofcolor.com/email-confirmation-organizations.html',
    individuals: 'https://coachingwomenofcolor.com/email-confirmation-individuals.html',
    speaking: 'https://coachingwomenofcolor.com/email-confirmation-speaking.html',
  },

  // How to match Motion booking types to templates
  // These match the Motion booking link slugs in the calendar event description
  BOOKING_TYPE_PATTERNS: {
    organizations: [/\/organizations/i, /organization/i, /org discovery/i],
    speaking: [/\/speaking-events/i, /speaking/i, /keynote/i, /inquiry call/i],
    individuals: [/\/individuals/i, /individual/i, /discovery call/i],  // default fallback
  },

  // Email subjects per booking type
  EMAIL_SUBJECTS: {
    organizations: 'Your Discovery Call is Confirmed - Coaching Women of Color',
    individuals: 'Your Discovery Call is Confirmed - Coaching Women of Color',
    speaking: 'Your Speaking Inquiry is Confirmed - Coaching Women of Color',
  },

  // Cache template for 1 hour (seconds)
  TEMPLATE_CACHE_SECONDS: 3600,

  // Email settings
  SENDER_NAME: 'Wendy Perdomo | Coaching Women of Color',
  REPLY_TO: 'wendy@coachingwomenofcolor.com',

  // How to identify Motion-created events (in calendar event description)
  MOTION_IDENTIFIERS: [
    'usemotion.com',
    'app.usemotion.com',
  ],

  // Owner email to exclude from attendee list
  OWNER_EMAIL: 'wendy@coachingwomenofcolor.com',

  // How far forward to scan for events (days)
  LOOKAHEAD_DAYS: 60,

  // Timezone
  TIMEZONE: 'America/New_York',
};
