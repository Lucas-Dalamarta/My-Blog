import { COLORS } from "../../themes";

export const ThisTagDoesEvilThingsDontLookIntoItPlease = () => {
  const codeToRunOnClient = `
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