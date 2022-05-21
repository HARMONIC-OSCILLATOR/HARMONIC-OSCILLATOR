//HARMONIC OSCILLATOR COUNTERGLOW TABLET MANAGER
//MNO

var num_tablet_types = 0;

class tablet_type {
	constructor (text, tag, id) {
		this.text = text;
		this.tag = tag;
		if (id != null) {this.id = id;}
		else {this.id = num_tablet_types++;}
	}
}

var tablets = document.getElementsByClassName('tablet-of-truth');

/*ADDING NEW TABLETS?

FORMAT AS:
var naming_convention_x = new tablet_type('<p>text</p>','tag', null);

	'tag' is either: 'none', 'tall', or 'wide'
	'none' = glyphless text, 'tall' pairs a tall glyph, 'wide' pairs a wide (shorter) glyph!
	null is thanks to javascript not allowing two constuctors per class...

name the var according to your glyph choice and as the next appropriate number.
add the new var to the correlating array declared after these text and glyph declarations.*/

var tablet_text_standalone_1 = new tablet_type('<p>Furthermore, the object, which individuality has as its essence, has no content. It is what is called necessity, since necessity, fate, and the like, each amount to saying that we do not know how to say what it is doing or what its determinate laws and its positive content are supposed to be because it is the absolute pure concept itself intuited as being, the simple and empty but nonetheless inexorable and impassive relation whose work is merely the nothingness of individuality.</p>', 'none', null);
var tablet_text_standalone_2 = new tablet_type('<p>Furthermore, since the skull does not itself feel, it seems that perhaps a more determinate significance could be given to it. Through their proximity to the skull, certain determinate sensations would allow us to take cognizance of what the skull is supposed to mean, and if a conscious mode of spirit has its feeling in a determinate place on the skull, then perhaps this place on the skull will indicate by its shape that mode of spirit and its particularity.</p>', 'none', null);

var tablet_text_with_tallglyph_1 = new tablet_type('<p>Spirit is the self of the actual consciousness which spirit confronts, or rather which confronts itself as an objective actual world, a world which has likewise lost all its significance as something alien for the self, just as the self has lost any sense of being a dependent or independent being-for-itself separated from that world.</p>', 'tall', null);
var tablet_text_with_tallglyph_2 = new tablet_type('<p>The being of what was meant, along with the individuality and the universality opposed to that individuality in perception, as well as the empty inner of the understanding, no longer exist as the essence. Rather, they exist merely as moments of self-consciousness.</p>', 'tall', null);

var tablet_text_with_wideglyph_1 = new tablet_type('<p>This speech is the madness of the musician “who piled up and mixed together some thirty airs, Italian, French, tragic, comic, of all sorts of character; now, with a deep bass, he descended into the depths of hell, then, contracting his throat, with a falsetto he tore apart the vaults of the skies, alternately raging and then being placated, imperious and then derisive.”</p>', 'wide', null);
var tablet_text_with_wideglyph_2 = new tablet_type('<p>The unity is estranged because it is absolutely negative unity, that is, infinite unity, and because the unity is durable existence, the distinction also has self-sufficiency only in the unity. This self-sufficiency of the shape appears as something determinate, as for an other, for it is something estranged. The sublation of the estrangement likewise happens by way of an other.</p>', 'wide', null);

