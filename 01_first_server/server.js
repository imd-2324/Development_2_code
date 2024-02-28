// Stap 1: Importeer de benodigde modules
const express = require('express');
const fs = require('fs');

// Stap 2: Maak een nieuwe express applicatie
const app = express();

app.use(express.json()); // voor het parsen van application/json
app.use(express.urlencoded({ extended: true })); // voor het parsen van application/x-www-form-urlencoded

//CORS error oplossen (cross origin resource sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Stap 3: Definieer routes voor de API
app.get('/hello', (req, res) => {
    res.send('Hallo Werelddddd!');
});

app.get('/api/data', (req, res) => {
    //check if file exists
    fs.access('data/content.txt', fs.F_OK, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Het bestand bestaat niet' });
            return;
        }
    });
    
    fs.readFile('data/content.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Er is een fout opgetreden bij het lezen van het bestand' });
        } else {
            res.json({ content: data });
        }
    });
});

app.post('/api/data', (req, res) => {
    //content opvragen uit de request
    let content = req.body.content;
    //content wegschrijven naar bestand
    fs.appendFile('data/content.txt', content, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Er is een fout opgetreden bij het schrijven van het bestand' });
        } else {
            res.json({ message: 'Het bestand is succesvol geschreven' });
        }
    });
}
);

// Stap 4: Start de server op een specifieke poort
const port = 3000;
app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});