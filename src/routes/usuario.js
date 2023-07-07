const express = require('express');
const userSchema = require('../models/user'); // modelo de usuario

const router= express.Router();

// EndPoint para crear usuario
router.post('/users', (req, res) =>{
    // res.send('Creando usuario');
   const user=  userSchema(req.body);
   user
   .save() // guardamos los datos
   .then((data) => res.json(data)) // si sale todo bien respondemos con los datos
   .catch((error) => res.json({message: error}));// en caso de error
});


// EndPoint para obtener los usuarios
router.get('/users', (req, res) =>{
    userSchema
   .find() // guardamos los datos
   .then((data) => res.json(data)) // si sale todo bien respondemos con los datos
   .catch((error) =>  res.json({message: error}));// en caso de error
});

// EndPoint para obtener un solo usuario por ID
router.get('/users/:id', (req, res) =>{
    const { id } = req.params;
    userSchema
   .findById(id) // guardamos los datos
   .then((data) => res.json(data)) // si sale todo bien respondemos con los datos
   .catch((error) => res.json({message: error})); // en caso de error
});


// EndPoint para actualizar usuarios por ID
router.put('/users/:id', (req, res) =>{
    const { id } = req.params;
    const { name, age, email } = req.body; // estan en el body
    userSchema
    .updateOne({ _id: id }, { $set: {name, age, email}}) //dos objetos, el id, y el objeto que se va a actualizar(set) con atributos
    .then((data) => res.json(data)) // si sale todo bien respondemos con los datos
    .catch((error) => res.json({message: error})); // en caso de error
});

// EndPoint para eliminar usuarios por ID
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;