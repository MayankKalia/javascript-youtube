class User {
    // behind the scenes, this constructor is setting the email but not password
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    //here error comes, causes construtor also setting value and setter also setting value, which is causing confict and giving error, cause it becomes a race(all this before changing below code as "_password")

    //also we are using "_" to differentiate
    //always return in get
    get password(){
        return this._password.toUpperCase()
    }

    // also now, value of password is setting from getter & setter

    set password(value){
            this._password = value
    }
}

const mayank = new User("m@ayank@ai", "123")
// sometimes, we need fine grain control over things, like if someone askes for "password" and i wanna say, ki "mai password nahi batauga", like that
console.log(mayank.password);


//errors knowledge is very important for better understanding

