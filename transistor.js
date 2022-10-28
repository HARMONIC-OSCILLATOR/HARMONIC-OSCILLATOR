//HARMONIC OSCILLATOR BUTTON TRANSITIONIST SCRIPT
//MNO

var u = document.getElementsByTagName('nav');
var v = document.getElementsByTagName('main');
var w = document.getElementsByClassName('side-page-nav-flex');
var x = document.getElementsByClassName('splash-nav-flex');

var sunmoon = document.getElementById('SUN');
var isSun = true;

//INDEX MENU SUMMONS
function navDisplay() {  
	for (var i = 0; i < x.length; i++) {
		if (x[i].style.display == "flex") {x[i].style.display = "none";}
		else {x[i].style.display = "flex";}
	}
	
	for (var i = 0; i < w.length; i++) {
		if (w[i].style.display == "flex") {w[i].style.display = "none";}
		else {w[i].style.display = "flex";}
	}
}

//SIDE PAGE MENU SUMMONS (OBSCURES ENTIRE PAGE)
function totalNavDisplay() {  
	for (var i = 0; i < v.length; i++) {
		if (v[i].style.display == "none") {v[i].style.display = "initial";}
		else {v[i].style.display = "none";}
	}
	for (var i = 0; i < w.length; i++) {
		if (w[i].style.display == "flex") {w[i].style.display = "none";}
		else {w[i].style.display = "flex";}
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
	if (isSun) {sunmoon.src = "assets/index/MOON.png"; isSun = false;}
	else {sunmoon.src = "assets/index/SUN.png"; isSun = true;}
}

//EYE BUTTON SCRIPT
function eyeDisplay() {
	//THE EYE ABOVE ALL EYES
	var eye = document.getElementById('lang');
	var mainnav = document.querySelector('.main-nav');
	console.log(mainnav.childElementCount);
	console.log(mainnav.childNodes);
	while(mainnav.length > 1) {
		mainnav.removeChild(mainnav.firstChild);
		console.log(mainnav.length);
	}
	console.log(eye);
	
	
	
	
	//var eyeClone = eye.cloneNode(true);
	//eyeClone.id = 'eye';ja ja ja voltooooooooooooooooooooooooooooooooo
	//
	//document.body.appendChild(eye);
	//for (i = 0; i < u.length; i++) {
	//	u[i].style.display = "none";
	//	console.log(eye.id);
	//}
}