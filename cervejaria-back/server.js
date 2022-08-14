import express from 'express';

import CervejaController  from './src/controller/CervejaController'
import './src/database/database'

const app = express();
const porta = 3434;

app.use(express.json());

app.get('/cervejas', CervejaController.index);
app.post('/cervejas', CervejaController.create);


app.listen(porta, () => {
    console.log("logado na porta " + porta);
});