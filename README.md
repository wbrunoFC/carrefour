# carrefour-qa

Automação E2E mobile (WebdriverIO + Appium) do app demo WDIO Native.

- Constituição Speckit: [`.specify/memory/constitution.md`](.specify/memory/constitution.md)
- Cenários (fonte canônica): [`project/features/`](project/features/)
- Organização de testes: [`.cursor/rules/architecture/folder-tests.md`](.cursor/rules/architecture/folder-tests.md)

npm root: `project/`. Testes API (ServeRest): `npm run test:api`. Testes Android local: `npm run test:android`.

CI: [`.github/workflows/api-tests.yml`](.github/workflows/api-tests.yml) e [`.github/workflows/e2e-android.yml`](.github/workflows/e2e-android.yml) — disparam em PR/push para `main`, cada um com job e artefato Allure próprio.

APK demo (`v2.2.0`) não vai no git (limite 100 MB). Local: [release oficial](https://github.com/webdriverio/native-demo-app/releases/tag/v2.2.0) em `project/apps/v2.2.0/android/`. CI baixa o mesmo arquivo.
