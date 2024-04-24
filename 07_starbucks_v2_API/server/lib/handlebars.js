import { VIEWS_PATH } from "../consts.js";
import {create} from 'express-handlebars';
import moment from 'moment';

export const createHandlebarsEngine = (app) => {
    //Handlebars template engine creation
    const hbs = create({
        extname: 'hbs',
    })

    //Handlebars helpers
    hbs.handlebars.registerHelper('formatDate', (date, format ='MMMM Do YYYY, h:mm:ss a') => {
        return moment(date).format(format);
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
    app.set('views', VIEWS_PATH);
}