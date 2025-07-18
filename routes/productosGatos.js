import { Router } from 'express';
import { readJSON } from '../const.js';

const productosGato = readJSON('./json/productosgatos.json');

export const productoGatoRouter = Router();

productoGatoRouter.get('/', (req, res) => {
    res.json(productosGato);
})

productoGatoRouter.get('/:id', (req, res) => {
    const {id} = req.params;

    const productoGato = productosGato.find(p => p.id == id);

    if(productoGato == null){
        res.status(404).json({ message: 'perro Not Found'});
        return;
    }

    res.status(200).json(productoGato);
})