// --- FILTER --- //
// Como o filter funciona por dentro:
function myFilter(originalItems, mustBeIncluded) {
  const newArray = [];

  originalItems.array.forEach(element => {
    if (mustBeIncluded(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}
