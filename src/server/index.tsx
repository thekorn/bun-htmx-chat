import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import '@kitajs/html/register';

import Layout from './layout';

const app = new Elysia()
  .use(html())
  .get('/', () => <Layout />)
  .listen(8080);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
