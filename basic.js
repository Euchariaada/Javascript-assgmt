// 1. Create a function with a function name printSum( ) 
//and print the sum of an array.
function printSum(arr) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i]
    }
    console.log(sum)
}
let myArray=[1,3,4,9,3]
printSum(myArray)

/* 2.
Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, 
awarding points from a scale of 1-100 for three categories: problem clarity, originality 
and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and 
the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find 
their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.
*/
function solve(a0, a1, a2, b0, b1, b2) {
    
    let solution = []

    if (a0 > b0 || a1 > b1 || a2 > b2) {
        solution += 1;
    } else if (a0 < b0 || a1 < b1 || a2 < b2 ) {
        solution += 1;
    }
    return solution.split('');
}

//another solution
function solve(a0, a1, a2, b0, b1, b2) {
    let s = [0, 0];
    
    if (a0 > b0) {s[0] += 1;} 
    if (a1 > b1) {s[0] += 1;} 
    if (a2 > b2) {s[0] += 1;}
    if (a0 < b0) {s[1] += 1;}
    if (a1 < b1) {s[1] += 1;}
    if (a2 < b2) {s[1] += 1;}
        
    return s;
}
let result= [2,3,5,8,6,2]
solve(result)

/* 3. Given an array of integers, calculate the ratio of its elements that are positive, 
negative and zero. Print the decimal value of each fraction on a new line with places 
after the decimal. */
function positiveNegativeZero(arr)
{
     // Store the array length into
    // the variable len.
    let len = arr.length;
 
    // Initialize the postiveCount,
    // negativeCount, and zeroCount by
    // 0 which will count the total number
    // of positive, negative and zero elements
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
 
    // Traverse the array and count the
    // total number of positive, negative,
    // and zero elements.
    for(let i = 0; i < len; i++)
    {
        if (arr[i] > 0)
        {
            positiveCount++;
        }
        else if (arr[i] < 0)
        {
            negativeCount++;
        }
        else if (arr[i] == 0)
        {
            zeroCount++;
        }
    }
 
    // Print the ratio of positive,
    // negative, and zero elements
    // in the array up to four decimal places.
    document.write((positiveCount / len).toFixed(4) + "<br>");
    document.write((negativeCount / len).toFixed(4) + "<br>");
    document.write((zeroCount / len).toFixed(4));
    document.write("<br>");
}
 
// Driver Code.
 
// Test Case 1:
let array1 = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(array1);
 
// Test Case 2:
let array2 = [ 4, 0, -2, -9, -7, 1 ];
positiveNegativeZero(array2);
 

/* 4. Create a function with a function name firstFunction( ) 
and return the sum of two integers(numbers) */
function firstFunction(num1, num2){
    let sum = num1 + num2
    return sum
}
firstFunction(3,5)
