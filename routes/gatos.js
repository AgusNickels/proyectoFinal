import { Router } from 'express';
import { readJSON } from '../const.js';

const gatos = readJSON('./json/gatos.json');

export const gatoRouter = Router();

gatoRouter.get('/', (req, res) => {
    res.json(gatos);
})