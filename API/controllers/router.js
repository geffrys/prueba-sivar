import { Router } from 'express';
import empresas from './empresas.js';
import usuarios from './usuarios.js';

const routes = Router();


routes.get('/health', (req, res) => {
    res.status(200).send('OK');
});
routes.use('/empresas', empresas);
routes.use('/usuarios', usuarios);


export default routes;