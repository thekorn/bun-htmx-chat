import concurrently from './lib/run';

import { buildCss } from './lib/tailwind';
import { buildClients } from './lib/bun';

const { result } = concurrently([
  {
    command: 'bun run --watch src/server/index.tsx',
    name: 'server',
    prefixColor: 'red',
  },
  buildCss(true),
  buildClients(true, false),
]);

result.then(
  () => console.log('success'),
  () => console.log('errro'),
);
