import path from 'node:path';

import { projectRoot } from '../shared/project-paths';

const APP_VERSION = 'v2.2.0';

export const ANDROID_APP_PATH = path.join(
  projectRoot,
  'apps',
  APP_VERSION,
  'android',
  'android.wdio.native.app.v2.2.0.apk',
);

export const IOS_SIMULATOR_APP_PATH = path.join(
  projectRoot,
  'apps',
  APP_VERSION,
  'ios',
  'ios.simulator.wdio.native.app.v2.2.0.zip',
);

export const ANDROID_APP_PACKAGE = 'com.wdiodemoapp';
export const IOS_BUNDLE_ID = 'org.wdiodemoapp';

export const BROWSERSTACK_PROJECT_NAME = 'carrefour-qa';
export const BROWSERSTACK_ANDROID_APP_CUSTOM_ID = 'wdio-demo-android';
