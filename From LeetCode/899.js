//899. Orderly Queue

//Solved

//Link:- https://leetcode.com/problems/orderly-queue/

/* You are given a string s and an integer k. 
You can choose one of the first k letters of s and append it at the end of the string..

Return the lexicographically smallest string you could have after applying the mentioned step any number of moves */

var orderlyQueue = function(s, k) {
      if(k==1){
          let res = s
          for(i=0;i<res.length;i++){
              let first = s[0]
              s = s.substring(1,res.length) + first
              if(s<res){
                  res = s
              }
             
          }
           return res
      }
       return [...s].sort().join('') 
};

console.log(orderlyQueue("asper",2))