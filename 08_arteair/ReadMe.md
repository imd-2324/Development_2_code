Maak de ArteAir applicatie dynamisch na op basis van het MVC pattern in Node.JS, gebruik handlebars om html te genereren en Mongo als database.

## Stappenplan Algemeen:
- Kopieer de nodige bestanden vanuit de boilerplate naar dit project.
- Installeer de packages via `npm install`
- Maak een nieuwe database aan op je mongodb server en maak 4 collecties aan: aircrafts, airports, flights en orders. Importeer de aircrafts, airports en flights via hun json bestand.
- Maak een kopie van .env.example en pas deze aan.
- Start de website via: `npm run dev`

## Stappenplan index:
- Maak alvast een view aan splits de html op in enerzijds de layout en anderzijds de view met de inhoud van de index pagina. Let er wel op dat je de links naar de css en javascript goed legt. het beste is om deze link absoluut te maken... dus niet `"./css/main.css"` maar wel **`"/css/main.css"`** 
- Maak een Flight model aan in /models/Flight.js en koppel deze via mongoose en een correct schema aan de Flights collection. Let hierbij ok dat je de objectId van from en to koppelt aan een Airport via onderstaande code
```
from: {
    type: Schema.Types.ObjectId,
    ref: 'Airport'
  },
```
- Maak een nieuwe controller aan /controllers/FlightController.js, hierin maak je ook al een index method om de startpagina in op te bouwen. Render ook al meteen de aangemaakte view.
- Maak een nieuwe get route aan voor de startpagina (/) in routes/web.js en koppel deze aan de juiste controller en method
- Haal nu alle vluchten op en geef deze mee met de view. Let hierbij op dat:
  - Je de mongoose objecten omvormt naar JS objecten via de .lean() method.
  - Je ook de from, to en aircraft gaat ophalen via de populate() method
- Bv:
``` 
const flights = await Flight.find()
  .populate('aircraft', 'from', 'to')
  .lean()
```

## Volgende pagina's

Herhaal nu alle stappen (behalve de creatie van een nieuw model en controller) om de detail pagina te maken.

Zorg er ook voor dat een bestelling kan geplaatst worden.

## Extra

Een extra moeilijkheid is nu om ook de zitjes dynamisch met bijhorende layout per rij te genereren volgens de gegevens die bij een aircraft aanwezig is in de database.

Veel succes!