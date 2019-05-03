cv = false;

cv_button = function(){
	if(!cv)
		show_cv();
};

show_cv = function() {
	var element = document.createElement("embed");
	element.src = "media/cv.pdf";
	document.getElementById("therestofit").appendChild(element);
};