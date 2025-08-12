/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  console.log(nums);
  for (i = 0; i < nums.length + 1; i++) {
    if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) return true;
    else return false;

    // console.log("tru");
  }
};

const nums = [5, 4, 3, 2, 1];

increasingTriplet(nums);
