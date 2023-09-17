import type { ConcurrentlyCommandInput } from 'concurrently';

function getTailwindCommand(watch: boolean) {
  return `./node_modules/.bin/tailwindcss -c ./src/client/tailwind.config.ts -i ./src/client/styles.css -o ./dist/client/styles.css ${
    watch ? '--watch' : ''
  }`;
}

export function buildCss(watch: boolean): ConcurrentlyCommandInput {
  return {
    name: 'css',
    command: getTailwindCommand(watch),
    prefixColor: 'green',
  };
}
