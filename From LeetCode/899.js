//899. Orderly Queue

//Link:- https://leetcode.com/problems/orderly-queue/

/* You are given a string s and an integer k. 
You can choose one of the first k letters of s and append it at the end of the string..

Return the lexicographically smallest string you could have after applying the mentioned step any number of moves */

var orderlyQueue = function (s, k) {
    let s1 = s.split('').splice(0,k)
    let s2 = s.split("").splice(k);
     
};

console.log(orderlyQueue("asper",2))