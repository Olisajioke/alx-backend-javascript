/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position where the Int8 value should be added.
 * @param {Number} value - The value to be added.
 * @returns {ArrayBuffer} A new ArrayBuffer with the Int8 value added at the specified position.
 * @throws {Error} If the position is outside the range of the ArrayBuffer.
 */
function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;

  return buffer;
}

export default createInt8TypedArray;
