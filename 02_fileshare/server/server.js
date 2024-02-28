// Stap 1: Importeer de nodige modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Stap 2: Maak een nieuwe express applicatie
const app = express();
app.use(express.json()); // voor het parsen van application/json
app.use(express.urlencoded({ extended: true })); // voor het parsen van application/x-www-form-urlencoded
const port = 3000;

// Stap 3: include client folder als static website
const public_path = path.join(__dirname, '../client');
console.log(public_path);
app.use(express.static(public_path));


// Stap 4: Bouw de API op
//ophalen van de lijst van bestanden binnen de /client/uploads folder
app.get('/api/files', (req, res) => {
    const files = fs.readdirSync(public_path + '/uploads');
    res.json(files);
});


// Stap 5: Start de server op een specifieke poort
app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});