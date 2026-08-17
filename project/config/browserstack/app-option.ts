type BrowserStackAppUpload =
  | string
  | {
      path: string;
      custom_id: string;
    };

export function resolveBrowserStackAppOption(
  localAppPath: string,
  customId: string,
): BrowserStackAppUpload {
  const uploadedAppId = process.env.BROWSERSTACK_APP_ID;
  if (uploadedAppId) {
    return uploadedAppId;
  }

  return { path: localAppPath, custom_id: customId };
}

export function requireIosBrowserStackApp(): string {
  const iosApp = process.env.IOS_APP_PATH || process.env.BROWSERSTACK_APP_ID;
  if (!iosApp || iosApp.endsWith('.zip')) {
    throw new Error(
      'iOS no BrowserStack precisa de IPA (dispositivo real), não do zip de simulator. Defina IOS_APP_PATH ou BROWSERSTACK_APP_ID=bs://…',
    );
  }

  return iosApp;
}

export function resolveBrowserStackServiceApp(
  appPath: string,
  customId: string,
): BrowserStackAppUpload {
  if (appPath.startsWith('bs://')) {
    return appPath;
  }

  return resolveBrowserStackAppOption(appPath, customId);
}
