//Longest Palindrome by Concatenating Two Letter Words
/* You are given an array of strings words. Each element of words consists of two lowercase English letters.

Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

A palindrome is a string that reads the same forward and backward. */

// link of problem:- https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/

var longestPalindrome = function (words) {
     let answer = 0; // it will be our final answer
     let centeral = false; // it will check if there is any centeral element,
    let checkDup = []; //it will check if we have alredy assume a element in answer or not

    // we will define operations on two type of elements
    //1. which are palindrome in itself like:- "ee"
    //2. which make palindrome after joining some other element from words, i.e. if any element's reverse also exist in words or not

     function reverse(string) {
          return string.split("").reverse().join("");
     }
     let record = {};
     words.forEach((e) =>
          !record[e] ? (record[e] = 1) : (record[e] = record[e] + 1),
     ); // creating a record of number of occurence of an element in array

     for (const key in record) {
          if (key == reverse(key)) { // if a word is palindrome in itself
               if (record[key] == 1) {
                   centeral = true; // if it only exist one time, it can become centeral element, a
                   // and we are using boolean because there can be only one centeral element
               } else if (record[key] >= 2 && record[key] % 2 == 0) {
                    answer += record[key] * key.length;//if element exist more than one but in even time than all element can participate in palindrome
               } else if (record[key] > 2) {
                   answer += (record[key] - 1) * key.length;
                   centeral = true // if element exist in odd times than take only pared elements and set centeral to true as it can participate as centeral element
               }
          } else if (record[reverse(key)]) { // for elements whose reverse also exist in given array we are considering both as a pair
               if (!checkDup.includes(reverse(key))) { // if checkDup doesn't contain an element that means we have not count that yet
                    checkDup.push(key); // and now we can count it in checkDup
                    if (record[key] > record[reverse(key)]) { //as number of pairs is decided by least number of element e.g. if "ct":5 and "tc":3, than number if pair will only be 3
                        answer += record[reverse(key)] * 2 * key.length; // *2 because we are recording both i.e. element and it reverse
                        // and its reverse can't perform as we have set the condition above (!checkDup.icludes()])
                    } else {
                         answer += record[key] * 2 * key.length; //
                    }
               }
          }
     }
     return centeral ? answer + 2 : answer;
};
console.log(longestPalindrome(["cc", "ll", "xx"]));


/* LeetCode respnse:-
status: Accepted
Runtime: 187 ms, faster than 97.99% of JavaScript online submissions.
Memory Usage: 54.1 MB, less than 96.84% of JavaScript online submissions
*/
