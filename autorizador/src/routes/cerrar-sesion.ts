import express from 'express';

const router = express.Router();

router.post('/api/usuario/cerrarsesion', (req, res) => {
  req.session = null;

  res.send({});
});

export { router as cerrarsesionRouter };
