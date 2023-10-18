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
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
// Create function a high-order function to return other functions
function createFareMultiplier(num) {
    return function (a) { return num*a};
}

// fareDoubler(10);
// fareTripler(3);
// function multiplier (fare, func) {
//     func(fare);
// }

// Define the function that can select the different drivers 
function selectDifferentDrivers(arr, func) {
    return func(arr);

}

function  func(x) {
    if (x === "first") {
        return returnFirstTwoDrivers; 
    }
    if (x === "last" ) {
        return returnLastTwoDrivers;
    }
    
}

//  func(first);







