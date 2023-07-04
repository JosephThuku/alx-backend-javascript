export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) throw Error('Cannot process');
  const groceriesCopy = new Map();
  groceries.forEach((value, key) => {
    if (value === 1) {
      groceriesCopy.set(key, 100);
    } else {
      groceriesCopy.set(key, value);
    }
  });

  return groceriesCopy;
}
