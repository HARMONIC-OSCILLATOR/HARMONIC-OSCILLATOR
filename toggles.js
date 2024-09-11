//HARMONIC OSCILLATOR'S PRECARIOUSLY CODED MENU TOGGLING SCRIPTS
//ANZOL


//NAV-SIDE TOGGLE

var query_mobile = window.matchMedia('screen and (min-width: 1280px)');
var mobile = false;

var l = document.getElementById('block-L');
var r = document.getElementById('block-R');
var ul = document.getElementById('nav-side-id');

function checkQuery() {
  if(query_mobile.matches) {mobile = true;}
  else{mobile = false;}
  return mobile;
}

function closeMenu() {
  if (!checkQuery()) {ul.style.display = "none";} //WHY DOES THIS WORK?
}

window.onload = closeMenu();

query_mobile.onchange = (e) => {
	if(e.matches) {
	  if(ul.style.display == "none") {l.style.borderRight = "1px solid #000";}
	  mobile = true;
	}
	else {
	  ul.style.display = "none";
	  mobile = false;
	}
}

function navToggle() {
  if(ul.style.display == "none") {
	ul.style.display = "block";
	l.style.borderRight = "1px solid #222";
  }
  else{
	ul.style.display = "none";
	l.style.borderRight="1px solid #000";
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

function spam1ptBR() {window.open("lixo.html", "", "width=220, height=600, menubar=0, status=0")}
function spam2ptBR() {window.open("lixo.html", "", "width=220, height=600, menubar=0, status=0")}
function spam1enUS() {window.open("spam.html", "", "width=220, height=600, menubar=0, status=0")}
function spam2enUS() {window.open("spam.html", "", "width=220, height=600, menubar=0, status=0")}