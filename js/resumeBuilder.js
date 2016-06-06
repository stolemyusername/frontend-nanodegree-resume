var bio = {
    "name": "Guy Thomas",
    "role": "Web Developer",
    "contacts": {
        "mobile": "61-430-706-927",
        "email": "guythomas721@gmail.com",
        "github": "stolemyusername",
        "location": "Melbourne, Australia"
    },
    "welcomeMsg": "A prime Hack Reactor candidate",
    "skills": ["Drone Pilot", "Rubik's Cube", "Finance", "Tea Drinking"],
    "biopic": "images/profile.jpg"
}



var work = {
    "jobs": [{
        "employer": "IBM",
        "title": "Graduate Consultant",
        "location": "Melbourne, Australia",
        "dates": "July 2014 -> June 2016",
        "description": "Analysing and tranforming the IT processes in large Telecommunications and Banking companies. I was a project manager for small teams (4-10 people) to deliver IT solutions."
    }, {
        "employer": "Mt. Hotham",
        "title": "Kids Ski Instructor",
        "location": "Mt. Hotham, Australia",
        "dates": "2015",
        "description": "I was a ‘level leader’ for intermediate skiiers. I taught kids from 6-14 years old. I taught both privates, school groups and group lessons of up to 12 students during peak season."
    }, {
        "employer": "Bad Hofgastein Ski School",
        "title": "Adults Ski & Board Instructor",
        "location": "Bad Hofgastein, Austria",
        "dates": "2014 - 2015",
        "description": "I taught group lessons for adults & children in skiing and snowboarding lessons. During this season I specialised in teaching adult private lessons & pre-organised tour groups."
    }, {
        "employer": "Big White Ski School",
        "title": "Kids Ski Instructor",
        "location": "Big White, Canada",
        "dates": "2013 - 2014",
        "description": "I achieved the highest sales of any rookie for the entire season. I always delivered the highest quality lessons to my students while ensuring that my classes keep the kids safe, entertained and taught them new skills."
    }]
};



var education = {
    "schools": [{
        "name": "Monash University",
        "location": "Melbourne, Australia",
        "degree": "Bachelor of Commerce",
        "majors": ["Finance", "Economics"],
        "dates": "Dec 2013",
        "url": "www.study.monash"
    }, {
        "name": "Vermont Secondary College",
        "location": "Melbourne, Australia",
        "degree": "VCE",
        "majors": ["Physics", "Economics"],
        "dates": "Dec 2010",
        "url": "www.vermontsc.vic.edu.au/"
    }],
    "onlineCourses": [{
        "name": "Intro To Javascript",
        "topic": "Programming",
        "dates": "June 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "name": "Intro To Computer Science",
        "topic": "Programming",
        "dates": "May 2016",
        "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-7"
    }]
};

var projects = {
    "projects": [{
        "title": "ANZ Integrated Account",
        "dates": "March, 2016 -> June, 2016",
        "description": "PMO"
    }, {
        "title": "Unica",
        "dates": "May, 2015 -> March, 2016",
        "description": "Data Analyst"
    }]
}
	
//Populate the Name and role
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role))
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name))

//Populate the Bio Information
	for (info in bio.contacts){
		var formatted = HTMLcontactGeneric.replace("%data%",bio.contacts[info])
		formatted = formatted.replace("%contact%",info)
		$("#topContacts").append(formatted)
	}
	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic))
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg))


//Populate the skills
if (bio.skills.length != 0) {
    $("#header").append(HTMLskillsStart)
    for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill)
	}
}

//Populate the job history
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart)
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle)

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

//Populate the projects
projects.display = function() {
	console.log("enter")
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

projects.display()

//Populate the map of locations that I've lived in and worked in
$("#mapDiv").append(googleMap);
