import { PORT } from "../consts.js";

export const studentList = async (req,res) => {

    const students = await fetch(`http://localhost:${PORT}/api/students`);
    const data = await students.json();

    res.render('student-list', {
        style: 'student-list.css',
        script: 'student-list.js',
        students: data
    });
}

export const studentCreate = async(req,res) => {
    res.render('student-create',
    {
        style: 'student-create.css',
    });
}