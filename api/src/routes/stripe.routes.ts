import { Router } from 'express';
import { checkoutStripe } from '../controllers/stripe.controllers';

const router = Router();

router.post('/create-checkout-session', checkoutStripe);


export default router;