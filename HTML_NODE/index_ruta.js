const http = require('http');
const fs = require('fs');
http
  .createServer((req, res) => {
    // Paso 1
    if (req.url == '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('index_ruta.html', 'utf8', (err, html) => {
        res.end(html);
      });
    }
    // Paso 2
    if (req.url == '/estilos') {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      fs.readFile('index_ruta.css', (err, css) => {
        res.end(css);
      });
    }
  })
  .listen(3000, () => console.log('Servidor encendido'));
