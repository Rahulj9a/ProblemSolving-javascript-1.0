//Reverse Vowels of a String

//link:- https://leetcode.com/problems/reverse-vowels-of-a-string/
/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. */

var reverseVowels = function (s) {
    s=s.split("")
    vowel = ["a", "e", "i", "o", "u","A","E","I","O","U"]
    vowelIndex = []
    vowelsIncluded = []
    s.forEach((e,i) => {
        if (vowel.includes(e)) {
            vowelIndex.push(i)
            vowelsIncluded.push(e)
        }
    })
     
    vowelsIncluded.reverse()
    vowelsIncluded.forEach((e, i) => {
        s[vowelIndex[i]] = e
    })
    s=s.join('')
    return s
};
//LeetCode Response:-
/* 
Runtime: 131 ms, faster than 66.94% of JavaScript online submissions for Reverse Vowels of a String.
Memory Usage: 47.4 MB, less than 96.07% of JavaScript online submissions for Reverse Vowels of a String. 
*/