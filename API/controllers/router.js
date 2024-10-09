import { Router } from 'express';
import empresas from './empresas.js';
import usuarios from './usuarios.js';
import puntosventa from './puntosventa.js';

const routes = Router();


routes.get('/health', (req, res) => {
    res.status(200).send('OK');
});
routes.use('/empresas', empresas);
routes.use('/usuarios', usuarios);
routes.use('/puntosventa', puntosventa);


export default routes;