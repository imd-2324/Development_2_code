import express from "express";
import { PORT } from "../consts.js";

export const createApp = () => {
  const app = express();
  app.use(express.json()); // voor het parsen van application/json
  app.use(express.urlencoded({ extended: true })); // voor het parsen van application/x-www-form-urlencoded
  app.use(express.static("client"));

  //CORS error oplossen (cross origin resource sharing)
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  //Initialize the app
  app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
  });

  return app;
};
