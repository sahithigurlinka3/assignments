/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    var ans=0;
    vowels=['a','e','i','o','u']
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++)
    {
      if(vowels.indexOf(str[i])!=-1){
        ans++;
      }
    }
    return ans;
}

module.exports = countVowels;