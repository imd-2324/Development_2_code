import express from 'express';
import ProjectController from '../controllers/ProjectController.js';
import PageController from '../controllers/PageController.js';
import Auth from '../middleware/Auth.js';


const router = express.Router();

//Middleware voorbeeld
router.use(Auth.checkAuth);

//GET routes
router.get('/', ProjectController.index);
router.get('/create', ProjectController.create);
router.get('/about', PageController.about);
router.get('/:id', ProjectController.show);

//POST routes
router.post('/store', ProjectController.store);

//DELETE routes
router.delete('/:id', ProjectController.destroy);


export default router;