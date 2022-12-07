import { Router } from 'express';
import { login, register } from '../controllers/auth.controllers';
import { getUser } from '../controllers/user.controllers';
import { checkAuth, checkRoleAuth } from '../middlewares/auth.middlewares';

const router = Router();

router.get('/user', checkAuth, checkRoleAuth(['User']), getUser)
router.post('/register', register);
router.post('/login', login);

export default router;