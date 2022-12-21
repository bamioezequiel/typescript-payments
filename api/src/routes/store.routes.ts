import { Router } from 'express';
import { buyRoles } from '../controllers/store.controllers';

const router = Router();

router.post('/buyRole', buyRoles);


export default router;