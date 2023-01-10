// Given an array of integers nums which is sorted in ascending order, and an integer target,
//  write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (right < left) {
    return -1;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