var tall_glyph_1 = //SCISSOR TALL
		  '<div class="glyph glyph-tall">' +
		    '<svg class="glyph-svg-original" width="60" height="120">' +
		      '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="points" values="32,100 22,60 12,50 12,20 28,20 28,46 35,60; 45,97 24,62 11,56 2,27 17,22 24,47 36,58; 32,100 22,60 12,50 12,20 28,20 28,46 35,60;" dur="1s" repeatCount="indefinite"/>' +
			  '</polygon>' +
			  '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="points" values="32,100 22,60 32,30 48,30 48,45 36,52; 13,97 22,56 45,35 58,41 51,55 38,56; 32,100 22,60 32,30 48,30 48,45 36,52;" dur="1s" repeatCount="indefinite"/>' +
			  '</polygon>' +
		    '</svg>' +
			'<svg class="glyph-svg-small" width="50" height="100">' +
		      '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="points" values="27,83 19,50 10,42 10,17 24,17 24,38 29,50; 38,81 20,52 9,46 2,23 14,19 20,39 30,48; 27,83 19,50 10,42 10,17 24,17 24,38 29,50;" dur="1s" repeatCount="indefinite"/>' +
			  '</polygon>' +
			  '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="points" values="27,83 19,50 27,25 39,25 39,38 30,44; 11,81 19,48 37,29 48,34 43,46 31,47; 27,83 19,50 27,25 39,25 39,38 30,44;" dur="1s" repeatCount="indefinite"/>' +
			  '</polygon>' +
		    '</svg>' +
		  '</div>';

var tall_glyph_2 = //SCREW TALL
		  '<div class="glyph glyph-tall">' +
		    '<svg class="glyph-svg-original" width="60" height="120">' +
			  '<ellipse cx="30" cy="80" rx="1" ry="0.625" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="80; 70;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="1; 1.875;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="0.625; 1.25;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
			  '<ellipse cx="30" cy="70" rx="1.875" ry="1.25" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="70; 60;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="1.875; 3.75;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="1.25; 2.5;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
			  '<ellipse cx="30" cy="60" rx="3.75" ry="2.5" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="60; 50;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="3.75; 7.5;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="2.5; 5;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
			  '<ellipse cx="30" cy="50" rx="7.5" ry="5" fill="#100510" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="50; 40;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="7.5; 15;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="5; 10;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
		      '<ellipse cx="30" cy="40" rx="15" ry="10" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="d" values="M30,35 L30,45 M22,40 L38,40; M22,40 L38,40 M30,45 L30,35; M30,45 L30,35 M38,40 L22,40;" dur="1s" repeatCount="indefinite"/>' +
			  '</path>' +
		    '</svg>' +
			'<svg class="glyph-svg-small" width="50" height="100">' +
			  '<ellipse cx="25" cy="80" rx="1" ry="0.625" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="80; 70;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="1; 1.875;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="0.625; 1.25;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
			  '<ellipse cx="25" cy="70" rx="1.875" ry="1.25" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="70; 60;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="1.875; 3.75;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="1.25; 2.5;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
			  '<ellipse cx="25" cy="60" rx="3.75" ry="2.5" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="60; 50;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="3.75; 7.5;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="2.5; 5;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
			  '<ellipse cx="25" cy="50" rx="7.5" ry="5" fill="#100510" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="cy" values="50; 40;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="rx" values="7.5; 15;" dur="0.5s" repeatCount="indefinite"/>' +
			  '<animate attributeName="ry" values="5; 10;" dur="0.5s" repeatCount="indefinite"/>' +
			  '</ellipse>' +
		      '<ellipse cx="25" cy="40" rx="15" ry="10" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="d" values="M25,35 L25,45 M17,40 L33,40; M17,40 L33,40 M25,45 L25,35; M25,45 L25,35 M33,40 L17,40;" dur="1s" repeatCount="indefinite"/>' +
			  '</path>' +
		    '</svg>' +
		  '</div>';

var tall_glyph_3 = //TEMP RIBBON TALL
		  '<div class="glyph glyph-tall">' +
		    '<svg class="glyph-svg-original" width="60" height="120">' +
			  '<path d="M24,45 L14,75 L24,77 L30,45" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M36,45 L46,75 L36,77 L30,45" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M30,45 C0,5 0,85 30,45" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M30,45 C60,5 60,85 30,45" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<ellipse cx="30" cy="45" rx="5" ry="4" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			'</svg>' +
			'<svg class="glyph-svg-small" width="50" height="100">' +
			  '<path d="M19,35 L9,65 L19,67 L25,35" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M31,35 L41,65 L31,67 L25,35" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M25,35 C-5,-5 -5,75 25,35" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M25,35 C55,-5 55,75 25,35" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<ellipse cx="25" cy="35" rx="5" ry="4" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
		    '</svg>' +
		  '</div>';

