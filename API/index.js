import express from 'express';
import router from './controllers/router.js';


// utilidades
import configs from './env.js';

const app = express();

app.use(express.json());

app.use('/api', router );


app.listen(configs.PORT);