import express from 'express';
import { usuarioActual } from '@eloyk/comun';

const router = express.Router();

router.get('/api/usuario/usuarioactual', usuarioActual, (req, res) => {
  res.send({ usuarioActual: req.usuarioActual || null });
});

export { router as usuarioActualRouter };
