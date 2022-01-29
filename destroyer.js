function destroyer(arr, ...rest) {
  return arr.filter(el=>!rest.includes(el))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
