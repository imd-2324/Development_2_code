import { PORT } from "../consts.js";
import { Student } from "../models/Student.js";

class StudentController {
  static async index(req, res) {

    //UIT JSON DATA
    // const students = await fetch(`http://localhost:${PORT}/api/students`);
    // const data = await students.json();


    //UIT DATABASE
    //find all students
    const students = await Student.find().populate("bestFriend");

    //map student objects to hexadecimal strings
    const studentsConverted = students.map((student) => {
      return {
        ...student.toObject(), // Convert Mongoose document to plain JavaScript object
        _id: student._id.toString(), // Convert ObjectId to hexadecimal string
      };
    });

    res.render("student/list", {
      style: "student-list.css",
      script: "student-list.js",
      students: studentsConverted,
    });
  }

  static async create(req, res) {
    //find all students
    const students = await Student.find();

    const studentsWithHexIds = students.map((student) => {
      return {
        ...student.toObject(), // Convert Mongoose document to plain JavaScript object
        _id: student._id.toString(), // Convert ObjectId to hexadecimal string
      };
    });

    res.render("student/create", {
      students: studentsWithHexIds,
      style: "student-create.css",
    });
  }

  static async store(req, res) {
    const { name, email, age, nickname, street, city, bestFriend } = req.body;
    try {
      const student = await Student.create({
        name,
        email,
        age,
        nickname,
        address: {
          street,
          city,
        },
        bestFriend,
      });

      console.log(student);
      res.redirect("/students");
    } catch (error) {
      console.log(error);
    }
  }

  static async destroy(req, res) {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect("/students");
  }
}

export default StudentController;
