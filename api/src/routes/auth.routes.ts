import { Router } from 'express';
import { checkUser, login, register } from '../controllers/auth.controllers';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verifyUser', checkUser);

export default router;