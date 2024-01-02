/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  var strarr1=str1.split('').sort().join('');
  var strarr2=str2.split('').sort().join('');
  console.log(strarr1);
  console.log(strarr2);
  return strarr1==strarr2;
}

module.exports = isAnagram;
