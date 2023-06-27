export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (let value of array) {
    value = appendString + value;
    newarray.push(value);
  }

  return newarray;
}
