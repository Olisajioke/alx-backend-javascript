export default function appendToEachArrayValue(array, appendString) {
  const arra = [];
  for (const val of array) {
    arra.push(appendString + val);
  }

  return arra;
}
