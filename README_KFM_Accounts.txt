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
party statements, and audit trail.

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
