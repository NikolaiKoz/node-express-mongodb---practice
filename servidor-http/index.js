// // Importo la libreria http
// const http = require('http');
// //Creo un puerto para mi servidor
// const port = 5000;

// //Creo una funcion y un servidor, el cual tiene como argumento un requerimiento y una respuesta
// const server = http.createServer((req, res) => {
//     res.end('Esta es la respuesta 🚀');
// });

// server.listen(port, () => console.log('Funciona!!! 🤪 Jajaja tremendo!'));

// ---------------------------------------- Ahora hacemos lo mismo con Express ----------------------

const express = require('express')
const app = express()
const port = 5000

app.use(express.static('./public')); //Esto es un middelware

app.get('/formulario', (req, res) => {
    
    res.send('Formulario Enviado....');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Pagina de home')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})