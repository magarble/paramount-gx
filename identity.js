(() => {
  // Keep the actual Chromium version instead of claiming an unrelated engine.
  const clean = value => value.replace(/\s(?:OPR|Opera|Opera GX)\/[^\s]+/gi, '').trim();
  const ua = clean(navigator.userAgent);
  const chromium = ua.match(/(?:Chrome|Chromium)\/([\d.]+)/)?.[1];
  if (!chromium) return;
  const major = chromium.split('.')[0];
  const brands = [{brand: 'Chromium', version: major}, {brand: 'Google Chrome', version: major}, {brand: 'Not_A Brand', version: '24'}];
  const fullVersionList = brands.map(b => ({...b, version: b.brand === 'Not_A Brand' ? '24.0.0.0' : chromium}));
  const define = (target, key, value) => {
    try { Object.defineProperty(target, key, {get: () => value, configurable: true}); } catch (_) {}
  };
  define(navigator, 'userAgent', ua);
  define(navigator, 'appVersion', ua.replace(/^Mozilla\//, ''));
  define(navigator, 'vendor', 'Google Inc.');
  const original = navigator.userAgentData;
  if (original) {
    const mobile = original.mobile;
    const platform = original.platform;
    const low = () => ({brands: brands.map(b => ({...b})), mobile, platform});
    const data = {
      get brands() { return low().brands; }, mobile, platform,
      toJSON: low,
      async getHighEntropyValues(hints) {
        const values = await original.getHighEntropyValues(hints);
        return {...values, ...low(),
          ...('fullVersionList' in values ? {fullVersionList: fullVersionList.map(b => ({...b}))} : {}),
          ...('uaFullVersion' in values ? {uaFullVersion: chromium} : {})};
      }
    };
    define(navigator, 'userAgentData', data);
  }
  // Legacy feature detection sometimes looks for this Opera-specific object.
  try { delete window.opr; delete window.opera; } catch (_) {}
})();
