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
        "fierceness",
        "meticulousness",
        "artistry",
        "magic"
    ],
    "biopic" : "images/me.jpeg"
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// // var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);  // Not sure if need and why
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

// $("#header").prepend(formattedRole);
$("#header").prepend(formattedName); // Using .prepend( ) in this order will ensure the name appears before the role in the HTML.

// $("#topContacts").append(
//     formattedMobile,
//     formattedEmail,
//     formattedGithub,
//     formattedLocation,
//     formattedWelcomeMsg,
//     formattedSkills,
//     formattedBioPic
// );

if (bio.skills.length > 0) {  // This condition checks whether or not there are entries (of skills) in the "skills" array, regardless of what their values are.
    $("#header").append(HTMLskillsStart);
    for (let i=0; i<bio.skills.length; ++i) {
        let formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }    
};  // More optimal way to do this?
// syntactically scoped local variable (does not get hoisted like var) --> new in ECMA Script 6

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
            "description" : "Best job ever! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet nibh eu mattis efficitur. Sed varius eleifend ex et tincidunt. Curabitur venenatis nisi vitae ante hendrerit ultrices. Donec imperdiet augue felis, sed auctor eros elementum nec. Sed a faucibus mi, in congue sapien. Praesent hendrerit diam nisi, id pharetra est."
        },
        {
            "employer" : "NASA",
            "title" : "Astronaut in Training",
            "location" : "San Francisco, Earth",
            "dates" : "2022-2024",
            "description" : "Assistant to pilot a starship. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet nibh eu mattis efficitur. Sed varius eleifend ex et tincidunt. Curabitur venenatis nisi vitae ante hendrerit ultrices. Donec imperdiet augue felis, sed auctor eros elementum nec. Sed a faucibus mi, in congue sapien. Praesent hendrerit diam nisi, id pharetra est."
        }
    ]
};

// TODO: Replace for-in loop with a for loop or forEach() --> demonstrating these current best practices is required for the Online Resume project
for (let i in work.jobs){ // using for-in to iterate over the "jobs" array in the "work" object. Note something like "job" could be used instead of "i", as a more descriptive index name
    if (work.jobs.hasOwnProperty(i)) { // this if-statement is not necessary in this case since for-in is being used to iterate over an array and not an object
        // console.log(work.jobs[i]);
        $("#workExperience").append(HTMLworkStart);
        let formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        let formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        let formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        let formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        let formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        
        function displayWork() {
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
        }

        displayWork();
    }
} // Is there a more optimal way to do this?

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

// QUIZ: THIS LOGS THE USER CLICK LOCATIONS TO THE CONSOLE
$(document).click(function(event) {
  logClicks(event.pageX, event.pageY);
});


// QUIZ: APPEND A BUTTON AND CREATE A FUNCTION THAT "INTERNATIONALIZES" A NAME (with the help of helper.js)
$("#main").append(internationalizeButton);
function inName(names) {
    names = names.trim().split(" ");
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names[0] + " " + names[1] ;
}