var tall_glyph_4 = //TEMP DIAMOND TALL
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
                '<animate attributeName="d" values="M75,20 L45,20 L40,25 L25,25 L25,35 L45,35 L50,25 L75,20; M73,12 L43,20 L40,26 L26,30 L30,40 L48,35 L50,22 L73,12; M75,20 L45,20 L40,25 L25,25 L25,35 L45,35 L50,25 L75,20;" dur="1s" repeatCount="indefinite"/>' +
                '</path>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="M75,20 L45,20 L35,10 L25,20 L45,30 L75,20; M71,40 L49,21 L47,7 L33,9 L42,30 L71,40; M75,20 L45,20 L35,10 L25,20 L45,30 L75,20;" dur="1s" repeatCount="indefinite"/>' +
                '</path>' +
			  '</svg>' +
			  '<svg class="glyph-svg-small" width="60" height="50">' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="M55,20 L25,20 L20,25 L5,25 L5,35 L25,35 L30,25 L55,20; M53,12 L23,20 L20,26 L6,30 L10,40 L28,35 L30,22 L53,12; M55,20 L25,20 L20,25 L5,25 L5,35 L25,35 L30,25 L55,20;" dur="1s" repeatCount="indefinite"/>' +
                '</path>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="d" values="M55,20 L25,20 L15,10 L5,20 L25,30 L55,20; M51,40 L29,21 L27,7 L13,9 L22,30 L51,40; M55,20 L25,20 L15,10 L5,20 L25,30 L55,20;" dur="1s" repeatCount="indefinite"/>' +
                '</path>' +
			  '</svg>' +
			'</div>';

var wide_glyph_2 = //SCREW WIDE
		    '<div class="glyph glyph-wide">' +	  
			  '<svg class="glyph-svg-original" width="100" height="50">' +
			    '<ellipse cx="70" cy="25" rx="0.625" ry="1" fill="none" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="60; 70;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="1.25; 0.625;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="1.875; 1;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
				'<ellipse cx="60" cy="25" rx="1.25" ry="1.875" fill="none" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="50; 60;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="2.5; 1.25;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="3.75; 1.875;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
				'<ellipse cx="50" cy="25" rx="2.5" ry="3.75" fill="none" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="40; 50;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="5; 2.5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="7.5; 3.75;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
				'<ellipse cx="40" cy="25" rx="5" ry="7.5" fill="none" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="30; 40;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="10; 5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="15; 7.5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
			    '<ellipse cx="30" cy="25" rx="10" ry="15" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M25,25 L35,25 M30,18 L30,32; M30,18 L30,32 M35,25 L25,25; M35,25 L25,25 M30,32 L30,18;" dur="1s" repeatCount="indefinite"/>' +
				'</path>' +
			  '</svg>' +
			  '<svg class="glyph-svg-small" width="60" height="50">' +
			    '<ellipse cx="60" cy="25" rx="0.625" ry="1" fill="none" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="52.5; 60;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="1.25; 0.625;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="1.875; 1;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
				'<ellipse cx="52.5" cy="25" rx="1.25" ry="1.875" fill="none" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="45; 52.5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="2.5; 1.25;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="3.75; 1.875;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
				'<ellipse cx="45" cy="25" rx="2.5" ry="3.75" fill="none" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="37.5; 45;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="5; 2.5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="7.5; 3.75;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
				'<ellipse cx="37.5" cy="25" rx="5" ry="7.5" fill="#100510" stroke="#AA3090" stroke-width="1">' +
			    '<animate attributeName="cx" values="30; 37.5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="rx" values="10; 5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '<animate attributeName="ry" values="15; 7.5;" dur="0.5s" repeatCount="indefinite"/>' +
			    '</ellipse>' +
				'<ellipse cx="30" cy="25" rx="10" ry="15" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M25,25 L35,25 M30,18 L30,32; M30,18 L30,32 M35,25 L25,25; M35,25 L25,25 M30,32 L30,18;" dur="1s" repeatCount="indefinite"/>' +
				'</path>' +
			  '</svg>' +
			'</div>';

