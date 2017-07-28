/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Maude Chalin");
// var firstName = "Maude";
// var age = 27;
// console.log(firstName);
// var awesomeThoughts = "I am Maude and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);
// $("#main").append("Hello, " + funThoughts);

var name = "Maude Chalin";
var role = "Front-End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").append(formattedName);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); // Using .prepend( ) in this order will ensure the name appears before the role in the HTML.
