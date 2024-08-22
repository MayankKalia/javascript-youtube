// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('mayank')

/* What is IIFE?
   sirf yeh nahi bolna ki jo fxn immediately execute hota hai, INTERVIEW KE LIYE BOLNA HAI ki Global Scope ke pollution se problem hoti hai kai baar, toh uss Globl Scope ke jo variables hai yaan jo declarations hai toh uske pollution ko hatane ke liye humne IIFE ka use kiya hai */
/* 1st parentheses jo hai vo hai fxn definition, second yala jo hai vo hai execution */
()()