import express from 'express';

import { perroRouter } from './routes/perros.js';
import { gatoRouter } from './routes/gatos.js';
import { productoPerroRouter } from './routes/productosPerros.js';
import { productoGatoRouter } from './routes/productosGatos.js';

const app = express();

const PORT = process.env.PORT ?? 3005;

app.use(express.json()); //Middleware

app.get('/', (req, res) => { res.send('Hola mundo'); });

app.use('/perros', perroRouter);
app.use('/gatos', gatoRouter);
app.use('/productosPerros', productoPerroRouter);
app.use('/productosGatos', productoGatoRouter);

app.use((req, res) =>{ res.status(404).json({ message: '404 NOT FOUND'}); });


app.listen(3005, () => {
    console.log(`Servidor en puerto http://localhost:${PORT}`);
});