// 212. Word Search II

//Link:- https://leetcode.com/problems/word-search-ii/

/* Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word. */

function checkAround(word, board, i, k = 1, n) {
    let alreadyIndex = [] 
    if (k == word.length) {
          return word;
     }
     if (board[i - 1] == word[k]&&!alreadyIndex.includes(i-1)) {
        alreadyIndex.push(i - 1);
         checkAround(word, board, i - 1, k + 1, n);
     } else if (board[i + 1] == word[k] && !alreadyIndex.includes(i + 1)) {
         alreadyIndex.push(i + 1);
          checkAround(word, board, i + 1, k + 1, n);
     } else if (board[i + n] == word[k] && !alreadyIndex.includes(i +n)) {
         alreadyIndex.push(i + n);
          checkAround(word, board, i + n, k + 1, n);
     } else if (board[i - n] == word[k] && !alreadyIndex.includes(i - n)) {
         alreadyIndex.push(i - 1);
          checkAround(word, board, i - n, k + 1, n);
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
    words.forEach((word, i) => {
        let allIndex = getInd(totalBoard, word[0])
        allIndex.forEach(e => {
            let isSame = checkAround(word, totalBoard, e, n)
            if (isSame) {
                answer.push(isSame)
            }
        })
           
    });
    return answer
};
console.log(
     findWords([
          ["o", "a", "a", "n"],
          ["e", "t", "a", "e"],
          ["i", "h", "k", "r"],
          ["i", "f", "l", "v"],
     ], ["tak","khi","aahk",'oethkl']),
);
