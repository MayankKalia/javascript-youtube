//Below is "Oject Literal"
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)  
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);



//BASIC WORKING MECHANISM OF CONSTRUCTOR FXN

//When you use "new" keyword
// Step 1: An empty Object is created
// Step 2: Constructor Fxn is called due to "new" keyword, it packs all the arguments and give it to you
// Step 3: all the arguments are injected into the fxn using "this" keyword
// Step 4: You get the arguments in the fxn


//instanceof   , read about this  , it will help


//here above, we are using data abstraction, data encapsulation, cause user doen't doesn't know that constructor method is being used, that's an abstratction, user doesn't know how "greeting is working", that's an abstraction