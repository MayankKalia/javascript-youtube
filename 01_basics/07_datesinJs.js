//Dates

// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// We can use various methods to convert this date into more readable value.

// toString() : Sun May 07 2023 14:16:39
// toDateString() : Sun May 07 2023
// toTimeString() :14:19:03 GMT+0500 (Pakistan Standard Time)
// toLocaleString() : 5/7/2023, 2:20:24 PM
// toISOString() : 2023-05-07T09:21:22.167Z
// toUTCString() : Sun, 07 May 2023 09:24:48 GMT

//here we created date object or instance of date
let myDate = new Date()
console.log(myDate)

//this will output date in a better format
console.log(myDate.toString());

//prints the date portion of a Date object myDate as a human-readable string, excluding the time and timezone information.
console.log(myDate.toDateString());

//prints the Date object myDate as a string in the standardized ISO 8601 format, which includes the date, time, and timezone (UTC) in a specific, consistent format
console.log(myDate.toISOString());

//prints as a string in the ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) suitable for JSON serialization, including UTC timezone.
console.log(myDate.toJSON());

//outputs the date portion of the Date object myDate as a string, formatted according to the user's locale settings (e.g., MM/DD/YYYY in the US or DD/MM/YYYY in the UK)
console.log(myDate.toLocaleDateString());

//outputs the Date object myDate as a string, formatted according to the user's locale settings, displaying both the date and time components.
console.log(myDate.toLocaleString());

//Date is an object in javascript.
console.log(typeof myDate);

//months starts from 0 in JS
//let myCreatedDate = new Date(2024, 0, 26)
//let myCreatedDate = new Date(2024, 0, 26, 5, 3)

//console.log(myCreatedDate.toDateString());


//here we are learning how to compare 2 dates, helps in projects where comparison is needed like airbnb etc
let myCreatedDate = new Date("01-14-2024")

//outputs the current timestamp
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//alwys do comparison in milliseconds
//INTERVIEW COMMON QUESTION: how to convert in seconds and using floor in order to convert in lowest value
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//` ${newDate.getDay()} and the time is `


//to present date in a more customized format
newDate.toLocaleString('default',{
    weekday: "long",
} )

