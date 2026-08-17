import { useBrowserStackLocalTunnel } from '../environment/execution-target';

type BrowserStackAppUpload =
  | string
  | {
      path: string;
      custom_id: string;
    };

export function createBrowserStackService(
  app: BrowserStackAppUpload,
): ['browserstack', Record<string, unknown>] {
  const shouldUseLocalTunnel = useBrowserStackLocalTunnel();
  const tunnelOptions: Record<string, string> = {
    onlyAutomate: 'true',
    force: 'true',
  };

  if (process.env.BROWSERSTACK_FORCE_LOCAL === 'true') {
    tunnelOptions.forceLocal = 'true';
  }

  return [
    'browserstack',
    {
      app,
      browserstackLocal: shouldUseLocalTunnel,
      opts: shouldUseLocalTunnel ? tunnelOptions : undefined,
    },
  ];
}
