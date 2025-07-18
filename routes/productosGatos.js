import { Router } from 'express';
import { readJSON } from '../const.js';

const productosGato = readJSON('./json/productosgatos.json');

export const productoGatoRouter = Router();

productoGatoRouter.get('/', (req, res) => {
    res.json(productosGato);
})

productoGatoRouter.get('/:id', (req, res) => {
    res.json({ message: `Encontré el ID ${id} en productos`});
})
