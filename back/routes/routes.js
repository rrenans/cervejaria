import CervejaController from '../src/Controller/CervejaController';
import express from 'express';

const router = express.Router();

router.get('/cervejas', CervejaController.index);
router.post('/cervejas', CervejaController.create);
router.delete('/cervejas/:id', CervejaController.deletar);
router.put('/cervejas/:id', CervejaController.updatar);

export default router;