// in case of window object, this refers to window object, but in case of "node", this refers to empty object{}, impt. interview question

//if inside fxn there is call made to another fxn which has some variables we need and we want to hold their reference, we use ".call"

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // when we are console logging "chai", username is not showing up cause here downbelow, username is not getting called ut just reference is being given, which is a bit deceiveing seeing the parenthesis (), technically internally, in JS, only reference is being given, but not called, hence we get some methods in JS using which we can explicitly call those methods, one of those methods is   ".call", only after using this method, technically "call" is being made below, even if we print "called" before using ".call", call is being made, execution context bhi hhai, but the issue is, after being called or run hone ke baad, what happens is call() bhi hat jta hai aur uska execution context bhi, which ultimately flush out all it's vaiables declared inside it, we don't want it, we want to hold the reference, so in order to hold the refernce , we usse ".call", other methods ae also there like ".bind" but in our current situation, we are use ".call"
    //SetUsername(username)
    // below "this" is optional to give as 1st parameter, whenever we use call, we use "this"(optional) as 1t parameter, matlab, we are giving out "this" to use, rather than using dooosre ka "this", which will help us, in case the doosra fxn vanishes, we still be able to use it's "saman"
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


//".call" passes our current execution context to another function, technically it's current but explaining via example is a much much better choice to make