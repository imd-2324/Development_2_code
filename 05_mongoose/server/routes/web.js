import DatabaseController from "../controllers/DatabaseController.js";
import PageController from "../controllers/PageController.js";
import studentRoutes from "./studentRoutes.js";
import apiRoutes from '../api/api.js';
import express from 'express';


const router = express.Router();

//Page routes
router.get('/', PageController.index);

//Api routes
router.use('/api', apiRoutes)

//Student routes
router.use('/students', studentRoutes);

//Database routes
router.get('/database', DatabaseController.index);



export default router;