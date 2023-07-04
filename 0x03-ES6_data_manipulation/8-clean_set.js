export default function cleanSet(set, string) {
  const filteredSet = [...set].filter((element) => element.startsWith(string));
  return filteredSet.join('-');
}
