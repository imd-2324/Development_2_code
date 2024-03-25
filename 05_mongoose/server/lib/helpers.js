import fs from 'fs';
import path from 'path';
import { SERVER_PATH } from '../consts.js';

let students;
fs.readFile(path.join(SERVER_PATH, "data/students.json"), "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    }
    students = JSON.parse(data);
})

export { students }