var wide_glyph_3 = //TEMP RIBBON WIDE
		  '<div class="glyph glyph-wide">' +
		    '<svg class="glyph-svg-original" width="100" height="50">' +
			  '<path d="M42,20 L34,40 L42,42 L50,20" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M58,20 L66,40 L58,42 L50,20" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M50,20 C20,-20 20,60 50,20" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M50,20 C80,-20 80,60 50,20" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<ellipse cx="50" cy="20" rx="5" ry="4" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			'</svg>' +
			'<svg class="glyph-svg-small" width="60" height="50">' +
			  '<path d="M22,20 L14,40 L22,42 L30,20" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M38,20 L46,40 L38,42 L30,20" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M30,20 C0,-20 0,60 30,20" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<path d="M30,20 C60,-20 60,60 30,20" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
			  '<ellipse cx="30" cy="20" rx="5" ry="4" fill="#100510" stroke="#AA3090" stroke-width="1"/>' +
		    '</svg>' +
		  '</div>';

var wide_glyph_4 = //TEMP DIAMOND WIDE
		    '<div class="glyph glyph-wide">' +	  
			  '<svg class="glyph-svg-original" width="100" height="50">' +
			    '<polygon points="15,25 50,5 85,25 50,45" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '</svg>' +
			  '<svg class="glyph-svg-small" width="60" height="50">' +
				'<polygon points="4,25 30,9 56,25 30,41" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '</svg>' +
			'</div>';

var tablet_texts = [tablet_text_standalone_1, tablet_text_standalone_2, tablet_text_with_tallglyph_1, tablet_text_with_tallglyph_2, tablet_text_with_wideglyph_1, tablet_text_with_wideglyph_2];
var tall_glyphs = [tall_glyph_1, tall_glyph_2, tall_glyph_3, tall_glyph_4];
var wide_glyphs = [wide_glyph_1, wide_glyph_2, wide_glyph_3, wide_glyph_4];


//TABLET POPULATION SCRIPT

function getRandomInt(max) {				//the script uses this random # gen to choose tablet texts, glyphs from their arrays.
  return Math.floor(Math.random() * max);	//.floor is good for arrays since they start at 0!
}

function populateTablets() {
	var typeArray = new Array();									//typeArray is to track and compare each created tablet.
	for (i = 0; i < tablets.length; i++) {							//looking through each tablet...
		var validation = false;										//validation becomes true when current tablet isn't a repeat.
		var type = null;											//will be an instance of tablet_type to set current tablet.
		while (!validation) {										//rolling types and checking for repeats for each tablet...
			type = tablet_texts[getRandomInt(tablet_texts.length)]	//rolls a new tablet type.
			validation = true;										//tentatively accepts the new tablet as valid.
			for (j = 0; j < typeArray.length; j++) {				//comparing it to our previously populated tablets...
				if (type.id == typeArray[j].id) {					//checks for repeats.
					validation = false;								//if there's repeats, the while loop will start over.
					break;											//doesn't have to check the rest if it's already invalid.
				}
			}
		}
		typeArray.push(new tablet_type(type.text, type.tag, type.id));	//adds newly rolled tablet to typeArray.
		tablets[i].innerHTML = type.text;								//sets the tablet text on the site!
		setGlyph(i, type);												//finally, each tablet rolls a glyph.
	}
}

function setGlyph(i, type) {	//check each tablet's tag for glyph type, roll for one from glyph array, append innerHTML.
	var glyph = '';
	if (type.tag == 'tall') {glyph = tall_glyphs[getRandomInt(tall_glyphs.length)];}
	else if (type.tag == 'wide') {glyph = wide_glyphs[getRandomInt(wide_glyphs.length)];}
	tablets[i].innerHTML += glyph;
}