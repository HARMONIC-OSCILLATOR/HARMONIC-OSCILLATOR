//HARMONIC OSCILLATOR BUTTON TRANSITIONIST SCRIPT
//MNO

var main = document.getElementsByTagName('main');
var side_nav = document.getElementsByClassName('side-page-nav-flex');
var splash_nav = document.getElementsByClassName('splash-nav-flex');

var sun_moon = document.getElementById('SUN');
var is_sun = true;

var eye = document.getElementById('eye');

//INDEX MENU SUMMONS
function navDisplay() {  
	for (var i = 0; i < splash_nav.length; i++) {
		if (splash_nav[i].style.display == "flex") {splash_nav[i].style.display = "none";}
		else {splash_nav[i].style.display = "flex";}
	}
	
	for (var i = 0; i < side_nav.length; i++) {
		if (side_nav[i].style.display == "flex") {side_nav[i].style.display = "none";}
		else {side_nav[i].style.display = "flex";}
	}
}

//SIDE PAGE MENU SUMMONS (OBSCURES ENTIRE PAGE)
function totalNavDisplay() {  
	for (var i = 0; i < main.length; i++) {
		if (main[i].style.display == "none") {main[i].style.display = "initial";}
		else {main[i].style.display = "none";}
	}
	for (var i = 0; i < side_nav.length; i++) {
		if (side_nav[i].style.display == "flex") {side_nav[i].style.display = "none";}
		else {side_nav[i].style.display = "flex";}
	}
}

//INDEX MAIN SUBJECT ANIMATION SWAP SCRIPT
function animSwap() {
	if (anim_1.frames == frames_01) {anim_1 = new animStruct(anim_img_id_01, frames_01_alt, freq_01);}
	else {anim_1 = new animStruct(anim_img_id_01, frames_01, freq_01);}

	if (anim_2.frames == frames_02) {anim_2 = new animStruct(anim_img_id_02, frames_02_alt, freq_02);}
	else {anim_2 = new animStruct(anim_img_id_02, frames_02, freq_02);}
	
	if (anim_3.frames == frames_03) {anim_3 = new animStruct(anim_img_id_03, frames_03_alt, freq_03_alt);}
	else {anim_3 = new animStruct(anim_img_id_03, frames_03, freq_03);}
}

function splashTransition() {
	navDisplay();
	animSwap();
}

function sidePageTransition() {
	totalNavDisplay();
}

//INDEX RIGHT NAV SUNMOONER
function sunMoonTransition() {
	if (is_sun) {sun_moon.src = "assets/index/MOON.png"; is_sun = false;}
	else {sun_moon.src = "assets/index/SUN.png"; is_sun = true;}
}

//EYE BUTTON SCRIPT IGNORE THESE NAMING CONVENTIONS FOR THE MEANWHILE PLEASE..
function eyeVision () {
	var a = document.getElementById('menu');
	var b = document.getElementById('logo');
	var c = document.getElementById('left');
	var d = document.getElementById('right');
	var e = document.getElementById('color1');
	var f = document.getElementById('color2');
	var g = document.getElementsByClassName('main-nav');
	var h = document.getElementsByClassName('nav-flex-item');
	
	eye.style.height = "4.25rem";
	
	var toggles = new Array(a, b, c, d, e, f);
	for (i = 0; i < toggles.length; i++) {
		if(toggles[i] != null) {
			if(toggles[i].style.display == "none") {toggles[i].style.display = "initial";}
			else {toggles[i].style.display = "none";}
		}
	}

	console.log(g);
	console.log(g[0].style.height);
	if (g[0].style.height == "") {g[0].style.height = "4.25rem";}
	if (g[0].style.height >= "1") {g[0].style.height = "0"; console.log(g[0].style.height);}
	else {g[0].style.height = "4.25rem"; console.log(g[0].style.height);}

	for (i = 0; i < h.length; i++) {
		if(h[i].style.display == "none") {h[i].style.display = "initial";}
		else {h[i].style.display = "none";}
	}
}