import { Request, Response, Router } from 'express';
import { checkoutMercadoPago } from '../controllers/mercadopago.controllers';

const router = Router();

router.post('/mp', checkoutMercadoPago);
router.post('/mp/notification', (req: Request, res: Response) => {
    console.log(req.query);
    console.log(req.body);
    //compare id_mp with preference_id 
    res.json('ok')
});

export default router;