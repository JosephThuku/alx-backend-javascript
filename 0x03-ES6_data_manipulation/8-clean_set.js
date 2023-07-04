export default function cleanSet(set, string) {
  const filteredSet = [...set].filter((element) => element.startsWith(string));
  const cleanedvalues = filteredSet.map((element) => element.slice(string.length));
  return cleanedvalues.join('-');
}
