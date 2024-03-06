const express = require("express");
const path = require("path");
const fs = require("fs");

// For reading .env file
const dotenv = require("dotenv");
dotenv.config();

//Startup express server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//log the .env PORT
const PORT = process.env.PORT || 5000; //indien een .env file met PORT aanwezig is , anders overschakelen naar PORT 5000

//Paths
const public_path = path.join(__dirname, "../client"); //Path naar de Client (Front-end)
const server_path = path.join(__dirname, "../server"); //Path naar de Server (Back-end)

//Includen van de client folder als static -> index.html
app.use(express.static(public_path));

//Test om Json te verzenden via de response
// app.get('/hello', (req, res) => {
//     res.send({ message: 'Hello World' });
// });

//Lezen van de students uit de file students.json en in de variable students steken
let students; //Aanmaken variable
fs.readFile(path.join(server_path, "students.json"), "utf-8", (err, data) => {
  if (err) {
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
  students = JSON.parse(data); //JSON Data in students;
});

/**
 * GET
 */
app.get("/api/students", (req, res) => {
  // const parameters = req.query; // om aan te tonen wat er in de query zit
  // console.log(parameters);

  //Filteren door middel van query params

  //Manier 1
  const filter = req.query.filter;
  const value = req.query.value;

  //Manier 2 (Object destructuring -> interessante manier -> zoek online even op hoe dit werkt)
  // const { filter, value } = req.query;

  // Als er een filter en value aanwezig is dan zullen we de response filteren aan de hand van de query params
  if (filter && value) {
    res.send(students.filter((student) => student[filter].includes(value)));
  }

  //anders sturen we de volledige lijst
  res.json(students);
});

//Zoeken op id
app.get("/api/students/:id", (req, res) => {
  const id = req.params.id;
  // const { id } = req.params; //Object destructuring manier
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    //indien de id geen nummer is (bv. string) dan zal deze een error geven
    res.status(400).send({ message: "Id is not a number" });
    return;
  }

  const findStudent = students.find((student) => student.id === parsedId); //Zoekt de student a.d.h.v de Id

  if (!findStudent) {
    //Indien geen student is gevonden -> Error - Student not found
    res.status(404).send({ message: "Student not found" });
    return;
  }

  //indien we wel een student hebben -> response
  res.send(findStudent);
});

/**
 * Post
 */

app.post("/api/students", (req, res) => {
  // console.log(req.body); //Om te tonen wat in de body zit

  //We maken een nieuwe student aan en voegen 1 toe aan de laatste id (auto-increment). Alsook de volledige body
  //Zoek zelf op wat een spread operator doet ('...' is een spread operator)
  const newStudent = { id: students[students.length - 1].id + 1, ...req.body };

  //Push mijn nieuwe student aan de json array
  students.push(newStudent);

  //wegschrijven naar students.json bestand zodat na heropstarten van server niet alle data reset
  fs.writeFileSync(
    path.join(server_path, "students.json"),
    JSON.stringify(students, null, 2)
  );

  //redirect to /
  res.redirect("/");
});

/**
 * PUT
 */

app.put("/api/students/:id", (req, res) => {
  const id = req.params.id; //ophalen van Id uit params
  const parsedId = parseInt(id); //

  if (isNaN(parsedId)) {
    //Indien geen nummer -> error
    res.status(400).send({ message: "Id is not a number" });
    return;
  }

  //We zoeken de index van de student in de JSON array (bv. waar id gelijk is aan 2 -> return de positie in de JSON-array)
  const findUserIndex = students.findIndex(
    (student) => student.id === parsedId
  );

  if (findUserIndex === -1) {
    //Indien geen positie -> error
    res.status(404).send({ message: "Student not found" });
    return;
  }

  students[findUserIndex] = { id: parsedId, ...req.body }; // nemen de student met juiste index en voegen de volledige body toe

  fs.writeFileSync(
    path.join(server_path, "students.json"),
    JSON.stringify(students, null, 2)
  );

  return res.sendStatus(200); //Status OK teruggeven
});

/**
 * Patch
 */
app.patch("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    res.status(400).send({ message: "Id is not a number" });
    return;
  }

  const findUserIndex = students.findIndex(
    (student) => student.id === parsedId
  );

  if (findUserIndex === -1) {
    res.status(404).send({ message: "Student not found" });
    return;
  }

  students[findUserIndex] = { ...students[findUserIndex], ...req.body };

  fs.writeFileSync(
    path.join(server_path, "students.json"),
    JSON.stringify(students, null, 2)
  );

  return res.sendStatus(200);
});

/**
 * Delete
 */
app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    res.status(400).send({ message: "Id is not a number" });
    return;
  }

  const findUserIndex = students.findIndex(
    (student) => student.id === parsedId
  );
  if (findUserIndex === -1) {
    res.status(404).send({ message: "Student not found" });
    return;
  }

  students.splice(findUserIndex, 1);

  fs.writeFileSync(
    path.join(server_path, "students.json"),
    JSON.stringify(students, null, 2)
  ); //json.stringify(data, null = alle data meegeven, 2 = indentation van de json (whitespace))

  return res.sendStatus(200).send(students);
});

//Starten van de server
app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
