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

// THIS IS MY BIO OBJECT
var bio = {
    "name" : name,
    "role" : role,
    "contacts" : {
        "mobile" : "785-289-8904",
        "email" : "maude.chalin@gmail.com",
        "github" : "mauderica",
        "location" : "Soquel, CA"
    },
    "welcomeMessage" : "Front-End Fairy at your Bedazzling Service",
    "skills" : [
        "fierce",
        "meticulous",
        "artisitc",
        "magic"
    ],
    "biopic" : "images/me.jpeg"
};

// Not sure if need this... var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#topContacts").append(
    formattedMobile,
    formattedEmail,
    formattedGithub,
    formattedLocation,
    formattedWelcomeMsg,
    formattedSkills,
    formattedBioPic
);

// THIS IS MY WORK OBJECT --> DOT NOTATION PRACTICE
var work = {};
work.jobs = [
    {
        "employer" : "Star Fleet",
        "title" : "Ensign",
        "location" : "Alpha Quadrant",
        "dates" : "In progress",
        "description" : "Best job ever!"
    },
    {
        "employer" : "NASA",
        "title" : "Astronaut in Training",
        "location" : "San Francisco, Earth",
        "dates" : "2022-2024",
        "description" : "Assistant to pilot a starship."
    }
];


// THIS IS MY EDUCATION OBJECT --> BRACKET NOTATION PRACTICE
var education = {};
education["schools"] = [
    {
        "name" : "Star Fleet Academy",
        "location" : "San Francisco, CA",
        "degree" : "Computer Engineering",
        "majors" : [
            "Astrophysics", "Exolinguistics"
        ],
        "dates" : "2018-2022",
        "url" : "www.starfleetacademy.org"
    }
];

$("#main").append(work.jobs[0].title);
$("#main").append(education["schools"][0]["name"]);