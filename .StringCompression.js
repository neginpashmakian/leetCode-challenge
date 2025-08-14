var compress = function (chars) {
  let writeIndex = 0; // where we will write the compressed output
  let count = 1; // how many times the current char has repeated

  for (let i = 1; i <= chars.length; i++) {
    // While we're still inside the array AND current char equals previous char,
    // keep growing the run length
    if (i < chars.length && chars[i] === chars[i - 1]) {
      count++;
    } else {
      // We just reached the end of a run (either different char or end of array).
      // 1) write the character that ended the run:
      chars[writeIndex++] = chars[i - 1];

      // 2) if that char repeated more than once, write the count digits after it
      if (count > 1) {
        const countStr = String(count); // e.g. 12 -> "12"
        for (let j = 0; j < countStr.length; j++) {
          chars[writeIndex++] = countStr[j]; // write each digit separately
        }
      }

      // 3) reset for the next run
      count = 1;
    }
  }

  return writeIndex; // new logical length (judge reads chars[0..writeIndex-1])
};

const N = compress(["a", "a", "b", "b", "c", "c", "c"]);
console.log("N: ", N); // Output: 6, chars = ["a","2","b","2","c","3"]
// Output: 6, chars = ["a","2","b","2","c","
