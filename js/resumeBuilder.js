/*
Using object literal notation to create an object
 */
 var bio ={
   "name" : "Anthony Quinn",
   "role" : "Product Manager",
   "contacts" :
     {
       "mobile" : "435-565-1741",
       "email" : "quinn.ant@gmail.com",
       "github" : "aequinn",
       "location" : "Ann Arbor, MI"
     },
   "pictureURL" : "images/200x200.jpg",
   "welcome" : "I'm Anthony and I like to build things that help solve problems",
   "skills" : ["UX Design","Project Management","HTML","JavaScript"]
 }
/* Using the dot notation to create an object*/
var work = {};
work.position = "Project Manager";
work.employer = "General Electric";
work.yearWorked = "5";
work.address = "Van Buren Township, MI"

/* Using the bracket notation to create an object*/
var education = {};
education['school'] = "Carnegie Mellon University";
education["major"] = "Master of Information Systems Management";
education["yearsAttended"] = 2;
education["address"] = "Pittsburgh, PA";


/*Replace placeholders from template with object values*/
 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
 var formattedGeneric = HTMLcontactGeneric.replace("%contact%","Email:");
 formattedGeneric = formattedGeneric.replace("%data%",bio.contact);
 var formattedEmail = HTMLmobile.replace("%data", bio.contacts.mobile);
 var formattedMobile = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

 /*Work swap*/
 var formattedWorkName = HTMLworkEmployer.replace("%data%", work.employer);

/*Append template and other values to DOM*/
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").prepend(formattedPicture);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedGithub);
 $("#topContacts").append(formattedLocation);
 $("#header").append(formattedWelcome);
 $("#header").append(HTMLskillsStart);
 for(i=0; i<bio.skills.length; i++){
   var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
   $("#skills").append(formattedSkills);
 }

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkName);
