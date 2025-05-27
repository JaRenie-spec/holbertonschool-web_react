interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "San Francisco"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const header = table.insertRow();
header.insertCell().textContent = "First Name";
header.insertCell().textContent = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
