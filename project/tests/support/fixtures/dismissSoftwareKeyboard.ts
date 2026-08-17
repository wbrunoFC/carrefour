// ponytail: y fixo no header; se tap abrir Menu/tab, ler safe area do device
const TAP_OUTSIDE_KEYBOARD_Y = 80;

async function isSoftwareKeyboardShown(): Promise<boolean> {
  try {
    return await driver.isKeyboardShown();
  } catch {
    return false;
  }
}

async function tapOutsideKeyboard(): Promise<void> {
  const { width } = await driver.getWindowSize();
  await driver
    .action('pointer', { parameters: { pointerType: 'touch' } })
    .move({ duration: 0, x: Math.floor(width / 2), y: TAP_OUTSIDE_KEYBOARD_Y })
    .down()
    .pause(80)
    .up()
    .perform();
}

/** Fecha teclado. iOS: WDA `hideKeyboard` falha em campo senha; tap no topo. */
export async function dismissSoftwareKeyboard(): Promise<void> {
  if (!(await isSoftwareKeyboardShown())) {
    return;
  }

  if (driver.isIOS) {
    await tapOutsideKeyboard();
    return;
  }

  await driver.hideKeyboard();
}
