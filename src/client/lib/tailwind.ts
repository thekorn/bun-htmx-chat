import plugin from 'tailwindcss/plugin';

export function getContent() {
  return ['./src/server/**/*.tsx'];
}

export const hxPlugin = plugin(function ({ addVariant }) {
  addVariant('htmx-settling', ['&.htmx-settling', '.htmx-settling &']);
  addVariant('htmx-request', ['&.htmx-request', '.htmx-request &']);
  addVariant('htmx-swapping', ['&.htmx-swapping', '.htmx-swapping &']);
  addVariant('htmx-added', ['&.htmx-added', '.htmx-added &']);
});
