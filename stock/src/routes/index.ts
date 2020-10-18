import express, { Request, Response } from 'express';
import { requireAuth } from '@eloyk/comun';
import { Stock } from '../models/stock';

const router = express.Router();

router.get(
  '/api/stock',
  requireAuth,
  async (req: Request, res: Response) => {
    const stock = await Stock.find();

    res.send(stock);
  }
);

export { router as indexStockRouter };
