//***One the basis of how data is kept in memory and accessed, data is categorized into 2 categories: Primitive & Non-Primitive***

//Primitive 
//***these are call by value, whenever you copy them from one place to other, the original data, memory reference is not given instead it's "Copy" is given and whatever changes are done, it happens in the "Copy" not the "Original"***

//7 types: String, Number, Boolean, null( matalab empty nahi hai, 0 nahi hai, matlab ek dum khali, jab server se temperature lane ki bat ki thi, vo 0 nahi tha, khali tha ), undefined(variable declare hai, memory space declare hai par value define nahi hai) Symbol(kisi bhi value ko unique bbane ke liye use hota hai, spceiialy Advance JS mein Frontend development karege, waha pe pe "Components" ko unique banane ke liye use hota hai" ), BigInt(Some very big value jo number mein handle nahi ho rhi hai)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

//Reference (Non primitive)
//****these are those values, jiske reference hume memory mein directly allocate kiya ja sakta hai***

//Array, Objects, Functions
//***JS master krni hai toh, JS ke Objects aur Browser Events yaan Web Events master kr lijiye, aapne JS master kr li***


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

       */

