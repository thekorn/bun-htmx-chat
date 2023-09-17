import type { Config } from 'tailwindcss';
import { getContent, hxPlugin } from './lib/tailwind';

export default {
  content: getContent(),
  theme: {
    extend: {
      colors: {
        primary: '#000000',
      },
    },
  },
  plugins: [hxPlugin],
} satisfies Config;
