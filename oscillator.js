//HARMONIC OSCILLATOR OSCILLATION HANDLER
//MNO

//COLOR CHOOSER FUNCTIONALITY
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var defaultColor = "#0000FF";
var defaultColor2 = "#00FFFF";
window.addEventListener("load", colorStartup);

function colorStartup() {
	color1.value = defaultColor;
	color2.value = defaultColor2;
	color1.addEventListener("input", updateFirst);
	color2.addEventListener("input", updateFirst2);
	color1.addEventListener("change", updateAll);
	color2.addEventListener("change", updateAll2);
}

function updateFirst(event) {
	var path = document.querySelector('.illegal-rotation-1');
	if (path) {path.style.stroke = event.target.value;}
}

function updateFirst2(event) {
	var path2 = document.querySelector('.illegal-rotation-2');
	if (path2) {path2.style.stroke = event.target.value;}	
}

function updateAll(event) {
	var paths = document.getElementsByClassName('illegal-rotation-1-sm');
	for (i = 0; i < paths.length; i++) {
		paths[i].style.stroke = event.target.value;
	}
}

function updateAll2(event) {
	var paths = document.getElementsByClassName('illegal-rotation-2-sm');
	for (i = 0; i < paths.length; i++) {
		paths[i].style.stroke = event.target.value;
	}
}	

//UI HIDING FUNCTIONALITY (NEEDS REPLACING WITH THE EYE)
document.addEventListener("keydown", function(){
	var keyPressy = event.keyCode;
	var colorPalettes = document.getElementsByClassName('color-options');
	if(keyPressy == 72) {
		for (i = 0; i < colorPalettes.length; i++) {
			if (colorPalettes[i].style.display == "initial") {colorPalettes[i].style.display = "none";}
			else {colorPalettes[i].style.display = "initial";}
		}
	}
})