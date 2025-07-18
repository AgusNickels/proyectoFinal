import { Router } from 'express';
import { readJSON } from '../const.js';

const perros = readJSON('./json/perros.json');

export const perroRouter = Router();

perroRouter.get('/', (req, res) => {
    res.json(perros);
})

perroRouter.get('/id', (req, res) => {
    const {id} = req.params;

    const perro = perros.find(p => p.id == id);

    if(perro == null){
        res.status(404).json({ message: 'Hero Not Found'});
        return;
    }

    res.status(200).json(perro);
})