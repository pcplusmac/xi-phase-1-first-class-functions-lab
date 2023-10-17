// Code your solution in this file!

const arr = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// define anonymous function that return first 2 drivers
const returnFirstTwoDrivers = (arr) => {
    const arrNew = [arr[0],arr[1]];
    // console.log(arrNew);
    return (arrNew);

}

//  Define the anonymous function return the last 2 drivers
const returnLastTwoDrivers = (arr) => {
    
    const arrNew = [arr[arr.length-2],arr[arr.length-1]];
    // console.log(arrNew);
    return (arrNew);

} 

// Define the function for selecting the drivers
let selectingDrivers = ['returnFirstTwoDrivers', 'returnLastTwoDrivers' ]; 


