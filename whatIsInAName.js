function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const srckeys = Object.keys(source);

  for(let i=0; i<collection.length; i++){
    if (srckeys.every(key=>collection[i].hasOwnProperty(key) && source[key]===collection[i][key])){
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

const output = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

console.log(output);
