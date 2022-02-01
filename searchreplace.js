function myReplace(str, before, after) {
  const arr = str.split(" ");
  const ind = arr.indexOf(before);

  if(arr[ind][0] === arr[ind][0].toLowerCase()){
     arr[ind] = after[0].toLowerCase()+after.substring(1)
  }else{
     arr[ind] = after[0].toUpperCase()+after.substring(1);
  }


  const newStr = arr.join(" ");
  return newStr;
}

const out = myReplace(
  "A quick brown fox jumped over the lazy dog",
  "jumped",
  "leaped"
);

console.log(out);
