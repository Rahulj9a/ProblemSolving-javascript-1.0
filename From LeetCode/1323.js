//1323. Maximum 69 Number

//link:- https://leetcode.com/problems/maximum-69-number/

/* You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6). */

var maximum69Number = function (num) {
    ("" + num).split("");
    num2[num2.indexOf("6")] = "9";
    return Number(num2.join(""));
};
console.log(maximum69Number(9669));
