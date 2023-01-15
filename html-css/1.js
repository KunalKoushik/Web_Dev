const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Kunal Koushik</title>
  </head>
  <body>
      <h1> My first page </h1> 
      <!-- headings are from 1 to 6 -->
      <p>  <strong>KUNAL</strong> <br>  <em>KOUSHIK</em>       </p>
      <!-- horizontal bar -->
      <hr>
      
      <!-- adding link to attach new page -->
      <a href="https://justpadhai.blogspot.com/">My website</a>
  
      <!-- adding image -->
      <img src="F:\Web Development\LOGO (1).jpg" alt="kk">
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});