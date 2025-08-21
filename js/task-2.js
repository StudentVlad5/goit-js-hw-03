// Композиція масивів
function makeArray(firstArray, secondArray, maxLength) {
  if (maxLength <= 0 || isNaN(+maxLength)) return [];
  return firstArray.length > maxLength
    ? firstArray.slice(0, maxLength + 1)
    : secondArray.length > maxLength - firstArray.length
    ? [...firstArray, ...secondArray.slice(0, maxLength - firstArray.length)]
    : [...firstArray, ...secondArray];
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
