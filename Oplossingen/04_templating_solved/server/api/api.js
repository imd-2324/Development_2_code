import { SERVER_PATH } from "../consts.js";
import fs from "fs";
import path from "path";
import { students } from "../lib/helpers.js";

export const API = (app) => {
  //Get all students
  app.get("/api/students", (req, res) => {
    console.log(req.query);
    const { filter, value } = req.query;

    if (filter && value) {
      res.send(students.filter((student) => student[filter].includes(value)));
    }
    res.json(students);
  });

  //Get a specific student
  app.get("/api/students/:id", (req, res) => {
    const id = req.params.id;
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
    res.json(findStudent);
  });

  /* -------------------------------------------------------------------------------------------*/

  //Create a new student
  app.post("/api/students", (req, res) => {
    const newStudent = {
      id: students[students.length - 1].id + 1,
      ...req.body,
    };
    students.push(newStudent);

    fs.writeFileSync(
      path.join(SERVER_PATH, "data/students.json"),
      JSON.stringify(students, null, 2)
    );

    res.redirect("/students");
  });

  /* -------------------------------------------------------------------------------------------*/

  //Delete the student
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
      path.join(SERVER_PATH, "data/students.json"),
      JSON.stringify(students, null, 2)
    ); //json.stringify(data, null = alle data meegeven, 2 = indentation van de json (whitespace))

    return res.sendStatus(200).send(students);
  });
};
