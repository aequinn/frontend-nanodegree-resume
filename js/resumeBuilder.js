

/*
Using object literal notation to create an objects. Object with peronsal information
 */
 var bio = {
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
   "welcomeMessage" : "I'm Anthony and I like to build things that help solve problems",
   "skills" :
   [
     "UX Design",
     "Project Management",
     "HTML",
     "JavaScript"
   ],
   "display" : function(){
     /*Fill in main bio*/

     $("#header").prepend(HTMLbioPic.replace("%data%", bio.pictureURL));
     $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
     $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

     /*Fill in contacts*/
     if(bio.contacts){
       for(contact in bio.contacts){
         var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
         formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
         $("#topContacts").append(formattedContact);
       }
     }

     if(bio.welcomeMessage.length >0){
       $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
     }

     //Check if they have skillz and add them to the site
     if(bio.skills.length > 0){
       $("#header").append(HTMLskillsStart);
       for(i=0; i<bio.skills.length; i++){
         $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
       }
     };
   }
 };

/* A work history object, created using literal notation*/
var work = {
  "jobs" : [
    {
      "employer" : "General Electric Corp.",
      "title" : "Projecct Manager",
      "location" : "Van Buren Township, MI",
      "datesWorked" : "Feb 2015 - Present",
      "description" : "Manage the maturation of an internal web application started by the Preformance Development HR team for supporting leadership development programs at GE. Own the releationship with customers and stakeholders, responsible for develivering roadmap, technical strategy, design, and leading the development team. "
    },
    {
      "employer" : "General Electric Capital Corp.",
      "title" : "Interaction Designer",
      "location" : "Van Buren Township, MI",
      "datesWorked" : "Aug 2012 - Feb 2015",
      "description" : "User Experience advocate and representative on various projects for GE Capital. Responsibilites included user research, wireframming, managing timelines and deliverables, "
    },
    {
      "employer" : "General Electric Capital Corp",
      "title" : "Information Technology Leadership Program Associate",
      "location" : "Various",
      "datesWorked" : "July 2010 - Aug 2012",
      "description" : "Rotated through various roles and teams taking on impact projects, meeting deliveralbes on demanding timelines."
    }
  ],
  "display" : function(){
    //Check for work history and add work if it is available
    /*Function for displaying the work section*/
    if(work.jobs.length > 0){
      //itereate through the jobs and fill out the section for eachone then add it to the page
      for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        //Add Employer & Title
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + ' '+HTMLworkTitle.replace("%data%", work.jobs[job].title));
        //Add job Location
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
        //Add job dates
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].datesWorked));
        //Add job Description
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
      };
    };
  }
};

/*Projects object*/
var projects = {
  "projects" : [
    {
      "title" : "Masters Capstone Project",
      "datesWorked" : "Sept 2009 - Dec 2009",
      "description" : "Lead a team of six in research on the internet of things and home automation",
      "images" : [
        "images/Capstone_CompLandscape.jpg",
        "images/Capstone_Ecosystem.jpg",
        "images/Capstone_surveyResearch.jpg"
       ]
    }],
    /*Add Encapsulated function to projects*/
    "display" : function(){
      console.log(projects.projects);
      if(projects.projects.length > 0){

        for (project in projects.projects){
          $("#projects").append(HTMLprojectStart);
          console.log(projects.projects[project].title);
          $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
          $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked));
          $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
          for (img in projects.projects[project].images){
            console.log(projects.projects[project].images[img]);
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[img]));
          }
        };
      };
    }
  };
/* Education Object*/
var education = {
  "schools" : [
    {"name" : "Carnegie Mellon Unversity",
    "degree" : "Master",
    "dates" : "2008-2009",
    "location" : "Pittsburgh, PA",
    "majors" : ["Information Systems Management"],
    "url" : "http://www.heinz.cmu.edu/school-of-information-systems-and-management/index.aspx"
    },
    {"name" : "Brigham Young University",
      "degree" : "Bachealors",
      "dates" : "2002-2008",
      "location" : "Provo, UT",
      "majors" :
      [
        "Information Systmes",
        "International Development"
      ],
      "url" : "http://marriottschool.byu.edu/bsis/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Developer Nano-degree",
      "school"  : "Udacity",
      "datesAttended" : "May 2015 - Present",
      "url" : "https://www.udacity.com/nanodegree"
    },
    {
      "title" : "Shaping up with Angular.js",
      "school"  : "Code School",
      "datesAttended" : "Nov 2014",
      "url" : "http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro"
    },
    {
      "title" : "Javascrip, HTML, CSS, & jQuery",
      "school"  : "Codecademy",
      "datesAttended" : "Nov 2014 - Present",
      "url" : "https://www.codecademy.com/aequinn"
    },
    {
      "title" : "Computer Science 101",
      "school"  : "Coursera - Stanford University",
      "datesAttended" : "May 2013",
      "url" : "https://www.coursera.com"
    },
    {
      "title" : "Creative Programming for Digital Media & Mobile Apps",
      "school"  : "Coursera - University of London",
      "datesAttended" : "September 2013",
      "url" : "https://www.coursera.com"
    }
  ]
};

/*Call Display for each object*/
bio.display();
work.display();
projects.display();

/*TO DO
* - Display Education
* - Display Online courses
*/

//Add Places I've lived
$("#mapDiv").append(googleMap);


//Features in progress

// /*Internationalization Button*/
// $("#main").append(internationalizeButton);
//
// function inName(name){
//
//   var newName = name.trim().toLowerCase().split(" ");
//   var firstName = newName[0].slice(0,1).toUpperCase();
//   firstName = firstName + newName[0].slice(1).toLowerCase();
//   var lastName = newName[1].toUpperCase();
//
//   return firstName + " " +  lastName;;
// }
// /*Click Tracking*/
// $(document).click(function(loc){
//   logClicks(loc.pageX, loc.pageY);
// });
