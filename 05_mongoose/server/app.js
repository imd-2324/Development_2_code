import router from "./routes/web.js";
import { createHandlebarsEngine } from "./lib/handlebars.js";
import { createApp } from "./lib/express.js";
import connectToDB from "./config/mongoose.js";





const app = createApp();

connectToDB();

//Handlebars engine (lib/handlebars.js)
createHandlebarsEngine(app);

//Router
app.use(router);
