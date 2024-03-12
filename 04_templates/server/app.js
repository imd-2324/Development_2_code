import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';


const app = express();
app.use(express.json()); // voor het parsen van application/json
app.use(express.urlencoded({ extended: true })); // voor het parsen van application/x-www-form-urlencoded

//public folder
const baseUrl = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const public_path = path.join(baseUrl, 'client');
console.log(public_path);
app.use(express.static(public_path));

//CORS error oplossen (cross origin resource sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(3000, () => {
    console.log('Server draait op http://localhost:3000');
})
