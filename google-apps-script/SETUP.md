# CWC Booking Email Automation — Setup Guide

Sends branded HTML confirmation emails when clients book through Motion.

## How It Works

1. Client books via Motion → Motion creates a Google Calendar event
2. Google Apps Script detects the new event (within seconds)
3. Script identifies the booking type (organizations / individuals / speaking)
4. Script sends the matching branded email from wendy@coachingwomenofcolor.com
5. Logs the sent email to a Google Sheet (prevents duplicates)

## Setup (10 minutes)

### Step 1: Create a Tracking Sheet
1. Go to [Google Sheets](https://sheets.google.com) → create a new spreadsheet
2. Name it **"CWC Email Tracking"**
3. Copy the spreadsheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/`**THIS_PART**`/edit`

### Step 2: Create the Apps Script Project
1. Go to [script.google.com](https://script.google.com) → **New project**
2. Name it **"CWC Booking Email Automation"**
3. Delete the default `Code.gs` content
4. Create 6 files (click `+` → Script):
   - `Config.gs`
   - `Main.gs`
   - `CalendarSync.gs`
   - `EventParser.gs`
   - `EmailSender.gs`
   - `Tracking.gs`
   - `Setup.gs`
5. Copy-paste the contents from each `.gs` file in this folder

### Step 3: Enable Google Calendar API
1. In the Apps Script editor, click **+** next to **Services** (left sidebar)
2. Find **Google Calendar API** (v3)
3. Click **Add**

### Step 4: Configure
1. Open `Config.gs`
2. Replace `YOUR_SPREADSHEET_ID_HERE` with your Sheet ID from Step 1
3. Verify `CALENDAR_ID` is `wendy@coachingwomenofcolor.com`

### Step 5: Authorize
1. Select `testEventDetection` from the function dropdown
2. Click **Run**
3. Google will prompt you to authorize — click through and allow:
   - Google Calendar (read events)
   - Gmail (send emails)
   - Google Sheets (read/write tracking)
   - External URLs (fetch email templates)

### Step 6: Test
1. Run `testEventDetection()` — check logs for your upcoming events
2. Run `testSendEmail()` — sends a test email to Wendy
3. Run `testAllTemplates()` — sends all 3 template variants to Wendy
4. Check the Google Sheet for logged entries

### Step 7: Go Live
1. Run `setupAutomation()` — installs both triggers
2. Done! The script is now running automatically

## Files

| File | Purpose |
|------|---------|
| `Config.gs` | All settings (calendar ID, sheet ID, template URLs, patterns) |
| `Main.gs` | Entry points for triggers, orchestrates the flow |
| `CalendarSync.gs` | Calendar API sync with incremental token |
| `EventParser.gs` | Extracts attendee, Zoom link, Motion links from events |
| `EmailSender.gs` | Fetches template, replaces placeholders, sends via Gmail |
| `Tracking.gs` | Google Sheet logging to prevent duplicate emails |
| `Setup.gs` | One-time setup, test functions, utilities |

## Email Templates

| Booking Type | Template URL | Trigger |
|-------------|-------------|---------|
| Organizations | `/email-confirmation-organizations.html` | Motion link contains `/organizations` |
| Individuals | `/email-confirmation-individuals.html` | Motion link contains `/individuals` (default) |
| Speaking | `/email-confirmation-speaking.html` | Motion link contains `/speaking-events` |

## Troubleshooting

**No emails sending:**
- Run `viewTriggers()` to check triggers are installed
- Run `testEventDetection()` to see if events are detected as Motion events
- Check the Executions log (left sidebar → Executions)

**Duplicate emails:**
- Impossible by design — the tracking sheet prevents re-sending
- Check the "CWC Email Tracking" sheet for the email log

**Wrong template sent:**
- Run `testEventDetection()` to see what `bookingType` is detected
- Adjust patterns in `Config.gs` → `BOOKING_TYPE_PATTERNS`

**Template not updating:**
- Templates are cached for 1 hour
- Wait for cache to expire, or change `TEMPLATE_CACHE_SECONDS` to `0` temporarily

**Reset everything:**
- Run `removeAllTriggers()` to stop the automation
- Run `resetSyncToken()` to force a fresh calendar scan
- Run `setupAutomation()` to reinstall
