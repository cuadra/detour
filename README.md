# Detour
<img width="1024" height="572" alt="image" src="https://github.com/user-attachments/assets/cc115538-714d-4d6d-ba04-dab081515aec" />
<br>
Detour is a small Chrome extension that registers a `declarativeNetRequest` redirect rule through a background service worker. It is intended for local override workflows where requests for a specific asset URL should be redirected to a different local file or resource.

## Files

- `manifest.json` defines the extension metadata, permissions, and allowed host access.
- `background.js` installs the redirect rule that matches one URL pattern and rewrites it to another URL.
- `rules.json` is present in the repo but is not currently referenced by the manifest.

## Before Loading The Extension

You must update the URL paths in both `manifest.json` and `background.js` before loading the extension:

- In `manifest.json`, change `host_permissions` so it includes the actual site or URL pattern you want the extension to run against.
- In `background.js`, replace `absolutefilepath` with the URL pattern to match.
- In `background.js`, replace `alternativeabsolutefilepath` with the destination URL that should be used for the redirect.

If those values are left as-is, the extension will not match the correct requests and the redirect will not work.

## Load In Chrome

1. Open `chrome://extensions`.
2. Enable Developer mode.
3. Click `Load unpacked`.
4. Select this project folder.

After loading, reload the target page so the redirect rule can apply to new requests.
