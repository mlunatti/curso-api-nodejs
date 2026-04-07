/*var http = require('http') //Importamos modulo http

http.createServer(function(req,res){
    res.writeHead(200,{'conten-type': 'text/html'})
    res.end("Hola!!!");
}
).listen(5000)

console.log("Servidor funcionando en http://localhost:5000 ");

*/

// aplicacion basica con express

const express = require('express'); // importa express
const app = express(); // crea una instancia de express

// -------------- CONFIGURACIONES --------------

app.use(express.json()); // permite que express entienda json
app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios enviados por post


// -------------- RUTAS --------------

// cuando es GET recibo el dato por la url
app.get('/:nombre', (req, res) => { // req: request, res: response
    res.send('Hola ' + req.params.nombre); // envia una respuesta y extrae el nombre del parámetro
});

// cuando es POST recibo el dato por el BODY
app.post('/', (req, res) => { // req: request, res: response
    res.send('Hola ' + req.body.nombre); // envia una respuesta y extraigo el nombre del body
});


// ---------- PUERTO ----------
app.listen(5000); // escucha en el puerto 5000
console.log('Servidor corriendo en el puerto 5000');


// COMENTARIOS
// al querer utilizar req.body, se debe utilizar  --> app.use(express.json());