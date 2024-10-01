//HARMONIC OSCILLATOR'S PRECARIOUSLY CODED MENU TOGGLING SCRIPTS
//ANZOL

var query_mobile = window.matchMedia('screen and (min-width: 1280px)');
var mobile = false;

var left_block = document.getElementById('block-L');
var right_block = document.getElementById('block-R');
var left_ul = document.getElementById('nav-side-L');
var right_ul = document.getElementById('nav-side-R');

//PASSIVE MENU VIZ QUERIES

function checkQuery() {
  if(query_mobile.matches) {mobile = true;}
  else{mobile = false;}
  return mobile;
}

function closeMenu() {
  if (!checkQuery()) { //WHY DOES THIS WORK?
	left_ul.style.display = "none";
	right_ul.style.display = "none";
  }
}

window.onload = closeMenu();

query_mobile.onchange = (e) => {
	if(e.matches) {
	  if(left_ul.style.display == "none") {left_block.style.borderRight = "1px solid #000";}
	  if(right_ul.style.display == "none") {right_block.style.borderLeft = "1px solid #000";}
	  mobile = true;
	}
	else {
	  left_ul.style.display = "none";
	  right_ul.style.display = "none";
	  mobile = false;
	}
}

//BUTTON INDUCED MENU VIZ TOGGLES

function navLToggle() {
  if(left_ul.style.display == "none") {
	left_ul.style.display = "block";
	left_block.style.borderRight = "1px solid #222";
  }
  else{
	left_ul.style.display = "none";
	left_block.style.borderRight="1px solid #000";
  }
}

function navRToggle() {
  if(right_ul.style.display == "none") {
	right_ul.style.display = "block";
	right_block.style.borderLeft = "1px solid #222";
  }
  else{
	right_ul.style.display = "none";
	right_block.style.borderLeft="1px solid #000";
  }
}

// TALISMAN TOGGLE

function talismanToggle() {
  var tL = document.getElementById('talisman-locked');
  var tU = document.getElementById('talisman-unlocked');  
  if(tL.style.display == "none") {tL.style.display = "flex"; tU.style.display = "none";}
  else{tL.style.display = "none"; tU.style.display = "flex";}
}

// DICE TOGGLE

function diceToggle() {
  var w = document.getElementById('secrets-window');
  if(w.style.display == "flex") {w.style.display = "none";}
  else{w.style.display = "flex";
  clearClickedArray()
  clearAnims();
  }
}

// MAKING A STUPID SPAM IS NOT A TOGGLE!

function spam1ptBR() {window.open("../secrets/segredos.html", "", "width=220, height=600, menubar=0, status=0")}
function spam2ptBR() {window.open("../secrets/segredos.html", "", "width=220, height=600, menubar=0, status=0")}
function spam1enUS() {window.open("secrets/secrets.html", "", "width=220, height=600, menubar=0, status=0")}
function spam2enUS() {window.open("secrets/secrets.html", "", "width=220, height=600, menubar=0, status=0")}