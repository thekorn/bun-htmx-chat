import concurrently from './lib/run';

import { buildCss } from './lib/tailwind';
import { buildClients } from './lib/bun';

const { result } = concurrently([
  {
    command:
      'bun build src/server/index.tsx --minify --outfile dist/server/server.js',
    name: 'server',
    prefixColor: 'red',
  },
  buildCss(false),
  buildClients(false, true),
]);

result.then(
  () => console.log('success'),
  () => console.log('errro'),
);
