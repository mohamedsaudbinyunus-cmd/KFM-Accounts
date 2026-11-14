WHAT'S NEW IN v11 (MORE COLOURS, LIVE MOTION, PIE PALETTES, ADMIN DATA ACCESS)
  * 23 colour themes (16 new) plus a Custom colour picker that builds light and dark versions for you.
  * Motion style (Settings -> Appearance): Off / Subtle / Lively. Lively = moving aurora backgrounds on the
    dashboard hero and Settings, orbiting light borders on KPI cards, floating icons, shining progress bars,
    counting numbers, 3D card tilt, and donuts with a light that circles them all the time.
  * Chart & pie colours (Settings): 11 colour sets, ring thickness, gradient fill, orbit glow. Hover a slice to pop it.
  * Admin can open each user's transactions (admin.html -> User data, or Users -> View data).
    The USER chooses in Settings -> Administrator access: View & edit / View only / No access.
    Enforced by the database rules, not just the screen. Every admin visit and change is logged where the user sees it.
  * database.rules.json IS REBUILT in this release (it was not in the upload). Compare it with your live rules,
    then publish it and test in the Rules Playground before inviting users.
  * Upload ALL files: index.html, KFM_Accounts_Enterprise_2026.html, admin.html, sw.js, database.rules.json. Hard-refresh once.

WHAT'S NEW IN v10 (THEMES, MOTION, APPLE-STYLE SETTINGS)
  * 7 colour themes (Gold, Emerald, Ocean, Royal, Rose, Sunset, Graphite), each with a light and a dark version.
  * Light / Dark / Auto (follows the device). Switching plays a circular reveal animation from the button you tapped.
    Pages, cards and table rows also animate in. Turn animations off in Settings (also respects "reduce motion").
  * New Apple-style Settings page: live preview, mode, colour theme, animations, striped / compact tables,
    app name, currency, number format, language, capital accounts, Excel download.
  * Capital entry: choose "Capital / money added" and split it across Cash, Bank, bKash, Nagad, Savings and more
    in ONE balanced entry. All other transaction types still use exactly 2 accounts (debit + credit).
    Settings -> "Capital & accounts" chooses which accounts appear as quick buttons, or turns the split off.
  * Excel export redesigned: title banner, coloured header, striped rows, real dates, number formats, total rows,
    frozen header, filters, print setup. The colours follow your selected theme.
  * Upload ALL files again: index.html, KFM_Accounts_Enterprise_2026.html (identical copy), sw.js. Hard-refresh once.

WHAT'S NEW IN v9 (APPLE-STYLE SIGN-IN)
  * New sign-in screen: Apple, Google, Microsoft, Facebook and email/password, light + dark, English + Bangla.
  * Profile pictures are always circular (uploads are centre-cropped square; Google/Apple/Microsoft photos are used
    automatically when you have not uploaded your own).
  * Removed the unused accent themes (violet/ocean/sunset/rose) and the old login styles. Light and Dark remain.
  * TURN ON EACH PROVIDER: Firebase Console -> Authentication -> Sign-in method.
      Google    : enable (already working).
      Apple     : needs an Apple Developer account (Services ID, key). Firebase shows the steps.
      Microsoft : needs an Azure app (client ID + secret).
      Facebook  : needs a Meta app (App ID + secret).
    Also add your GitHub Pages domain under Authentication -> Settings -> Authorized domains.
    A provider that is not enabled just shows "not turned on yet" - it cannot break the other sign-in options.

KFM ACCOUNTS — v8 (SUBSCRIPTION + MASTER DASHBOARD)
====================================================

FILES (upload ALL to the ROOT of your GitHub Pages repo)
  index.html                          The app (entry point)
  KFM_Accounts_Enterprise_2026.html   Identical copy of index.html
  admin.html                          Master dashboard (admin only)
  database.rules.json                 Firebase Realtime Database rules  <-- MUST publish
  manifest.webmanifest, sw.js, favicon.png, icon-*.png

WHAT'S NEW
  * Subsidiary ledger page (Ledgers menu): debtors and creditors ledgers, each party's account with running
    balance, and a check against the general-ledger control account.
  * Black and gold theme matching the app icon.
  * Profile button at the top-right: My profile, Subscription, Settings, Language, Theme,
    Master dashboard (admins only).
  * Sign out, Excel export, JSON backup and Import/Restore moved to Settings -> "Account & data".
    The top bar no longer shows them.
  * Subscription: 20 taka per year (price editable in admin). Pay by bKash, Nagad or Bank,
    enter the TrxID, admin verifies and activates. Admins use the app free.
    Expired users see a payment screen; their data stays safe and they can still download a backup.
  * Language: English + Bangla are fully built in. 107 more languages via automatic translation
    (needs internet). Globe button in the top bar / profile menu / Settings.
  * Light-mode fixes: Journal classification, login headline, health ring, tour Skip button.
  * Accounting-cycle order: Entry -> Journal -> Ledger -> Trial balance -> Adjusting -> Statements -> Closing
    (sidebar order + a step bar with Back/Next on those pages).
  * Phone layout: compact top bar, bottom bar (Home, Journal, +, Ledger, Menu) and a full
    "Menu" sheet with search for every page.
  * "Continue without account" is removed (it would bypass the subscription).

SETUP — DO THESE 4 STEPS IN ORDER
  1. Firebase Console -> Realtime Database -> Rules -> paste the full contents of
     database.rules.json -> Publish.
  2. Upload the files to GitHub, hard-refresh the site once.
  3. Make yourself admin: sign in to the app once, open Profile (top-right) -> copy your Account ID.
     In Firebase Console -> Realtime Database -> Data, add:   admins -> <your Account ID> = true
     (boolean true). Reload the app: your badge shows ADMIN.
  4. Open  <your-site>/admin.html , sign in, go to Settings and enter your bKash number, Nagad number,
     bank details and price. Users see these on the payment screen.

HOW A PAYMENT WORKS
  User pays -> enters TrxID in the app -> appears under Admin -> Payments (Pending) ->
  you check your bKash/Nagad/bank statement -> Approve (adds the years on top of any time left)
  or Reject (with a reason the user sees). You can also add days (e.g. 7-day trial), set a date,
  revoke, or make another admin from the Users tab.

SECURITY (enforced by the rules, not just the screen)
  * Each user can read/write only kfm/<their UID>.
  * Writing accounting data requires an active subscription (or admin). Reading is always allowed,
    so expired users can still export.
  * Users cannot edit their own subscription. Only admins write subs/ and admins/.
  * Users can only create payment requests with status "pending"; they cannot edit them.
  * Admins can read profiles, subscriptions and payments, but NOT customers' accounting data.
  Test in Firebase -> Rules -> Rules Playground (simulate a signed-in non-admin writing /kfm/<own uid>
  with no subs record: it must be denied).

HONEST LIMITS
  * Payments are verified by you manually; there is no automatic bKash/Nagad gateway
    (that needs a server and a merchant account).
  * This is a client-side app: the database rules are the real protection. The paywall screen is the
    friendly layer on top of them.
  * Other-language translation is machine translation by Google Translate: good for reading, not
    perfect for accounting terms. Your numbers and records are never changed.
  * Price assumption: "1 yard is 20 taka" was read as 20 taka per YEAR. Change it in admin -> Settings.
  * Confirm VAT / payroll / statutory requirements with a qualified accountant.

LEGACY DATA
  Sign in with the ORIGINAL owner account first on the device that holds old local records so it can
  claim them once. Take a JSON backup (Settings -> Export backup) before replacing a live deployment.
