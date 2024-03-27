import express from 'express';
import StudentController from '../controllers/StudentController.js';
import Auth from '../middleware/Auth.js';


const router = express.Router();

//Middleware voorbeeld
router.use(Auth.checkAuth);

router.get('/', StudentController.index);
router.get('/create', StudentController.create);
router.post('/store', StudentController.store);
router.delete('/destroy/:id', StudentController.destroy);


export default router;