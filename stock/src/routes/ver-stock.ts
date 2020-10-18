import express, { Request, Response } from 'express';
import {
  ErrorNoEncontrado,
  requireAuth,
} from '@eloyk/comun';
import { Stock } from '../models/stock';

const router = express.Router();

router.get(
  '/api/stock/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const stock = await Stock.findById(req.params.id);

    if (!stock) {
      throw new ErrorNoEncontrado();
    }

    res.send(stock);
  }
);

export { router as verStockRouter };
