async function configure() {
  const ua = navigator.userAgent.replace(/\s(?:OPR|Opera|Opera GX)\/[^\s]+/gi, '').trim();
  const full = ua.match(/(?:Chrome|Chromium)\/([\d.]+)/)?.[1];
  if (!full) throw new Error('Unable to detect Chromium version');
  const major = full.split('.')[0];
  const headers = [
    {header: 'user-agent', operation: 'set', value: ua},
    {header: 'sec-ch-ua', operation: 'set', value: `"Chromium";v="${major}", "Google Chrome";v="${major}", "Not_A Brand";v="24"`},
    {header: 'sec-ch-ua-full-version-list', operation: 'set', value: `"Chromium";v="${full}", "Google Chrome";v="${full}", "Not_A Brand";v="24.0.0.0"`}
  ];
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{id: 1, priority: 1, action: {type: 'modifyHeaders', requestHeaders: headers},
      condition: {requestDomains: ['paramountplus.com'], resourceTypes: ['main_frame', 'sub_frame', 'script', 'xmlhttprequest', 'media', 'other']}}]
  });
}
chrome.runtime.onInstalled.addListener(() => configure().catch(console.error));
chrome.runtime.onStartup.addListener(() => configure().catch(console.error));
