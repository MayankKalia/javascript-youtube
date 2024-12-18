class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
}

const mayank = new User("m@ayank@ai", "123")
// sometimes, we need fine grain control over things, like if someone askes for "password" and i wanna say, ki "mai password nahi batauga", like that
console.log(mayank.password);

