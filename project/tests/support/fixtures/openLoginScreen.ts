import { page } from './page';

/** Abre Login via side-menu (app demo sem deep-link nos testes). */
export async function openLoginScreen() {
  const menu = page('side-menu');
  const login = page('login');
  try {
    await menu.click('menuButton');
    await menu.click('itemLogin');
  } catch {
    // já pode estar em Login / menu aberto
  }
  await login.waitForDisplayed('screen');
  await login.click('loginTab');
  return login;
}
