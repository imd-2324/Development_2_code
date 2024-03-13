import { index } from "../controllers/PageController.js"
import { studentList, studentCreate } from "../controllers/StudentController.js"
import { databaseInfo } from "../controllers/DatabaseController.js";

export const router = (app) => {

    //PageController
    app.get('/', index);

    //StudentController
    app.get('/students', studentList);
    app.get('/create', studentCreate);

    //DatabaseController
    app.get('/database', databaseInfo);
}