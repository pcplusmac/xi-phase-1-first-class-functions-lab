// Code your solution in this file!

const arr = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// define function that return first 2 drivers
function  returnFirstTwoDrivers(arr) {
    const arrNew = [arr[0],arr[1]];
    // console.log(arrNew);
    return (arrNew);

}
console.log(arr);
returnFirstTwoDrivers();


//  Define the function return the last 2 drivers
function returnLastTwoDrivers(arr) {
    let len = arr.length;
    const arrNew = [arr[len-2],arr[len-1]];
    console.log(arrNew);
    return (arrNew);

} 

