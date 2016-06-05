var name = "Guy";
var role = "Web Developer"

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName)
$("#header").prepend(formattedRole)