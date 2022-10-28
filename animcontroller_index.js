//ANIMATION CONTROLLER SCRIPT
//OSC INDEX VERSION
//MNO

class animStruct {
	constructor(img_id, frames, update_freq) {
		this.img_id = img_id;
		this.frames = frames;
		this.update_freq = update_freq;
		this.current_frame = 0;
    }
}

var anim_img_id_00 = document.getElementById('splash-flex-img-1-standard');
var anim_img_id_01 = document.getElementById('splash-flex-img-2-standard');
var anim_img_id_02 = document.getElementById('splash-flex-img-1-mobile');
var anim_img_id_03 = document.getElementById('splash-flex-img-2-mobile');

var frame_00 = 'assets/photos/DSC02822.jpg';
var frame_01 = 'assets/photos/DSC02823.jpg';
var frame_02 = 'assets/photos/DSC02824.jpg';

var untitled_frame_00 = 'assets/index/untitled_frame_00.png';
var untitled_frame_01 = 'assets/index/untitled_frame_01.png';
var untitled_frame_02 = 'assets/index/untitled_frame_02.png';
var untitled_frame_03 = 'assets/index/untitled_frame_03.png';
var untitled_frame_04 = 'assets/index/untitled_frame_04.png';
var untitled_frame_05 = 'assets/index/untitled_frame_05.png';
var untitled_frame_06 = 'assets/index/untitled_frame_06.png';
var untitled_frame_07 = 'assets/index/untitled_frame_07.png';
var untitled_frame_08 = 'assets/index/untitled_frame_08.png';
var untitled_frame_09 = 'assets/index/untitled_frame_09.png';
var untitled_frame_10 = 'assets/index/untitled_frame_10.png';
var untitled_frame_11 = 'assets/index/untitled_frame_11.png';
var untitled_frame_12 = 'assets/index/untitled_frame_12.png';
var untitled_frame_13 = 'assets/index/untitled_frame_13.png';
var untitled_frame_14 = 'assets/index/untitled_frame_14.png';
var untitled_frame_15 = 'assets/index/untitled_frame_15.png';
var untitled_frame_16 = 'assets/index/untitled_frame_16.png';

var frame_00_mobile = 'assets/photos/IMG00.jpg';
var frame_01_mobile = 'assets/photos/IMG02.jpg';

var blinker_frame_00 = 'assets/index/blinker_frame_00.png';
var blinker_frame_01 = 'assets/index/blinker_frame_01.png';
var blinker_frame_02 = 'assets/index/blinker_frame_02.png';
var blinker_frame_03 = 'assets/index/blinker_frame_03.png';
var blinker_frame_04 = 'assets/index/blinker_frame_04.png';
var blinker_frame_05 = 'assets/index/blinker_frame_05.png';
var blinker_frame_06 = 'assets/index/blinker_frame_06.png';
var blinker_frame_07 = 'assets/index/blinker_frame_07.png';
var blinker_frame_08 = 'assets/index/blinker_frame_08.png';
var blinker_frame_09 = 'assets/index/blinker_frame_09.png';

var frames_00 = [frame_00, frame_01, frame_02];
//var frames_00 = [frame_00]; //freezeframe
var frames_01 = [untitled_frame_00, untitled_frame_01, untitled_frame_02, untitled_frame_03, untitled_frame_04, untitled_frame_05, untitled_frame_06, untitled_frame_07, untitled_frame_08, untitled_frame_09, untitled_frame_10, untitled_frame_11, untitled_frame_10, untitled_frame_08, untitled_frame_07, untitled_frame_06, untitled_frame_05, untitled_frame_04, untitled_frame_03, untitled_frame_02, untitled_frame_01];
var frames_02 = [frame_00_mobile];
var frames_03 = [blinker_frame_05, blinker_frame_06, blinker_frame_07, blinker_frame_08, blinker_frame_09, blinker_frame_08, blinker_frame_07, blinker_frame_06];
var frames_01_alt = [untitled_frame_11, untitled_frame_12, untitled_frame_13, untitled_frame_14, untitled_frame_15, untitled_frame_16, untitled_frame_15, untitled_frame_14, untitled_frame_13, untitled_frame_12];
var frames_02_alt = [frame_01_mobile];
var frames_03_alt = [blinker_frame_00, blinker_frame_01, blinker_frame_02, blinker_frame_03, blinker_frame_04, blinker_frame_05];

var freq_00 = 100;
var freq_01 = 100;
var freq_02 = 100;
var freq_03 = 100;
var freq_03_alt = 1000; //DOESNT WORK? CURSED? MAYBE BECAUSE OF SETINTERVAL?

var anim_0 = new animStruct(anim_img_id_00, frames_00, freq_00);
var anim_1 = new animStruct(anim_img_id_01, frames_01, freq_01);
var anim_2 = new animStruct(anim_img_id_02, frames_02, freq_02);
var anim_3 = new animStruct(anim_img_id_03, frames_03, freq_03);

var t_0 = setInterval(function(){updateAnim(anim_0)}, anim_0.update_freq);
var t_1 = setInterval(function(){updateAnim(anim_1)}, anim_1.update_freq);
var t_2 = setInterval(function(){updateAnim(anim_2)}, anim_2.update_freq);
var t_3 = setInterval(function(){updateAnim(anim_3)}, anim_3.update_freq);

function updateAnim(anim) {
	if (anim.img_id == null) return;
	anim.img_id.src = anim.frames[anim.current_frame];
	anim.current_frame++;
	if (anim.current_frame >= anim.frames.length) {anim.current_frame = 0;}
}