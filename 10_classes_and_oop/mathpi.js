//  Interview Question: In JS "Math.pi" value is 3.14 aur jo bhi hai aage, I want to make it 4 or lt say 3, can it be done or not, if yes then how??? and if not then why not???

// property descriptors aur advance objects

// Below is the output of below statement and we are getting information about "PI" value, as we can see,we can't change it
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

//The Object.getOwnPropertyDescriptor(Math, "PI") method retrieves the property descriptor for the PI property of the Math object.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);


// Here, below, PI value will not overwrite despite me manually overwritting it
// is it possible ki i can't touch an Object's value and if ys and what's the reason behind it
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250, 
    isAvailable: true
}

// Only logging "console.log(Object.getOwnPropertyDescriptor(chai));" will give "undefined" as we are trying to get the Object rather than it's property while actually trying to get property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// you can also define your own properties, not everywhere but in limited places
//"enumerable" means "iterable"

Object.defineProperty(chai, 'name', {
   // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


// Summary of Key Concepts Discussed:
// 1. Property Descriptors (Object.getOwnPropertyDescriptor).
// 2. Immutability of Built-In Objects (Math.PI is immutable due to its descriptors).
// 3. Object.defineProperty to customize properties like writable, enumerable, or configurable.
// 4. enumerable Behavior in loops and iterations.
// 5. Advanced Object Management for creating more secure or specific object behaviors.
