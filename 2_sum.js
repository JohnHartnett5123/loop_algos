// Sum from 1 to 10, printing out the number and current sum so far at each step of the way
// The expected output will be:
// Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15 .... etc
var num = 0 
var sum = 0
for(var i = 0; i<=10; i++){
    num = i
    console.log("Num:" + num)
    sum = sum+i
    console.log("Sum:" + sum)
}
// YOUR CODE HERE 
