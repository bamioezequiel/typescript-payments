import { Request, Response, Router } from 'express';
import { checkoutMercadoPago } from '../controllers/mercadopago.controllers';

const router = Router();

router.post('/mp', checkoutMercadoPago);
router.get('/mp/response', (req: Request, res: Response) => {
    const query = req.query;
    console.log(query);
    //compare id_mp with preference_id 
    res.json(query)
});
router.get('/failure', (req: Request, res: Response) => {

});



export default router;