# Browser Fix for Paramount+

An unofficial, lightweight extension that helps Opera GX play Paramount+ when the site rejects its browser identity (including unsupported-browser error 100).

[**Download the latest release**](https://github.com/magarble/paramount-gx/releases/latest) · [Report a problem](https://github.com/magarble/paramount-gx/issues) · [Privacy](PRIVACY.md) · [MIT licence](LICENSE)

## Install in Opera GX

**An Add to Opera store button is not available yet.** The current download needs a short manual installation:

1. [Open the latest release](https://github.com/magarble/paramount-gx/releases/latest) and download **browser-fix-paramount-plus-1.0.0.zip**.
2. Extract the ZIP into a permanent folder.
3. Open `opera://extensions` in Opera GX and enable **Developer mode**.
4. Click **Load unpacked** and select the extracted folder containing `manifest.json`.
5. Reload your Paramount+ video tab. No extension settings are needed.

Keep the folder in place while installed. A downloaded ZIP is a package, not an automatic installer. Downloading the source using **Code → Download ZIP** also works after extraction.

### Updates and removal

Unpacked installations do not receive automatic updates. Download a new release, extract it over the installed folder and click the extension's reload button at `opera://extensions`. To disable or remove it, use that same page and reload Paramount+.

## How it works

The extension removes Opera branding from the User-Agent exposed to Paramount+ and presents Chrome/Chromium brands in browser client hints. It retains the browser's actual underlying Chromium version. The changes happen automatically on HTTPS Paramount+ pages and requests to that domain.

It does not change DRM, subscriptions, location restrictions, advertising, or video codecs. You still need normal access to Paramount+. It cannot fix every playback issue, and site updates may affect compatibility.

## Privacy and permissions

No analytics, advertising, external code or data collection. It uses only Paramount+ site access and local request-header rules. See the [privacy policy](PRIVACY.md) for details.

## Tested status

Playback was confirmed working by the maintainer in Opera GX on Windows on 19 October 2026. Local code checks also passed for permission scope, User-Agent cleanup, client hints, preserved engine version and request-rule construction. Other browsers, operating systems and future site versions are not verified.

## One-click installation

A store listing must be submitted to and approved by Opera before this project can offer **Add to Opera** and store-managed updates. See [publishing information](PUBLISHING.md). There is no live store listing yet.

## Licence

[MIT](LICENSE), copyright 2026 magarble. You may use, modify and redistribute the code subject to that licence. Paramount and Opera names remain the property of their respective owners; no affiliation or endorsement is claimed.

## Implementation references

- [Chrome request-header rules](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest)
- [Content script configuration](https://developer.chrome.com/docs/extensions/reference/manifest/content-scripts)
