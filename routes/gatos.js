import { Router } from 'express';
import { readJSON } from '../const.js';

const gatos = readJSON('./json/gatos.json');

export const gatoRouter = Router();

gatoRouter.get('/', (req, res) => {
    res.json(gatos);
})

gatoRouter.get('/:id', (req, res) => {
    const {id} = req.params;

    const gato = gatos.find(p => p.id == id);

    if(gato == null){
        res.status(404).json({ message: 'perro Not Found'});
        return;
    }

    res.status(200).json(gato);
})