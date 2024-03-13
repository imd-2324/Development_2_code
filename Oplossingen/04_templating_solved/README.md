# Templating & Database Connection Deel 1 Solved

TO RUN:
- Maak dat je in de juiste folder zit (voor deze opdracht /Oplossingen/04_templating_solved)
- npm install
- npm run dev of npm run start

Uitleg:

1. De code in app.js is volledig opgesplitst zodat je nu direct weet waar je iets moet aanpassen

    - Folder 'lib'
        - Alle express configuraties staan nu in lib/express.js
        - Ophalen van de json students staat in lib/helpers.js
        - Het maken en gebruiken van de handlebars template engine staat in lib/handlebars.js

    - Folder 'routes'
        - Hierin zit een web.js file waarin alle routes defined worden.  

    - Folder 'data'
        - Hierin zit de json van de students die uitgelezen of aangepast wordt.

    - Folder 'controllers'
        - Hier komt alle logica in van fetching, rendering, etc... in de form van een functie

    - Folder 'api'
        - Hierin zit api.js waar alle requests zitten die je kan gebruiken (GET, POST, PUT, PATCH, DELETE)

2. In de controller kan je nu ook een style file en script file meegeven. (Zie StudentController)

3. Er zijn Partials gemaakt voor de studentenlijst, navigatie en de footer

4. Bekijk zelf de code nog eens om het volledig te begrijpen. Dit is een structuur die je veel zal terug zien keren in verschillende frameworks en talen.
Heb je nog vragen over de code of begrijp je iets niet? Vraag het aan een medestudent, stuur een bericht op teams of zet het in de classroom (teams).


Opdracht 2 (Les 27/03)

3. Maak Connectie met je MySQL database
4. Maak Connectie met je mongoDB database
5. Zorg dat een bepaalde route de status van de connection teruggeeft.
6. Pas de site aan zodat het zich aanpast als er wel of niet een connection is.

