const accountId = 144552;
let accountEmail = "hitesh@google.com";
var accountPasword = "12345";
accountCity = "Jaipur";
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPasword = "212312323"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPasword, accountCity])