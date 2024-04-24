import express from 'express';
import CoffeeController from '../controllers/CoffeeController.js';


const router = express.Router();

//Page routes
router.get('/', CoffeeController.index);
router.post('/coffee/order', CoffeeController.store);
router.get('/thanks', CoffeeController.thanks);




export default router;