//HARMONIC OSCILLATOR COUNTERGLOW TABLET MANAGER
//MNO

var num_tablet_types = 0;

class tablet_type {
	constructor (text, tag){
		this.text = text;
		this.tag = tag;
		this.id = num_tablet_types++;
	}
}


var tablets = document.getElementsByClassName('tablet-of-truth');

//ADDING NEW TABLETS
//FORMAT AS new tablet_type('text','tag'); where tag is either 'none', 'tall', or 'wide'

var tablet_text_standalone_1 = new tablet_type('<p>Furthermore, the object, which individuality has as its essence, has no content. It is what is called necessity, since necessity, fate, and the like, each amount to saying that we do not know how to say what it is doing or what its determinate laws and its positive content are supposed to be because it is the absolute pure concept itself intuited as being, the simple and empty but nonetheless inexorable and impassive relation whose work is merely the nothingness of individuality.</p>', 'none');
var tablet_text_standalone_2 = new tablet_type('<p>Furthermore, since the skull does not itself feel, it seems that perhaps a more determinate significance could be given to it. Through their proximity to the skull, certain determinate sensations would allow us to take cognizance83 of what the skull is supposed to mean, and if a conscious mode of spirit has its feeling in a determinate place on the skull, then perhaps this place on the skull will indicate by its shape that mode of spirit and its particularity.</p>', 'none');

var tablet_text_with_tallglyph_1 = new tablet_type('<p>Spirit is the self of the actual consciousness which spirit confronts, or rather which confronts itself as an objective actual world, a world which has likewise lost all its significance as something alien for the self, just as the self has lost any sense of being a dependent or independent being-for-itself separated from that world.</p>', 'tall');
var tablet_text_with_tallglyph_2 = new tablet_type('<p>The being of what was meant, along with the individuality and the universality opposed to that individuality in perception, as well as the empty inner of the understanding, no longer exist as the essence. Rather, they exist merely as moments of self-consciousness.</p>', 'tall');

var tablet_text_with_wideglyph_1 = new tablet_type('<p>This speech is the madness of the musician “who piled up and mixed together some thirty airs, Italian, French, tragic, comic, of all sorts of character; now, with a deep bass, he descended into the depths of hell, then, contracting his throat, with a falsetto he tore apart the vaults of the skies, alternately raging and then being placated, imperious and then derisive.”</p>', 'wide');
var tablet_text_with_wideglyph_2 = new tablet_type('<p>The unity is estranged because it is absolutely negative unity, that is, infinite unity, and because the unity is durable existence, the distinction also has self-sufficiency only in the unity. This self-sufficiency of the shape appears as something determinate, as for an other, for it is something estranged. The sublation of the estrangement likewise happens by way of an other.</p>', 'wide');

var tall_glyph_1 = //SCISSOR TALL
		  '<div class="glyph glyph-tall">' +
		    '<svg class="glyph-svg-original" width="60" height="120">' +
		      '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="points" values="32,100 22,60 12,50 12,20 28,20 28,46 35,60; 45,97 24,62 11,56 2,27 17,22 24,47 36,58; 32,100 22,60 12,50 12,20 28,20 28,46 35,60;" dur="1s" repeatCount="indefinite">' +
			  '</polygon>' +
			  '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="points" values="32,100 22,60 32,30 48,30 48,45 36,52; 13,97 22,56 45,35 58,41 51,55 38,56; 32,100 22,60 32,30 48,30 48,45 36,52;" dur="1s" repeatCount="indefinite">' +
			  '</polygon>' +
		    '</svg>' +
			'<svg class="glyph-svg-small" width="50" height="100">' +
		      '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="points" values="" dur="1s" repeatCount="indefinite">' +
			  '</polygon>' +
		    '</svg>' +
		  '</div>';

var tall_glyph_2 = //TEMP DIAMOND
		  '<div class="glyph glyph-tall">' +
		    '<svg class="glyph-svg-original" width="60" height="120">' +
		      '<polygon points="30,5 55,60 30,115 5,60" fill="none" stroke="#AA3090" stroke-width="1"/>' +
		    '</svg>' +
			'<svg class="glyph-svg-small" width="50" height="100">' +
		      '<polygon points="25,5 45,50 25,95 5,50" fill="none" stroke="#AA3090" stroke-width="1"/>' +
		    '</svg>' +
		  '</div>';

var wide_glyph_1 = //SCISSOR WIDE
		    '<div class="glyph glyph-wide">' +	  
			  '<svg class="glyph-svg-original" width="100" height="50">' +
			    '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="M75,20 L45,20 L40,25 L25,25 L25,35 L45,35 L50,25 L75,20; M73,12 L43,20 L40,26 L26,30 L30,40 L48,35 L50,22 L73,12; M75,20 L45,20 L40,25 L25,25 L25,35 L45,35 L50,25 L75,20;" dur="1s" repeatCount="indefinite">' +
                '</path>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="M75,20 L45,20 L35,10 L25,20 L45,30 L75,20; M71,40 L49,21 L47,7 L33,9 L42,30 L71,40; M75,20 L45,20 L35,10 L25,20 L45,30 L75,20;" dur="1s" repeatCount="indefinite">' +
                '</path>' +
			  '</svg>' +
			  '<svg class="glyph-svg-small" width="60" height="50">' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="M55,20 L25,20 L20,25 L5,25 L5,35 L25,35 L30,25 L55,20; M53,12 L23,20 L20,26 L6,30 L10,40 L28,35 L30,22 L53,12; M55,20 L25,20 L20,25 L5,25 L5,35 L25,35 L30,25 L55,20;" dur="1s" repeatCount="indefinite">' +
                '</path>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="M55,20 L25,20 L15,10 L5,20 L25,30 L55,20; M51,40 L29,21 L27,7 L13,9 L22,30 L51,40; M55,20 L25,20 L15,10 L5,20 L25,30 L55,20;" dur="1s" repeatCount="indefinite">' +
                '</path>' +
			  '</svg>' +
			'</div>';

var wide_glyph_2 = //EMPTY
		    '<div class="glyph glyph-wide">' +	  
			  '<svg class="glyph-svg-original" width="100" height="50">' +
			    '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="" dur="1s" repeatCount="indefinite">' +
                '</path>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="" dur="1s" repeatCount="indefinite">' +
                '</path>' +
			  '</svg>' +
			  '<svg class="glyph-svg-small" width="60" height="50">' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="" dur="1s" repeatCount="indefinite">' +
                '</path>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="" dur="1s" repeatCount="indefinite">' +
                '</path>' +
			  '</svg>' +
			'</div>';

var tablet_texts = [tablet_text_standalone_1, tablet_text_standalone_2, tablet_text_with_tallglyph_1, tablet_text_with_tallglyph_2, tablet_text_with_wideglyph_1, tablet_text_with_wideglyph_2];
var tall_glyphs = [tall_glyph_1, tall_glyph_2];
var wide_glyphs = [wide_glyph_1, wide_glyph_2];

function getRandomInt(max) {
  return Math.floor(Math.random() * max); //.floor is good for arrays since they start at 0!
}

function populateTablets() {
	console.log("THIS WORKS!!!!!!!!!!!!!");
	for(i = 0; i < tablets.length; i++) {
		let type = tablet_texts[getRandomInt(tablet_texts.length)];
		let glyph = '';
		
		if (type.tag == 'tall') {
			glyph = tall_glyphs[getRandomInt(tall_glyphs.length)];
		}
		else if (type.tag == 'wide') {
			glyph = wide_glyphs[getRandomInt(wide_glyphs.length)];
		}
		
		tablets[i].innerHTML = type.text + glyph;
	}
}
