import express from 'express';


import { readJSON } from './const.js';
import { validatePerro } from './schemes/perro.js';

const perros = readJSON('./json/perros.json');

const app = express();


app.use(express.json()); //Middleware

app.get('/', (req, res) => {
    res.status(200).json ({ message: "Hola mundo" });
})

app.get('/perros', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

   // const accessURLs = ['', '', '', ''];
//
   // const origin = req.origin;
//
   // if(accessURLs.includes(origin)){
   //     res.header('Access-Control-Allow-Origin', origin);
   // }

    res.status(200).json(perros);
})

app.get('/perros/:id', (req, res) => {
    const { id } = req.params;

    const perro = perros.find (p => p.id == id);

    if(perro == null){
        res.status(404).json({ message: "ERROR 404" });
    }else{
        res.status(200).json(perro); 
    }
})

app.post('/perros', (req, res) => {

    const response = validatePerro(req.body);

    if(response.success){
        perros.push(response.data);
        res.status(201).json(response);
    }else{
        res.status(404).send(response.error.message);
    }

});

app.options('/perros/:id', (req, res) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
});

app.delete('/perros/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const { id } = req.params;

    const perro = perros.find(p => p.id == id)['nombre'];

    heroes = heroes.filter(hero => hero.id != id);

    if(perro == null) {
        res.status(400).send({ message: 'ERROR' });
        return;
    }

    res.status(200).send({ message: `Se borro a ${hero}`});
})

app.listen(3005, () => {
    console.log(`Servidor en puerto http://localhost:3005`);
})