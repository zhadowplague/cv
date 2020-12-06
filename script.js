
show_project = function() {
	document.getElementById("Projects").style.display = "";
	document.getElementById("ProjectsButton").style.textDecoration  = "underline";	
	document.getElementById("CV").style.display = "none";
	document.getElementById("CVButton").style.textDecoration  = "";	
	document.getElementById("MenuMessage").style.visibility = "visible";	
};

show_cv = function() {
	document.getElementById("Projects").style.display = "none";
	document.getElementById("ProjectsButton").style.textDecoration  = "";
	document.getElementById("CV").style.display = "";
	document.getElementById("CVButton").style.textDecoration  = "underline";
	document.getElementById("MenuMessage").style.visibility = "hidden";	
};

hideCV = function() {
	document.getElementById("CV").style.display = "none";
	document.getElementById("ProjectsButton").style.textDecoration  = "underline";		
}

window.onload = hideCV;