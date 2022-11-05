//Add Two Numbers

//Link:-https://leetcode.com/problems/add-two-numbers/

/* You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list. */


    

    function Node(val) {
        this.val = val
        this.next = null;
           
    }
    function LinkedList() {
        this.head = null;
        
        this.insert = function (val) {
            let node = new Node(val);
            if (this.head === null) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
            console.log(this.head)
        };
    }
    var addTwoNumbers = function (l1, l2) {
         let number1 = [];
         let number2 = [];
         let number3;
         let extract = function (list, arr) {
              arr.push(list.val);
              if (list?.next) {
                   extract(list.next, arr);
              }
         };

         let output = new LinkedList();
         extract(l1, number1);
         extract(l2, number2);

         number3 =
              Number(number1.reverse().join("")) +
              Number(number2.reverse().join(""));

         number3 = "" + number3;
         number3 = number3.split("").reverse().join('');

         while (number3.length) {
              output.insert(number3.pop());
         }
         console.log(output.head);
         return output.head;
    };
