export default function hasValuesFromArray(sets, array) {
  return array.every((element) => sets.has(element));
}
