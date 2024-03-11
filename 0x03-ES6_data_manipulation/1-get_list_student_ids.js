/**
 * Gets a list of student ids from an array of student objects.
 * @param {Object[]} students - The array of student objects.
 * @returns {Number[]} An array of student ids.
 */
function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}

export default getListStudentIds;
