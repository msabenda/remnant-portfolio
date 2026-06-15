/**
 * Google Apps Script — saves each POST as a new row in Google Sheets.
 *
 * IMPORTANT (pick one):
 * A) Bound script: open your Google Sheet → Extensions → Apps Script → paste this file → Save.
 *    Then getActiveSpreadsheet() works.
 * B) Standalone script: In Apps Script → Project Settings → Script properties, add:
 *      SPREADSHEET_ID = the long ID from your sheet URL:
 *      https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit
 *
 * Deploy: Deploy → New deployment → Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * After changing code: Deploy → Manage deployments → Edit (pencil) → Version “New version” → Deploy.
 */

function getTargetSheet_() {
  var ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch (err) {
    ss = null;
  }
  if (!ss) {
    var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    if (!id || String(id).trim() === '') {
      throw new Error(
        'No spreadsheet linked. Either create this script from the Sheet (Extensions → Apps Script), ' +
          'or set Script property SPREADSHEET_ID to your spreadsheet ID.'
      );
    }
    ss = SpreadsheetApp.openById(String(id).trim());
  }
  var tab = PropertiesService.getScriptProperties().getProperty('SHEET_TAB_NAME');
  if (tab && String(tab).trim() !== '') {
    var sh = ss.getSheetByName(String(tab).trim());
    if (!sh) {
      throw new Error('Sheet tab not found: ' + tab);
    }
    return sh;
  }
  return ss.getActiveSheet();
}

function doPost(e) {
  try {
    if (!e || !e.parameter) {
      return jsonOut({ result: 'error', message: 'No data' });
    }

    var p = e.parameter;

    // Honeypot — bots fill this; do not store (non-empty string only)
    if (p.website != null && String(p.website).trim() !== '') {
      return jsonOut({ result: 'ok' });
    }

    var sheet = getTargetSheet_();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'SubmittedAt',
        'Name',
        'Contact',
        'Message',
        'ClientTimestamp',
        'UserAgent',
        'Referrer',
      ]);
    }

    sheet.appendRow([
      new Date(),
      String(p.name || ''),
      String(p.contact || ''),
      String(p.message || ''),
      String(p.timestamp || ''),
      String(p.userAgent || ''),
      String(p.referrer || ''),
    ]);

    return jsonOut({ result: 'success' });
  } catch (err) {
    return jsonOut({ result: 'error', message: String(err) });
  }
}

function doGet() {
  return ContentService.createTextOutput(
    'Portfolio contact endpoint — submissions use POST from your site.'
  ).setMimeType(ContentService.MimeType.TEXT);
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
