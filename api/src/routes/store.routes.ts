import { Router } from 'express';
import { buyRole } from '../controllers/store.controllers';

const router = Router();

router.post('/buyRole', buyRole);


export default router;