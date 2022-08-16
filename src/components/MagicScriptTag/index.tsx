export const COLORS = {
  light: {
    text: "#222",
    background: "#fff",
    primary: "#07c",
  },
  dark: {
    text: "#fff",
    background: "#222",
    primary: "#0cf",
  },
}

export const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      /* Same code as earlier */
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${COLORS.light.text}'
        : '${COLORS.dark.text}'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${COLORS.light.background}'
        : '${COLORS.dark.background}'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${COLORS.light.primary}'
        : '${COLORS.dark.primary}'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};