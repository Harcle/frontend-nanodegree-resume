/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Biography
var bio = {
    "name": "Jane Alice Watson",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "jane30@gmail.com",
        "github": "rachel",
        "twitter": "@jane",
        "location": "San Francisco"
    },
    "welcomeMessage": "Greetings! Welcome to my Page!!",
    "skills": ["Active listening", " Adaptability", " Goal Setting", " Time Management"],
    "biopic": "images/image-placeholder.png"
}

bio.display = function() {

    var formattedBio = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedBio);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedMessage);
    $("#header").append(formattedPic);


    var formattedSkillsStart = HTMLskillsStart;
    $("#header").append(formattedSkillsStart);

    if (bio.skills.length > 0) {
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }

}
bio.display();


// Work
var work = {
    "jobs": [{
        "employer": "Planet Express",
        "title": "Delivery Boy",
        "location": "Brooklyn, NY",
        "dates": "2012-2015",
        "description": "Deliver a wide variety of items to different addresses and through different routes.Follow route and time schedule.Load, unload, prepare, inspect and operate delivery vehicle.Ask for feedback on provided services and resolve clients’ complaints.Collect payments.Inform on new products and services.Complete logs and reports.Follow DOT regulations and safety standards."
    }, {
        "employer": "Panucci's Pizza",
        "title": "Cashier",
        "location": "Manhattan, NY",
        "dates": "2015-2016",
        "description": "Welcome the customers as they step into the restaurant.Deal with clients in the most polite manner possible.Take record of orders made by customers both at the drive-through and counter, depending on where he/she is stationed.Convey orders to kitchen staff and see to their preparation.Monitor all orders placed by the client and also ensure these orders are delivered promptly to the customers.Package foods in bags and boxes along with kitchen staff.Help kitchen staff to cook food when such help is required.Help with up-selling in the restaurant when necessary.Pay attention to customers and help in responding to their inquiries, resolving their complaints, and noting their suggestions."
    }]
}

work.display = function() {

    var formattedWork = HTMLworkStart;
    $("#workExperience").append(formattedWork);

    work.jobs.forEach(function(job) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocationDates = formattedLocation + formattedDates;
        $(".work-entry:last").append(formattedLocationDates);

        $(".work-entry:last").append(formattedDescription);
    });

}
work.display();

//Projects
var projects = {
    "projects": [{
        "title": "Vehicle Movement Based Street Lights",
        "dates": "2015-2016",
        "description": "The project aims at saving energy by detecting the vehicle movement on highways and switching on the block of street light ahead of it and simultaneously switching off the trailing lights. The project requires sensors to detect the vehicle movements and switches on the lights ahead of it. As soon as the vehicle moves ahead the trailing lights automatically switches off. This can be used to save a lot of energy instead of using conventional system where the street lights are remained ON. Another mode of operation can be used where the lights are remained ON with 10% intensity and when the vehicle passes by the lights ahead of it are switched on with 100% intensity and the trailing lights revert back to 10% intensity. PWM is used for intensity control through microcontroller. The sensors sense the vehicle movements and send it to a 8051 microcontroller that initiates commands for switching the lights ON/OFF.",
        "images": ["images/circuit.jpg", "images/diagram.jpg"]
    }]
}

projects.display = function() {

    var formattedProjectStart = HTMLprojectStart;
    $("#projects").append(formattedProjectStart);

    projects.projects.forEach(function(project) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImages = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImages);
            });
        }
    });

}
projects.display();


// Education
var education = {
    "schools": [{
        "name": "Nova southeastern University",
        "location": "Fort Lauderdale, FL",
        "degree": "Masters",
        "dates": "2009-2012",
        "url": "https://en.wikipedia.org/wiki/Nova_Southeastern_University",
        "majors": ["EC"]
    }, {
        "name": "Eckerd College",
        "location": "Saint Petersburg, FL",
        "degree": "BA",
        "dates": "2012-2016",
        "url": "https://en.wikipedia.org/wiki/Eckerd_College",
        "majors": ["EC"]
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Course",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://in.udacity.com/"
    }]
}

education.display = function() {

    var formattedSchoolStart = HTMLschoolStart;
    $("#education").append(formattedSchoolStart);

    education.schools.forEach(function(school) {

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedNameDegree = formattedName + formattedDegree;

        $(".education-entry:last").append(formattedNameDegree);
        $(".educatio-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);

        if (school.majors.length > 0) {
            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        }

    });

    var formattedOnline = HTMLonlineClasses;
    $("#education").append(formattedOnline);

    education.onlineCourses.forEach(function(course) {

        $("#education").append(formattedSchoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);

    });

}
education.display();

// Footer
function displayContactInfo() {

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

}

displayContactInfo();

// Internationalize name button
function inName(name) {
    var name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    name[2] = name[2].toUpperCase();
    return name[0] + " " + name[1] + " " + name[2];
}

$("#main").append(internationalizeButton);

// google map
$("#mapDiv").append(googleMap);

//Bar Chart
var data = [76, 82, 90, 85];

var width = 700;
var height = 237;
var barHeight = 25;

var chart = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 450]);


var y = d3.scaleOrdinal()
    .domain(d3.range(data.length))
    .range([0, height]);

//color
var color = d3.scaleLinear()
    .domain([70, 100])
    .range(["red", "green"]);

//bar
chart.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', function(d, i) {
        return i * 68
    })
    .attr('width', x)
    .attr('height', barHeight)
    .attr("fill", function(d) {
        return color(d)
    });

//data
chart.selectAll('text.score')
    .data(data)
    .enter()
    .append('text')
    .attr('x', x)
    .attr('y', function(d, i) {
        return i * 68 + barHeight / 2;
    })
    .attr('dx', -5)
    .attr('dy', '.36em')
    .attr('text-anchor', 'end')
    .attr('class', 'score')
    .text(function(d) {
        return (d + '%');
    });