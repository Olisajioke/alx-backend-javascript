// 2-get_students_by_loc.js

/**
 * Filters students by their location.
 * @param {Object[]} students - The array of student objects.
 * @param {String} city - The city to filter by.
 * @returns {Object[]} An array of student objects located in the specified city.
 */
function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
  }
  
  export default getStudentsByLocation;
  