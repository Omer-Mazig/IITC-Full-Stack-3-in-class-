// Palindrome Checker Challenge
// ----------------------------
//
// Problem Description:
// Create a function that checks whether a given string or array is a palindrome (reads the same backward as forward).
//
// Approach Tips:
// 1. Convert the input to a string (if it's not already) – for arrays, consider using join().
// 2. Normalize the string by converting to lower case and removing any non-alphanumeric characters.
// 3. Reverse the normalized string and compare it to the original normalized version.
// 4. Return true if they match; otherwise, false.
// 5. Test your function with known palindromic phrases like "A man, a plan, a canal, Panama".
function isPalindrome(input) {
  // TODO: Convert input to a string, normalize it (e.g., to lower case, remove punctuation).
  // TODO: Reverse the string and compare with the normalized original.
  // TODO: Return true if they match, or false otherwise.
}

// Test Cases for isPalindrome
console.log('Is "racecar" a palindrome?:', isPalindrome("racecar")); // Expected output: true
console.log('Is "hello" a palindrome?:', isPalindrome("hello")); // Expected output: false
console.log(
  'Is "A man, a plan, a canal, Panama" a palindrome?:',
  isPalindrome("A man, a plan, a canal, Panama")
); // Expected output: true
console.log("Is [1,2,3,2,1] a palindrome?:", isPalindrome([1, 2, 3, 2, 1])); // Expected output: true (if conversion is handled correctly)
