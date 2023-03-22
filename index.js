//Problem in own words
/*
  make a function that takes a word and checks to see if it is a palindrome.
  if the word is spelled the same backwards and forwards the function will
  return true.

  mom === mom => true
  abc === cba => false
*/

function isPalindrome(word) {
  // Write your algorithm here
  const  reversedWord = word.split('').reverse().join('')

  return word === reversedWord
}

/* 
  Add your pseudocode here
  reverse the string 

  if reversed is the same 
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
