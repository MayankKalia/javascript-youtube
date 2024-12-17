class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    //sometimes, you don't want to give access of this method to all those objects which are intantiated from this class, hence, we can use "static" keyword, it blocks the access of this method or property, kiski "child" ko bhi access nahi krne dega
    static createId(){
        return `123`
    }
}

const mayank = new User("mayank")
mayank.createId()
console.log(mayank.createId());

class Teacher extends User {
    constructor(username, email){
        // super apne saath "this" "call" leke jayega
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com" )
console.log(iphone.createId());


//evetually after pratice, maybe years, your imagination of how things are happening behind scenes will start happening whn you will see keywords or things
