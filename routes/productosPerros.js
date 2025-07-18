import { Router } from 'express';
import { readJSON } from '../const.js';

const productosPerro = readJSON('./json/productosPerros.json');

export const productoPerroRouter = Router();

productoPerroRouter.get('/', (req, res) => {
    res.json(productosPerro);
})