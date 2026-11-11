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
