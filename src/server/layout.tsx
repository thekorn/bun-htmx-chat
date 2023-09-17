import Html from '@kitajs/html';

export default function ({ children }: { children: Html.Children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/_assets/styles.css" rel="stylesheet" />
        <script src="/_assets/client.js"></script>
        <title>Hello World</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
