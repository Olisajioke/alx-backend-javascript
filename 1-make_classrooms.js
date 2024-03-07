// 1-classrooms.js

import ClassRoom from "./0-classroom.js";

/**
 * Initializes an array of ClassRoom objects with given sizes.
 * @returns {ClassRoom[]} Array of ClassRoom objects
 */
function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}

export default initializeRooms;
