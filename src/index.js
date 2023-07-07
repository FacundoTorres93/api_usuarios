const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/usuario');

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes); // anteponemos el profijo de routes



//routes para obtener 
app.get('/', (req, res) =>{
    res.send('Bievenida a la API')
})

// mongodb conexión
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>console.log('Conectado con MongoDb Atlas'))
    .catch((error)=> console.error(error));

app.listen(port, () =>{
    console.log('El servidor esta funcionando en el puerto', port);
});