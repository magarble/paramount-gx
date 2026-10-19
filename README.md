# Paramount+ for Opera GX

A Manifest V3 extension that presents Opera GX as Chrome on Paramount+ to address unsupported-browser checks (including error 100).

## Install

1. Download this repository using **Code → Download ZIP**, then extract it.
2. Open `opera://extensions` in Opera GX.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select the extracted folder containing `manifest.json`.
5. Reload the Paramount+ video tab.

Keep the extracted folder in place while the extension is installed. To disable it, turn it off at `opera://extensions` and reload Paramount+.

## What it changes

- Removes Opera branding from the HTTP User-Agent and JavaScript browser identity.
- Presents Chrome and Chromium brands in browser client hints.
- Retains the browser's underlying Chromium version.
- Runs only on HTTPS `paramountplus.com` pages and subdomains; request rules target that domain.

No accounts, cookies, viewing data or settings are collected or sent to another service. The extension does not modify DRM, subscriptions, location restrictions or video codecs. Playback depends on the browser's existing media support.

## Validation status

Local checks passed for domain permissions, User-Agent cleanup, client hints, preserved engine version and request-rule construction. End-to-end installation and video playback have **not yet been verified**.

## References

- [Chrome request-header rules](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest)
- [Content script configuration](https://developer.chrome.com/docs/extensions/reference/manifest/content-scripts)

This is an unofficial compatibility extension, not affiliated with Paramount or Opera.
