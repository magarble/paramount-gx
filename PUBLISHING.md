# Publishing to Opera Add-ons

Status: prepared for submission; not yet submitted or approved.

One-click installation requires a live Opera Add-ons listing. A GitHub ZIP cannot install itself or provide store-managed updates.

## Suggested listing

**Name:** Browser Fix for Paramount+

**Summary:** Helps Paramount+ recognise a compatible browser identity when streaming in Opera GX.

**Category:** Entertainment

**Version:** 1.0.0

**Licence / EULA:** MIT. Supply the full LICENSE included in the package as the distribution licence; do not silently accept a different default licence.

**Support:** https://github.com/magarble/paramount-gx/issues

**Homepage:** https://github.com/magarble/paramount-gx

**Privacy policy:** https://github.com/magarble/paramount-gx/blob/main/PRIVACY.md

**Description:**

Browser Fix for Paramount+ is an unofficial compatibility helper for Paramount+ viewers using Opera GX. If the site rejects the browser with an unsupported-browser message, this extension presents a Chrome-compatible browser identity while retaining the installed Chromium version.

After installation, reload Paramount+. It runs automatically in the background; there are no settings or toolbar actions. Browser identity values on Paramount+ pages and outgoing identity headers to paramountplus.com are changed locally. It does not collect account details, browsing history or viewing activity, and contains no analytics, advertising or remotely loaded code.

Normal Paramount+ access is required. The extension does not modify DRM, subscriptions, location restrictions or video codecs. It is not affiliated with or endorsed by Paramount or Opera.

## Reviewer notes

- All executable code is included and readable.
- Host access is limited to HTTPS paramountplus.com and subdomains.
- declarativeNetRequestWithHostAccess is used to set browser identity request headers for that domain.
- A document_start MAIN-world script keeps the page's navigator identity consistent with the header changes.
- Reproduction: load a Paramount+ playback page in Opera GX. When it reports unsupported browser error 100, enable this extension and reload. A subscriber confirmed working playback on Windows on 19 October 2026. Reviewers need their own authorised Paramount+ access; no account credentials are included.
- Test on supported platforms and current Opera versions before claiming wider compatibility.

## Submission steps

1. Sign into an Opera developer account at the official upload form linked in the publishing guidelines.
2. Upload the release ZIP with manifest.json at its root.
3. Supply the listing text, icon, MIT licence and privacy/support links above.
4. Capture genuine screenshots of the extension's operation in a clean browser, without account details or unrelated tabs. Opera recommends 612×408; follow the live portal's requirements.
5. Review the developer agreement and final submission yourself, then submit for moderation.
6. Once approved, add the official listing URL to README.md and use Opera's approved Add to Opera button. Keep the manual ZIP instructions as a fallback.

References:
- https://help.opera.com/en/extensions/publishing-guidelines/
- https://help.opera.com/en/extensions/acceptance-criteria/
