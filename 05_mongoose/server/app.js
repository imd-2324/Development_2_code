import { router } from './routes/web.js';
import { createHandlebarsEngine } from './lib/handlebars.js';
import { API } from './api/api.js';
import { createApp } from './lib/express.js';


const app = createApp();

//Handlebars engine (lib/handlebars.js)
createHandlebarsEngine(app);

//Access to API
API(app);

//Router
router(app);



