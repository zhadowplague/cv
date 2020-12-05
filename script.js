
show_project = function() {
	document.getElementById("Projects").style.display = "";
	document.getElementById("CV").style.display = "none";
};

show_cv = function() {
	document.getElementById("Projects").style.display = "none";
	document.getElementById("CV").style.display = "";
};

hideCV = function() {
	document.getElementById("CV").style.display = "none";
}

window.onload = hideCV;