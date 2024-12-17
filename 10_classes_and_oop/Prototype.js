//GENERIC INFO: when we let myName = "mayank" in console, we get undefined, cause, only meamoy got created for that variable, we are not return anything, that's why "undefined"


//here's we are taking specific usecase, so that you can know in future how "Librarires" or Frameworks are build, how other functionalities are added, like "Lodash" wagera kafi popular framework libraries hai
//let myName = "mayank    "
//let mychannel = "chai    "
//here we can "console.log" cause we know we get some By Default properties
//Also, if we add spaces after mayank like "mayank    " and use ".length" property, we will get the length which will include those empty spaces, which is not right and we don't want that, hence truelength
//console.log(myName.length);

//wha i want is , a property like "length", "truelength", trim vrim nahi, i now that can be used but we ae trying to understand something specific, so take a chill pill
//so what i want this "truelength" property to do is pra ka pura "console log", true lenght of string is , then uski proper value de, last waali extra values nikal ke de
// all this ysing trelenght, i ddon't wanna call 10 fxns
//However, we can use this "myName.trim().length" but if we have another variable, we gonna write this whole thing again, which we don't want
//what i want is whereEver there is a string, unke saath "By Default" ek property aa jaye, "truelength", this should be a method not property, you know the difference, right???, method is with " () ", understood! 
//console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

// Factory Functions - By Default functions available in "Object"
Object.prototype.mayank = function(){
    console.log(`mayank is present in all objects`);
    
}

//Below we are adding a property to array
Array.prototype.heyMayank = function(){
        console.log(`Mayank says hello`);
        
}
//heroPower.mayank()
// myHeros.mayank()
// myHeros.heyMayank()

//below the code will now work, heroPower object doesn't have access to heyMayank()
// heroPower.heyMayank()


// What we did is, we accessed the top level heirarchy i.e Object and injected a new property in it, when then will be available to everyone, be it Fxn or Array or  String


// inheritance (explained via below example)

// Inearlier days, classes toh hoti nahi hai, We used to make Objects for everything, and used to add peroperties and fxns in it

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher ={
    makeVideo: true 
}

const TeachingSupport = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //in som situation we we want objects to link, want property of other object, below is how we use to do it in earlier days
    //also this approach is quite outdated and you will most not find it in new codebases
    __proto__: TeachingSupport
}

//we can do it outside also
Teacher.__proto__ = User

//Above is what Inheritance is, prototypal inheritance, how you can access the properties of someone else
// Also every "Object" in itself is an "instance", not like they are sharing things with each other, having it's OWN properties, other tha the default properties which everyone has

//Current we have "prototype" to link things

// modern syntax
//below, 1st parameter accessing poperties of 2nd
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mayank".trueLength()
"iceTea".trueLength()

//JS OOP is completed here, rest syntax will be discussed in later videos
