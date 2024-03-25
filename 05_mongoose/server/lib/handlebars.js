import { VIEWS_PATH } from "../consts.js";
import {create} from 'express-handlebars';

export const createHandlebarsEngine = (app) => {
    //Handlebars template engine creation
    const hbs = create({
        extname: 'hbs',
    })

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
    app.set('views', VIEWS_PATH);
}