import express from 'express';
import CoffeeController from '../controllers/CoffeeController.js';


const router = express.Router();

//Page routes
router.get('/', CoffeeController.index);
router.post('/coffee/order', CoffeeController.store);

//Dashboard route met bestellingen op
router.get('/dashboard', CoffeeController.dashboard);


export default router;