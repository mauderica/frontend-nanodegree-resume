// THIS IS MY BIO OBJECT
var bio = {
    "name" : "Maude Chalin",
    "role" : "Front-End Web Developer",
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


// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// // var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);  // Not sure if need and why
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName); // Using .prepend( ) in this order will ensure the name appears before the role in the HTML.

// $("#topContacts").append(
//     formattedMobile,
//     formattedEmail,
//     formattedGithub,
//     formattedLocation,
//     formattedWelcomeMsg,
//     formattedSkills,
//     formattedBioPic
// );


// THIS IS MY EDUCATION OBJECT
var education = {
    "schools" : [
        {
            "name" : "Star Fleet Academy",
            "location" : "San Francisco, CA",
            "degree" : "BSc. Computer Engineering",
            "majors" : [
                "Astrophysics", "Exolinguistics"
            ],
            "dates" : "2018-2022",
            "url" : "www.starfleetacademy.org"
        },
        {
            "name" : "Hogwarts School of Witchcraft and Wizardry",
            "location" : "Beyond platform 9 3/4",
            "degree" : "MS Astrology",
            "majors" : [
                "Potions", "Spells"
            ],
            "dates" : "2022-2024",
            "url" : "www.Hogwarts.org"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Wed Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "www.udacity.com"
        }
    ]
};


// THIS IS MY WORK OBJECT
var work = {
    "jobs" : [
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
    ]
};


// THIS IS MY PROJECTS OBJECT
var projects = {
    "projects" : [
        {
            "title" : "Portfolio Site",
            "dates" : "2017-2018",
            "description" : "I created a first draft of my first portfolio site using HTML and CSS and responsive design techniques.",
            "images" : [
                "www.projectimage1.com",
                "www.projectimage2.com"
            ]
        }
    ]
};