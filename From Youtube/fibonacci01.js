//Write a function that return n-th number of Fibonacci series

//Method 01:-
function fib01(n) {
     if (n <= 2) return 1;
     return fib01(n - 1) + fib01(n - 2); // recursion call
}
//seems pretty clean but the fact that it will take more time as input or value of n increase
//as for all recurssion calls it will make two more branch recursion. just like a recursive tree
/* 
            n  ->  n-1  ,  n-2
            n-1 -> n-2  ,  n-3        ;       n-2 -> n-3 , n-4   
            ....so on

            and hence 
            time complexity will be:- O(2^n) 
            space complexity :- O(n)

*/
//One thing to noticed is that we are running recusrion again and again for same value
// now there is a second way:-
//store the value once we got and then pass it again and again

function fib02(n, store = {}) {
     if (n in store) return store[n]; // check if store has already, if yes, then will return
     if (n <= 2) return 1;
     store[n] = fib02(n - 1, store) + fib02(n - 2,store); // because it doesn't have stored in store, here we will store it
     return store[n];
}
/*
time complexity:- O(n)
space comlexity:- O(n) 
 */

 
