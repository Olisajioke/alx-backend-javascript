/**
 * Calculates the sum of all student ids.
 * @param {Object[]} students - The array of student objects.
 * @returns {Number} The sum of all student ids.
 */
function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  
  export default getStudentIdsSum;
  