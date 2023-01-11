// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining characters.
//  (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function (s, t) {
//   const arr = [];
//   let newString = t;

//   for (let i = 0; i < s.length; i++) {
//     if (newString.indexOf(s) != -1) {
//       return true;
//     } else if (newString.indexOf(s[i]) === -1) {
//       return false;
//     } else if (
//       arr.length === 0 ||
//       newString.indexOf(s[i]) >= arr[arr.length - 1]
//     ) {
//       arr.push(newString.indexOf(s[i]));
//       newString =
//         newString.substring(0, newString.indexOf(s[i])) +
//         newString.substring(newString.indexOf(s[i]) + 1, newString.length);
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

var isSubsequence = function (s, t) {
  if (!s) return true;
  let cursorS = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[cursorS]) cursorS++;

    if (cursorS === s.length) return true;
  }

  return false;
};
