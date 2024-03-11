/**
 * Updates the grades of students for a specific city.
 * @param {Object[]} students - The array of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Object[]} newGrades - An array of objects containing new grades.
 * @returns {Object[]} An array of student objects with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
