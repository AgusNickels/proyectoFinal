import { Router } from 'express';
import { readJSON } from '../const.js';

const productosPerro = readJSON('./json/productosPerros.json');

export const productoPerroRouter = Router();

productoPerroRouter.get('/', (req, res) => {
    res.json(productosPerro);
})

productoPerroRouter.get('/:id', (req, res) => {
    const {id} = req.params;

    const productoPerro = productosPerro.find(p => p.id == id);

    if(productoPerro == null){
        res.status(404).json({ message: 'perro Not Found'});
        return;
    }

    res.status(200).json(productoPerro);
})