
show_project = function() {
	document.getElementById("Projects").style.display = "";
	document.getElementById("ProjectsButton").style.textDecoration  = "underline";	
	document.getElementById("CV").style.display = "none";
	document.getElementById("CVButton").style.textDecoration  = "";	
};

show_cv = function() {
	document.getElementById("Projects").style.display = "none";
	document.getElementById("ProjectsButton").style.textDecoration  = "";
	document.getElementById("CV").style.display = "";
	document.getElementById("CVButton").style.textDecoration  = "underline";
};

hideCV = function() {
	document.getElementById("CV").style.display = "none";
	document.getElementById("ProjectsButton").style.textDecoration  = "underline";		
}

window.onload = hideCV;