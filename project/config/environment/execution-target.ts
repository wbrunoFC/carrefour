const BROWSERSTACK_TARGETS = new Set(['browserstack', 'bs']);

export function isBrowserStackTarget(): boolean {
  const target = (process.env.TARGET || 'local').toLowerCase();
  return BROWSERSTACK_TARGETS.has(target);
}

/** Túnel BrowserStack Local. Default ligado no TARGET=browserstack. Opt-out: BROWSERSTACK_LOCAL=false. */
export function useBrowserStackLocalTunnel(): boolean {
  const rawValue = (process.env.BROWSERSTACK_LOCAL || 'true').toLowerCase();
  return rawValue !== 'false' && rawValue !== '0';
}
