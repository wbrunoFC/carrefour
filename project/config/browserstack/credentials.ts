export function requireBrowserStackCredentials(): { user: string; key: string } {
  const user = process.env.BROWSERSTACK_USERNAME;
  const key = process.env.BROWSERSTACK_ACCESS_KEY;

  if (!user || !key) {
    throw new Error(
      'TARGET=browserstack exige BROWSERSTACK_USERNAME e BROWSERSTACK_ACCESS_KEY (veja .env.example)',
    );
  }

  return { user, key };
}
