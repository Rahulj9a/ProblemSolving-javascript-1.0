//link of question:- https://www.codewars.com/kata/550498447451fbbd7600041c

/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */

/* e.g.:- 
 array1 =  [121, 144, 19, 161, 19, 144, 19, 11]
 array2 =  [121, 14641, 20736, 361, 25921, 361, 20736, 361]

 //they both are considered as same
*/

function comp(array1, array2) {

    //square all elements of array1, sort both arrays check if index of similar element is same in both array
     if (array1 == null || array2 == null) {
          return false;
     }
     array1.sort((a, b) => a - b);
     array2.sort((a, b) => a - b);  
     array1 = array1.map((a) => a * a);  
     return array1.every((e, index) => e == array2[index]);
}

function comp2(array1, array2) {
     //square all elements of array1, sort both arrays check if index of similar element is same in both array
     if (array1 == null || array2 == null) {
          return false;
     }
     array1 = array1.map((a) => a * a).sort();

     array2.sort((a, b) => a - b);
     for (let i = 0; i < array1.length; i++) {
          if (array1[i] !== array2[i]) return false;
          // will return false if any element doesn't match
     } // else it will come out of for loop without any return

     return true; // and will return true
}
