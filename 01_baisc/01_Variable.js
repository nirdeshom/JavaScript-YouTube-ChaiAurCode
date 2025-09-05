const accountId = 1234;
let accountEmail = "nir@gmail.com";
var accountPassword = "ab@#12";
accountCity = "Jaipur";

// TypeError: Assignment to constant variable.
// accountId = 9999;

accountEmail = "nirdesh@gmail.com";
accountPassword = "xy@#12";
accountCity = "Noida";

// console.log(accountId);
// console.log(accountEmail);

/*
 Perfer not use var
 because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity])