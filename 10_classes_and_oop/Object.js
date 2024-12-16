// Here, we have takedn example to understand "Object" and "new" keyword

//Default behavior of JS is Protypal Behavior, means, it goes up and up, means to the parent, to grandparent, goes layer upon layer and so on till it gets "Null", 

// JS kinda never gives up, it keeps on asking, or going layer above layer, that's why we get prottype, almost everywhere in JS, it gives us kinda otpions, like even if we got our desired result, what Else can we do, like that

// Linking with this behavoir, our "this" keyword works

//In short, it's this "Prototype" only, we have access to "new" keyword or it's working, "classes" we have got via "prototype" only, "protoypal inheritace" or "Inheritance", we have got via "Prototype" only

//Confusing???, don't worry, it's JS behavior, gotta learn and understand it, only

// Everything inside JS is an object

//Like we took the Eg. of 
//       const newHero =["Hulk", "Spiderman"]
// When we will check this "array" in "Console", we will get Prototype(Array) inside it, further down, we will get Prototype(object) inside it, and if we wanna go further down, wanna know from were "Object" is declared, we will not find any parent to "Object", whatever properties, it have, it's "Object's" only,
//The referance we get is of "Null" only, that's why it ends here, That's why Everything inside "JavaScript" is an "Object"
//Diagramatically,  Array -------> Object -----> Null
//Similarly,        String ------> Object -----> Null
//Similarly,        Function ------> Object -----> Null
//All the properties of Object is Available to "Array" as well as "String", it's usable or not, that's a different thing, Inheritance toh hai, whatever your Grandparents have, you will get


function multiplyBy5(num) {

    //" {} " refereance, this what we get, this is where hamara "this" store hota hai
    this.num = num
    return num*5
}

// this is simple, we can do it
multiplyBy5.power = 2;

console.log(multiplyBy5(5));
// What about this, will this Work??, but we use "dot" access only with objects???, yes it will work, cause Everything inside JS is an Object
console.log(multiplyBy5.power);

//the " {} " which we have got, "By Default jo context et hote hai", uss method ka "this" hai
//  yeh jo "prototype hai naa", this not only has "methods" but it also gives us some "internal properties"
console.log(multiplyBy5.prototype);


//Function Funtion bhi hai and Object Bhi Hai, Funtion ke andar jo bhi properties hai yaan Jo bhi Functionality hai, vo "Function" ki trah behave krti hai, but we can make "Function" behave as an object also

//However "getters" and "setters" hote hai, aur referance dalne ke liye, but hum uska reference nahi dalte hai, Story Ends at Object only

function createUser(username, score) {
    //So avoid confusing between the variable I have declared isnide Fxn and the "username" I have got as a parameter, we ae using "this" keyword here
    //what "this" does is, it sets the "Current Context"
    this.username = username
    this.score = score
}

// Is it possible, ki I can inject my own functionality???, like inside array(prototype), we get functionalities like "splice", "slice", YES WE CAN

// Here we have injected "increment" via "prototype"
createUser.prototype.increment = function(){
    //here without "this", score will get confused ki "score" kiska badau, "chai" ka yaan "tea" ka, cause, it has no "context/idea"
    //For that we use "this", "current context" ka, "this' means "jiss", means jisne bhi bulaya hai, uske pass jao
    this.score++
}
createUser.prototype.printMe = function(){
    //similarly here also, "score" don't know whose "score" to print, "chai" or "tea", so again, "this" comes to our rescue
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)


//"Syntactical Sugar"
//One more interesting thing, For Eg. while declaring array also, do we write like, "myArray.prototype.map()", No we don't we straight away write "myArray.map()", and it's accessible, this Feature JavaScript gives us, ki I will do the work of "prototype" Behind The Scenes, Usse Upr Se Upr Se jakar mai khud dhund luga, you don't have to do it, let's say if there will a "prototype" inside "protoype" and so on, kitni baar likho ge " .prototype.prototype ", yeh "Syntactical Sugar" JS gives to us

//here when we will run this without using "new" keyword in above Lines 67 & 68, we will get the error, however, if we will print the whole prototype, we will see those "properties" 100% but when we transfered values in Lines 67 & 8 to "chai" & "tea", we didn't told them that we have received those additional properties, that's where "new" keyword comes into play, we will have to tell them
chai.printMe()



// Same way, In interview, when you will explain the interviewer in this way, Code Nahi Chalna hi aapko interview mein Select krwata hai, kyuki You should know why the code isn't working 

//JS don't give "constructor function" via classes but via "new" keyword

//Jab tak "new" keyword nahi use kiya that, everythign was in a Air, just after "new" keyword, everything started to exist or go live, "object" got created, then "prototype" got injected, then "methods" got defined, Line 46 ke basics pe banaya

//Constructor ke andar prototype linked hota hai, then after that, constructor is being called, after that all the "this" context walle, this.username, this,score, vo sab uske saath inject krke, kr diye jaate hai, finally we get our "New Object"


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

