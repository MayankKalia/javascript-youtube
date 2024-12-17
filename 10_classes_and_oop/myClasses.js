//ES6 ke baad ki kahani hai

class User {
    //jaise hi you use "new" keyword, class se object initializee hoga, constructor is being called automatically
    constructor(username, email, password) {
            this.username = username;
            this.email = email;
            this.password = password;
    }

    encrytPasword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUppercase()}`
    }
}

//no that we have defined the class
//let's create "user" from it

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encrytPasword());
console.log(chai.changeUsername());


// behind the scene, under the hood, without "class" syntax kaam ho kais rha hota

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());