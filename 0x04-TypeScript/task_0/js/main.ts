// main.ts

// Define interface for Student
export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  // Create array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render table
  export function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
  
    students.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  // Render table for studentsList
  renderTable(studentsList);
  