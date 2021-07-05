//Write a program that turns decimal numbers to binary numbers.

function toTheMoon(num) { // func name just for fun :D
    let currNum = [num] 
    let nums = [num]; //hold all the number iterations
    let binu = []; // hold the binary numbers
    for (let i = 0; nums[i] != 0; i++) {
        let newNum = Math.floor(currNum[0] / 2); // takes the current number divided by 2 and Round a number downward to its nearest integer
        nums.push(newNum); 
        currNum.push(newNum);//currNum = [num1,num2]
        currNum.shift();//delete the first element, so we can save the current number at the  currNum[0]
    }

    function numToBinum() {
        //now at this point the nums[] contains all of the numbers, that we have to convert to binary nums
        nums.pop(); //delete the last element, which is 0 always.
        nums.forEach((num) => {
            binu.push(num % 2);
        }) 
        binu.reverse(); // after we have the nums , we have to read the reverese order
        let asdf = binu.join(" "); //join to log nicer
        return asdf;
    }
    return numToBinum();

}

console.log(toTheMoon(11));
//let nums = [131, 65, 32, 16, 8, 4, 2, 1, 0];
//let binu = [];
//nums.forEach((num) => {
//    binu.push(num % 2);
//})
//console.log(binu);
