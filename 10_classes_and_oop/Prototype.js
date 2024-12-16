//GENERIC INFO: when we let myName = "mayank" in console, we get undefined, cause, only meamoy got created for that variable, we are not return anything, that's why "undefined"


//here's we are taking specific usecase, so that you can know in future how "Librarires" or Frameworks are build, how other functionalities are added, like "Lodash" wagera kafi popular framework libraries hai
let myName = "mayank    "
let mychannel = "chai    "
//here we can "console.log" cause we know we get some By Default properties
//Also, if we add spaces after mayank like "mayank    " and use ".length" property, we will get the length which will include those empty spaces, which is not right and we don't want that, hence truelength
//console.log(myName.length);

//wha i want is , a property like "length", "truelength", trim vrim nahi, i now that can be used but we ae trying to understand something specific, so take a chill pill
//so what i want this "truelength" property to do is pra ka pura "console log", true lenght of string is , then uski proper value de, last waali extra values nikal ke de
// all this ysing trelenght, i ddon't wanna call 10 fxns
//However, we can use this "myName.trim().length" but if we have another variable, we gonna write this whole thing again, which we don't want
//what i want is whereEver there is a string, unke saath "By Default" ek property aa jaye, "truelength", this should be a method not property, you know the difference, right???, method is with " () ", understood! 
console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]



