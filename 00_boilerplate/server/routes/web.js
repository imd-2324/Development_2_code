import DatabaseController from "../controllers/DatabaseController.js";
import PageController from "../controllers/PageController.js";
import projectRoutes from "./projectRoutes.js";
import express from 'express';


const router = express.Router();

//Page routes
router.get('/', PageController.index);

//Student routes
router.use('/projects', projectRoutes);

//Database routes
router.get('/database', DatabaseController.index);



export default router;