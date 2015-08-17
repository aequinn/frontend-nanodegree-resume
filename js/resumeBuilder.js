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
   ]
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
  ]
};

/*Projects object*/
var projets = {
  "projects" : [
    {
      "title" : "Masters Capstone Project",
      "datesWorked" : "Sept 2009 - Dec 2009",
      "description" : "Lead a team of six in research on the internet of things and home automation",
      "images" : [ ]
    }]
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
