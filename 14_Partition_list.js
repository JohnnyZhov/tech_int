// LL: Partition List ( ** Interview Question)
// ⚠️CAUTION: Advanced Challenge Ahead!

// This Linked List problem is significantly more challenging than the ones we've tackled so far. It's common for students at this stage to find this exercise demanding, so don't worry if you're not ready to tackle it yet. It's perfectly okay to set it aside and revisit it later when you feel more confident.

// If you decide to take on this challenge, I strongly advise using a hands-on approach: grab a piece of paper and visually map out each step.

// This problem requires a clear understanding of how elements in a Linked List interact and move. By now, you've observed numerous Linked List animations in the course, which have prepared you for this moment.

// This exercise will be a true test of your ability to apply those concepts practically. Remember, patience and persistence are key here!

// Now, here is the exercise:

// ___________________________________



// Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x. 

// Note: this linked list class does not have a tail which will make this method easier to implement.

// The original relative order of the nodes should be preserved.



// Input:

// An integer x, the partition value.



// Output:

// The function should modify the linked list in-place, such that all nodes with values less than x come before nodes with values greater than or equal to x. 



// Constraints:

// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

// You can only traverse the linked list once.

// You can create temporary nodes to make the implementation simpler.





// Example 1:

// Input:

// Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5

// Process:

// Values less than 5: 3, 2, 1

// Values greater than or equal to 5: 8, 5, 10

// Output:

// Linked List: 3 -> 2 -> 1 -> 8 -> 5 -> 10





// Example 2:
// Input:

// Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2 x: 3

// Process:

// Values less than 3: 1, 2, 2

// Values greater than or equal to 3: 4, 3, 5

// Output:

// Linked List: 1 -> 2 -> 2 -> 4 -> 3 -> 5





// Tips:

// While traversing the linked list, maintain two separate chains: one for values less than x and one for values greater than or equal to x.

// Use dummy nodes to simplify the handling of the heads of these chains.

// After processing the entire list, connect the two chains to get the desired arrangement.



// Note:

// The solution must maintain the relative order of nodes. For instance, in the first example, even though 8 appears before 5 in the original list, the partitioned list must still have 8 before 5 as their relative order remains unchanged.

// Note:

// You must solve the problem WITHOUT MODIFYING THE VALUES in the list's nodes (i.e., only the nodes' next pointers may be changed.)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
    //   +===================================================+
    //   |                  WRITE YOUR CODE HERE             |
    //   | Description:                                      |
    //   | - This method partitions a linked list around a   |
    //   |   value `x`.                                      |
    //   | - It rearranges the nodes in such a way that all  |
    //   |   nodes less than `x` come before all nodes       |
    //   |   greater than or equal to `x`.                   |
    //   |                                                   |
    //   | Tips:                                             |
    //   | - We use two dummy nodes, `dummy1` and `dummy2`,  |
    //   |   to build two separate lists: one for elements   |
    //   |   smaller than `x` and one for elements greater   |
    //   |   or equal to `x`.                                |
    //   | - We then merge these two lists.                  |
    //   | - `prev1` and `prev2` are pointers to the last    |
    //   |   nodes of these lists.                           |
    //   | - The head of the resulting list is set as        |
    //   |   `dummy1.next`.                                  |
    //   +===================================================+

    

}





//  +=====================================================+
//  |                                                     |
//  |          THE TEST CODE BELOW WILL PRINT             |
//  |              OUTPUT TO "USER LOGS"                  |
//  |                                                     |
//  |  Use the output to test and troubleshoot your code  |
//  |                                                     |
//  +=====================================================+


// Helper function to create list from array
function createListFromArray(arr) {
    const ll = new LinkedList(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        ll.push(arr[i]);
    }
    return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
    let temp = ll.head;
    let i = 0;
    while (temp !== null && i < arr.length) {
        if (temp.value !== arr[i]) {
            return false;
        }
        temp = temp.next;
        i++;
    }
    return (temp === null && i === arr.length);
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
    console.log("---------------------------------------");
    console.log(`Test ${testNum}: ${description}`);
    console.log("BEFORE: ");
    ll.printList();
    console.log("PARTITION: " + x);
    ll.partitionList(x);
    console.log("AFTER: ");
    ll.printList();
    console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
}


// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, "Single-element list", ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

console.log("---------------------------------------");
