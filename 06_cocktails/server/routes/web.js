import DatabaseController from "../controllers/DatabaseController.js";
import PageController from "../controllers/PageController.js";
import CocktailController from "../controllers/CocktailController.js";
import projectRoutes from "./projectRoutes.js";
import express from 'express';


const router = express.Router();

//Page routes
router.get('/', PageController.index);

//Student routes
router.use('/projects', projectRoutes);

//Cocktail routes
router.get('/cocktails', CocktailController.index);
router.get('/cocktails/:id', CocktailController.show);

//Database routes
router.get('/database', DatabaseController.index);



export default router;