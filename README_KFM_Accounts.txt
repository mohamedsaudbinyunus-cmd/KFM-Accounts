KFM ACCOUNTS — ENTERPRISE REFRESH
=================================

Files
-----
index.html                         Main app (upload this as the GitHub Pages entry point)
KFM_Accounts_Enterprise_2026.html  Same standalone app with a descriptive filename
manifest.webmanifest               Installable PWA metadata
sw.js                              Versioned service worker (refreshes updated app files)
icon-192.png / icon-512.png        Existing KFM app icons

Deploy to GitHub Pages
----------------------
1. Extract this ZIP.
2. Upload every file to the ROOT of your GitHub repository.
3. Keep the main HTML file named exactly index.html.
4. In GitHub: Settings → Pages → Deploy from a branch → select your branch and /(root).
5. Open the published HTTPS URL. Use a hard refresh once after deployment.

New accounting modules
----------------------
Sales register, purchase register, expense register, other income, payroll & salary,
fixed assets and depreciation, Tax/VAT control, bank reconciliation, cash-flow
statement, budgets & forecasts, closing entries (সমাপনী দাখিলা), reversing entries,
party statements, audit trail, and a dedicated Contra entry page (কন্ট্রা দাখিলা) for
transfers between your own Cash, Bank, bKash, Nagad and Savings accounts — found under
Journals → Contra entry.

Existing accounting workspace retained
---------------------------------------
Dashboard, journal, general ledger, chart of accounts, cash book, debtors, creditors,
inventory, receipts, trial balance, balance sheet, financial statements, report centre,
adjusting entries, journal classification and textbook accounting pages.

Important data and security notes
---------------------------------
- Take a JSON backup from the app before replacing a live deployment.
- Test the new registers with sample transactions and check the journal, ledger,
  trial balance and balance sheet before entering live business data.
- Keep your existing Firebase project and restrict Firebase Authentication / Realtime
  Database rules to the intended signed-in account. A browser Firebase API key is not
  a substitute for database security rules.
- This is a client-side accounting workspace with the existing Firebase sync setup;
  it is not a hosted multi-user ERP or a certified tax/payroll compliance system.
  Confirm local VAT, payroll and statutory requirements with a qualified accountant.


MULTI-USER DATA ISOLATION (IMPORTANT — DO THIS BEFORE INVITING USERS)
---------------------------------------------------------------------
The app now stores each signed-in user's local cache under a UID-specific key and
syncs only to kfm/<Firebase Auth UID>. Switching accounts clears the previous
workspace from memory before loading the next user's records.

You MUST also deploy the included database.rules.json to Firebase Realtime Database:
1. Open Firebase Console → your KFM project → Realtime Database → Rules.
2. Replace the rules with the exact contents of database.rules.json.
3. Click Publish.
4. Test with two different email accounts: add a sample transaction to Account A,
   sign out, sign in as Account B, and confirm B cannot see or edit A's data.
5. Sign back into Account A and confirm its sample transaction is still present.

The rule allows an authenticated user to read/write ONLY /kfm/<their-own-auth-uid>.
It denies unauthenticated access and denies access to another user's UID path.
The app's Firebase Authentication must remain enabled. Never publish open rules such
as .read: true or .write: true.

LEGACY DATA MIGRATION
---------------------
The first existing account that signs in on a device may claim the old unscoped local
records once. Sign in with the ORIGINAL owner account first on the device that holds
those old records. New email/password accounts start with a clean private workspace.
Google sign-in skips automatic legacy claiming for safety; if old local-only records
need to be retained, export a backup from the old session and import it after signing
in to the correct owner account. Do not let a new customer account be the first account
to claim old local data.

LIMITS
------
These rules isolate each user's private workspace. They do not create an admin role,
shared company workspace, or staff permissions. If the business owner needs to view
customer accounts centrally, that requires a separate role-based design with explicit
permissions and server-side validation. A Firebase web API key is public configuration,
not a secret; the Realtime Database rules are what enforce access control.


Dashboard visual refresh
------------------------
The dashboard now uses a dark executive teal layout inspired by the supplied reference image. The left navigation is darkened while the dashboard is active. Use the Customize button to open a right-side drawer and show/hide dashboard panels. Preferences are saved in this browser.
