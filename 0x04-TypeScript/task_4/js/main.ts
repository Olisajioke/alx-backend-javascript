import { Cpp, Java, React, Teacher } from './';

// Create and export constants for the subjects
export const cpp: Cpp = new Cpp();
export const java: Java = new Java();
export const react: React = new React();

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
