// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ""

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  for (k = 0; k < strs[0].length; k++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[0].charAt(k) !== strs[i].charAt(k)) {
        return result;
      }
    }
    result += strs[0].charAt(k);
  }

  return result;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
