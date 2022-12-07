import { Router } from 'express';
import { addCoin, getCoinById, removeCoin } from '../controllers/coin.controllers';

const router = Router();

router.get('/:id', getCoinById);
router.post('/:id', addCoin);
router.delete('/:id', removeCoin);


export default router;