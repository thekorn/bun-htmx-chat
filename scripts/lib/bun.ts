import type { ConcurrentlyCommandInput } from 'concurrently';

function getBunCommand(watch: boolean, minify: boolean) {
  return `bun build --target browser ${watch ? '--watch' : ''} ${
    minify ? '--minify' : ''
  } ./src/client/index.ts --outfile ./dist/client.js`;
}

export function buildClients(
  watch: boolean,
  minify: boolean,
): ConcurrentlyCommandInput {
  return {
    name: 'client',
    command: getBunCommand(watch, minify),
    prefixColor: 'blue',
  };
}
