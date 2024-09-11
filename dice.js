//HARMONIC OSCILLATOR LOADED DICE SCRIPT
//ANZOL

var nav = document.getElementById('nav-side-ul');
var clicked_dice_array = [];

var secret_link_1_ptBR_codeblock = '<li class="li-esoteric" onclick="spam1ptBR()"><a class="secret" href=#>SEGREDO!</a></li>';
var secret_link_1_enUS_codeblock = '<li class="li-esoteric" onclick="spam1enUS()"><a class="secret" href=#>SECRET!</a></li>';

var secret_link_2_ptBR_codeblock = '<li class="li-esoteric" onclick="spam2ptBR()"><a class="secret" href=#>SEGREDO?</a></li>';
var secret_link_2_enUS_codeblock = '<li class="li-esoteric" onclick="spam2enUS()"><a class="secret" href=#>SECRET?</a></li>';

var dice_code_1 = [1,2,1,6];
var dice_code_2 = [2,6,6,2];

var dice_table = document.getElementById('dice-table');
var passdice = dice_table.getElementsByClassName('dice');
var passdice_rect = dice_table.getElementsByTagName('rect');
var passdice_circle = dice_table.getElementsByTagName('circle');

var successBool = false;
var failureBool = false;

function loadedDice(number, lang) {
  clicked_dice_array.push(number);
  if (clicked_dice_array.length == 4) {
	//console.log(clicked_dice_array);
	if (arraysEqual(clicked_dice_array, dice_code_1)) {successAnim(); addSecretLink(1, lang);}
	else if (arraysEqual(clicked_dice_array, dice_code_2)) {successAnim(); addSecretLink(2, lang);}
    else {failureAnim();}
	clearClickedArray();
  }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function addSecretLink(code, lang) {
  if (code == 1) {
	if (lang == 0) {nav.insertAdjacentHTML("beforeend",secret_link_1_enUS_codeblock);}
	else if (lang == 1) {nav.insertAdjacentHTML("beforeend",secret_link_1_ptBR_codeblock);}
	else {nav.insertAdjacentHTML("beforeend",secret_link_1_enUS_codeblock);}
  }
  else if (code == 2) {
	if (lang == 0) {nav.insertAdjacentHTML("beforeend",secret_link_2_enUS_codeblock);}
	else if (lang == 1) {nav.insertAdjacentHTML("beforeend",secret_link_2_ptBR_codeblock);}
	else {nav.insertAdjacentHTML("beforeend",secret_link_2_enUS_codeblock);}
  }
}

function successAnim() {
	//console.log("SUCCESS DICE!");
	if (successBool) {
	  for (const circle of passdice_circle) {circle.style.animation = "diceSuccessA 1s linear 1";}
	  for (const rect of passdice_rect) {rect.style.animation = "diceSuccessB 1s linear 1";}
	  pauseClicks();
	}
	else if (!successBool) {
	  for (const circle of passdice_circle) {circle.style.animation = "diceSuccessC 1s linear 1";}
	  for (const rect of passdice_rect) {rect.style.animation = "diceSuccessD 1s linear 1";}
	  pauseClicks();
	}
	successBool = !successBool;
}

function failureAnim() {
	//console.log("FAILURE DICE!");
	if (failureBool) {
	  for (const circle of passdice_circle) {circle.style.animation = "diceFailureA 1s linear 1";}
	  for (const rect of passdice_rect) {rect.style.animation = "diceFailureB 1s linear 1";}
	  pauseClicks();
	}
	else if (!failureBool) {
	  for (const circle of passdice_circle) {circle.style.animation = "diceFailureC 1s linear 1";}
	  for (const rect of passdice_rect) {rect.style.animation = "diceFailureD 1s linear 1";}
	  pauseClicks();
	}
	failureBool = !failureBool;
}

function clearClickedArray() {
	clicked_dice_array = [];
}

function clearAnims() {
  for (const circle of passdice_circle) {circle.style.animation = "none";}
  for (const rect of passdice_rect) {rect.style.animation = "none";}
}

async function pauseClicks() {
  for (i=0; i < passdice.length; i++) {
	passdice[i].classList.add('hard-noselect');
  }
  //TIMER!!! NO CLICKS WHILE ANIMATIONS PLAYS!
  await new Promise(resolve => setTimeout(resolve, 1100));
  for (i=0; i < passdice.length; i++) {
	passdice[i].classList.remove('hard-noselect');
  }
}