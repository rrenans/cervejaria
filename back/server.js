import express from 'express';
import router from './routes/routes';
import './src/Database/database'

const app = express();
const porta = 3434;

app.use(express.json());
app.use('/', router);

app.listen(porta, () => {
    console.log("logado na porta " + porta);
});