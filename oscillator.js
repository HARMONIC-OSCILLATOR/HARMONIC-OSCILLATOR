//HARMONIC OSCILLATOR OSCILLATION HANDLER
//MNO

//COLOR CHOOSER FUNCTIONALITY
var color_1 = document.getElementById('color1');
var color_2 = document.getElementById('color2');
var default_color_1 = "#00FFFF";
var default_color_2 = "#0000FF";
window.addEventListener("load", colorStartup);

function colorStartup() {
	color_1.value = default_color_1;
	color_2.value = default_color_2;
	color_1.addEventListener("input", updateFirst);
	color_2.addEventListener("input", updateFirst2);
	color_1.addEventListener("change", updateAll);
	color_2.addEventListener("change", updateAll2);
}

function updateFirst(event) {
	var path_1 = document.querySelector('.illegal-rotation-1');
	if (path_1) {path_1.style.stroke = event.target.value;}
}

function updateFirst2(event) {
	var path_2 = document.querySelector('.illegal-rotation-2');
	if (path_2) {path_2.style.stroke = event.target.value;}	
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
	var key_press = event.keyCode;
	var color_palettes = document.getElementsByClassName('color-options');
	if(key_press == 72) {
		for (i = 0; i < color_palettes.length; i++) {
			if (color_palettes[i].style.display == "initial") {color_palettes[i].style.display = "none";}
			else {color_palettes[i].style.display = "initial";}
		}
	}
})