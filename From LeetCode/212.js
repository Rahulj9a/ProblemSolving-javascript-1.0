// 212. Word Search II

//Pending

//Link:- https://leetcode.com/problems/word-search-ii/

/* Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word. */

function checkAround(word, board, i, k, n,alreadyIndex=[i]) {
     
     if (k == word.length) {
           
          return true
     }
     console.log(word, alreadyIndex) 
     if (
          board[i - 1] &&
          board[i - 1] == word[k] &&
          !alreadyIndex.includes(i - 1)
     ) {
          alreadyIndex.push(i - 1);
           /* console.log(word,board[i-1],word[k]) */
          if (checkAround(word, board, i - 1, k + 1, n, alreadyIndex)) {
               return true
          };
     } else if (
          board[i + 1] &&
          board[i + 1] == word[k] &&
          !alreadyIndex.includes(i + 1)
     ) {
          alreadyIndex.push(i + 1);
          /* console.log(word, board[i + 1], word[k]); */
          if (checkAround(word, board, i + 1, k + 1, n, alreadyIndex)) {
               return true
          };
     } else if (
          board[i + n] &&
          board[i + n] == word[k] &&
          !alreadyIndex.includes(i + n)
     ) {
          alreadyIndex.push(i + n);
           /* console.log(word, board[i + n], word[k]); */
          if (checkAround(word, board, i + n, k + 1, n, alreadyIndex)) {
               return true
          };
     } else if (
          board[i - n] &&
          board[i - n] == word[k] &&
          !alreadyIndex.includes(i - n)
     ) {
          alreadyIndex.push(i - n);
          /* console.log(word, board[i - n], word[k]); */
          if (checkAround(word, board, i - n, k + 1, n, alreadyIndex)) {
               return true
          };
     } 
          
     
     return false;
     
 }
     
      
     

function getInd(arr, val) {
     var index = [],
          i = -1;
     while ((i = arr.indexOf(val, i + 1)) != -1) {
          index.push(i);
     }
     return index;
}

var findWords = function (board, words) {
     let answer = [];
     let totalBoard = board.reduce((total, e) => [...total, ...e], []);
     let m = board.length;
     let n = board[0].length;
     
     words.forEach((word) => {
          
          let allIndex = getInd(totalBoard, word[0])
          
        allIndex.forEach(index => {
             let isSame = checkAround(word, totalBoard, index, 1, n)
               
              
             if (isSame) {
                  
                  if (!answer.includes(word)){
                     answer.push(word)
                }
            }
        })
           
    });
    return answer
};
console.log(
     findWords(
          [
               ["a", "b", "c"],
               ["a", "e", "d"],
               ["a", "f", "g"],
          ],["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"],
     ),
);

