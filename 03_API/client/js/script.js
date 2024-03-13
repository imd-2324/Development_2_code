const studentList = document.querySelector(".student-list");
const searchInput = document.querySelector(".search-input");
const addStudentButton = document.querySelector(".add-student-btn");
const addStudentModal = document.getElementById("addStudentModal");
const closeModalButton = document.querySelector(".close");

let students = [];

const getStudents = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/students");
    students = await response.json();
    displayStudents(students);
  } catch (error) {
    console.error(error);
  }
};

const displayStudents = (students) => {
  studentList.innerHTML = "";
  students.forEach((student) => {
    const { id, name, nickname, email } = student;
    const div = createStudentElement(name, nickname, email);
    const deleteForm = createDeleteForm(id);
    div.appendChild(deleteForm);
    studentList.appendChild(div);
  });
};

const createStudentElement = (name, nickname, email) => {
  const div = document.createElement("div");
  div.classList.add("student-item");
  div.innerHTML = `
        <div class="info">
            <li>${name} <span>(${nickname})</span></li>
            <li class="email">${email}</li>
        </div>`;

  //mouseover and mouseleave add hover class
  div.addEventListener("mouseover", () => div.classList.add("hover"));
  div.addEventListener("mouseleave", () => div.classList.remove("hover"));
  return div;
};

const createDeleteForm = (studentId) => {
  const deleteForm = document.createElement("form");
  deleteForm.method = "DELETE";
  deleteForm.action = `/api/students/${studentId}`;

  const deleteButton = document.createElement("button");
  deleteButton.type = "submit";
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  deleteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = prompt("Enter password to delete:");
    if (password === "arteveldehs") {
      console.log(`Deleting student with ID: ${studentId}`);
      fetch(deleteForm.action, { method: "DELETE" })
        .then((response) => (window.location.href = "/"))
        .catch((error) => console.error(error));
    } else {
      alert("Incorrect password. Deletion canceled.");
    }
  });

  deleteForm.appendChild(deleteButton);
  return deleteForm;
};

const filterStudents = (query) => {
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );
  displayStudents(filteredStudents);
};

const eventListeners = () => {
  searchInput.addEventListener("input", () =>
    filterStudents(searchInput.value)
  );
  addStudentButton.addEventListener(
    "click",
    () => (addStudentModal.style.display = "block")
  );
  closeModalButton.addEventListener(
    "click",
    () => (addStudentModal.style.display = "none")
  );
};

getStudents();
eventListeners();
