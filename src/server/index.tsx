/// <reference types="@kitajs/html/htmx.d.ts" />
import '@kitajs/html/register';

import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';
import Layout from './layout';
import Main from './components/main';

const app = new Elysia()
  .use(html())
  .get('/', function () {
    return (
      <Layout>
        <Main></Main>
      </Layout>
    );
  })
  .post(
    '/initChat',
    function ({ body: { username } }) {
      return <div>Hello {username}</div>;
    },
    {
      body: t.Object({
        username: t.String(),
      }),
    },
  )
  .get('/_assets/:filename', function ({ params: { filename } }) {
    return new Response(Bun.file(`./dist/client/${filename}`));
  })
  .listen(8080);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
