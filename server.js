const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App'); 

const server = express();
const port = 3000;

server.use(express.static('dist'));

server.get('*', (req, res) => {
  const app = ReactDOMServer.renderToString(React.createElement(App));
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>React SSR App</title>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

server.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});