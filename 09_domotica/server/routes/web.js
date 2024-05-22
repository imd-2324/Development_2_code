import DomoticaController from "../controllers/DomoticaController.js";
import express from 'express';


const router = express.Router();

//Page routes
router.get('/', DomoticaController.index);

//Student routes
router.use('/room/:id', DomoticaController.show);

//API routes
router.post('/togglebutton', DomoticaController.togglebutton);


export default router;