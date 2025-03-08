
import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

export const shadcnPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ':root': {
        '--font-sans': 'Inter, var(--font-sans)',
      },
      html: {
        fontFamily: 'var(--font-sans)',
      },
    });
  },
  {
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
        },
      },
    },
  }
);
