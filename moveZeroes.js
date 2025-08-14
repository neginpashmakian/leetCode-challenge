var moveZeroes = function (nums) {
  let write = 0; // index where the next non-zero should be written

  // 1) Compact non-zeros to the front
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read]; // copy current non-zero to the front slot
      write++; // move the front slot forward
    }
  }

  // 2) Fill the remainder with zeros
  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }
};

moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
