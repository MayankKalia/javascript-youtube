// const user = {
//     username: "mayank",
//     price: 888,

//     welcomeMessage: function() {
//         //"this" refers to the current context
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
    
// }
/*"context" simply means values, usme jo jo variables hai vo kya kya hold kr rhe hai*/
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//when we are in Node environment, current context is empty, cause it's refering to am empty object
//console.log(this);

//In earlier time, there was only 1 way to execute JS, i.e inside the browser, cause the JS engine was availble only inside a browser but now it's not like that, we have took that engine out and can be used as a standalone thing

// function chai() {
//     //now here inside fxn, when running "this" showing lot of things
//     let username = "hitesh"
//     console.log(this);

//here out is coming "undefined" because "this" is ruuning only inside object
//let username = "hitesh"
//     console.log(this.username);
// }

// chai()


//Arrow functions(  ES6 feature)
// const chai = () => {
//     let username = "mayank";
//     console.log(this.username);
// }
// //differnce between normal function & arrow fuctions//
// chai()

//basic Arrow Functions example 
//Also an example of "Explicit Return"
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2
//If we use Curly Braces, "return" keyword is a must, if we use Parentheses, no need of "return" keyword

//this is "Implicit Return"
// const addTwo = (num1, num2) => (num1 + num2)

//you can't return Object like this, it will show "undefined"
//const addTwo = (num1, num2) => {username: "mayank"}

//you have to wrap "Object" inside Parenthesis to make it work
//const addTwo = (num1, num2) => ({username: "mayank"})
    

// console.log(addTwo(3, 4));

// const myArray = [1, 2, 5, 7];

// myArray.forEach()
