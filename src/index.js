import './style.css';


// A capitalize function that takes a string and returns it with the 
// first character capitalized.

// let s = "hello";

export function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}


// A reverseString function that takes a string and returns it reversed.

export function reverse(s){
    return s.split("").reverse().join("");
}

// A calculator object that contains functions for the 
// basic operations: add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and 
// return the correct calculation.

export const calculator = {
    add: (a,b) =>  a+b,
    subtract: (a,b) =>  a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
}