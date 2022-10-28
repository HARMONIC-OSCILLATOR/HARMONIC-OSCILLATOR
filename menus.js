//HARMONIC OSCILLATOR MENU HTML & SVG STORAGE SCRIPT
//MNO

var left_nav_codeblock =
			  '<svg class="nav-icon-standard" width="30" height="30">' +
                '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="points" values="15,5 25,25 5,25; 5,25 15,5 25,25" dur="0.5s" repeatCount="indefinite"/>' +
                '</polygon>' +
              '</svg>' +
			  '<svg class="nav-icon-mobile" width="48" height="48">' +
                '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="points" values="24,8 40,40 8,40; 8,40 24,8 40,40" dur="1s" repeatCount="indefinite"/>' +
                '</polygon>' +
              '</svg>';

var right_nav_codeblock =
			  '<svg class="nav-icon-standard" width="30" height="30">' +
                '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="points" values="15,5 25,25 5,25; 20,10 0,10 10,30; 15,5 25,25 5,25;" dur="1s" repeatCount="indefinite"/>' +
                '</polygon>' +
              '</svg>' +
			  '<svg class="nav-icon-mobile" width="48" height="48">' +
                '<polygon points="" fill="none" stroke="#AA3090" stroke-width="1">' +
                '<animate attributeName="points" values="24,8 40,40 8,40; 32,16 0,16 16,48; 24,8 40,40 8,40;" dur="2s" repeatCount="indefinite"/>' +
                '</polygon>' +
              '</svg>';

var menu_nav_codeblock =
			  '<svg class="nav-icon-standard" width="30" height="30">' +
			    '<path d="M3,8 L25,8;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M3,8 L25,8;" dur="1s" repeatCount="1"/>' +
				'</path>' +
				'<path d="M3,15 L25,15;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M3,15 L25,15;" dur="0.75s" repeatCount="1"/>' +
				'</path>' +
				'<path d="M3,22 L25,22;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M3,22 L25,22;" dur="0.5s" repeatCount="1"/>' +
				'</path>' +
			  '</svg>' +
			  '<svg class="nav-icon-mobile" width="40" height="40">' +
			    '<path d="M6,10 L32,10;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M6,10 L32,10;"" dur="0.75s" repeatCount="1"/>' +
				'</path>' +
				'<path d="M6,20 L32,20;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M6,20 L32,20;" dur="0.5s" repeatCount="1"/>' +
				'</path>' +
				'<path d="M6,30 L32,30;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M6,30 L32,30;" dur="0.25s" repeatCount="1"/>' +
				'</path>' +
			  '</svg>';

var lang_nav_codeblock =
			  /*US FLAG...*/
			  /*
			  '<svg class="nav-icon-standard" width="30" height="30">' +
				'<polygon points="0,0 0,14 14,14 14,0 0,0" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="M14,2 29,2;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="M14,6 29,6;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="M14,10 29,10;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="M14,14 29,14;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="M0,18 29,18;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="M0,22 29,22;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<path d="M0,26 29,26;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<circle cx="7" cy="7" r="4" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '</svg>' +
			  '<svg class="nav-icon-mobile" width="40" height="40">' +
				'<polygon points="0,19 19,5 38,19 19,33 0,19" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<circle cx="19" cy="19" r="7" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '</svg>';
			  */
			  /*BRAZIL FLAG!*/
			  '<svg class="nav-icon-standard" width="30" height="30">' +
				'<polygon points="0,14 14,3 28,14 14,25 0,14;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<circle cx="14" cy="14" r="6" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '</svg>' +
			  '<svg class="nav-icon-mobile" width="40" height="40">' +
				'<polygon points="0,19 19,5 38,19 19,33 0,19" fill="none" stroke="#AA3090" stroke-width="1"/>' +
				'<circle cx="19" cy="19" r="7" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '</svg>';

var reroll_nav_codeblock =
			  '<svg class="nav-icon-standard" width="30" height="30">' +
			    '<path d="" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			  '</svg>';

var default_osc_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="100" height="50">' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M0,0 L50,50; M0,0 L100,50; M0,0 L50,50;" dur="2s" repeatCount="indefinite"/>' +
		            '</path>' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M0,50 L100,0; M0,50 L50,0; M0,50 L100,0;" dur="2s" repeatCount="indefinite"/>' +
		            '</path>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var default_osc_wide_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="300" height="50">' +
					'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                    '<animate attributeName="d" values="M300,0 L300,0; M0,0 L300,50; M0,50 L0,50;" dur="2s" repeatCount="indefinite"/>' +
                    '</polygon>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var rings_osc_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg class="rings" width="100" height="50">' +
		            '<circle cx="50" cy="25" r="400" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="400; 0; 300;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="50" cy="25" r="300" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="300; 0; 200;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="25" r="200" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="200; 0; 100;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="25" r="110" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="110; 0; 90;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="50" cy="25" r="100" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="100; 0; 80;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="25" r="90" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="90; 0; 70;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var rings_osc_wide_codeblock =
				'<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg class="rings" width="300" height="50">' +
		            '<circle cx="150" cy="25" r="500" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="500; 0; 400;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="150" cy="25" r="400" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="400; 0; 300;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="150" cy="25" r="300" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="300; 0; 200;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="150" cy="25" r="30" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="30; 0; 30;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="150" cy="25" r="20" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="20; 0; 20;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="150" cy="25" r="10" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="10; 0; 10;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var racer_osc_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="100" height="50">' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var racer_osc_wide_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="300" height="50">' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var birds_osc_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="100" height="50">' +
				    '<!--CLOUDS ON LEFT-->' +
					'<circle cx="0" cy="25" r="20" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="-20; 0; 20; 40;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-30; 0; -100; -100;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 20; 100; 50;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="0" cy="25" r="15" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="-15; 30; 40; 20;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-20; 0; -10; -40;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 10; 20; 0;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<!--CLOUDS ON RIGHT-->' +
					'<circle cx="110" cy="50" r="20" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="160; 110; 70; 60;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="70; 50; 40; 30;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 20; 10; 0;" dur="10s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="80" cy="50" r="5" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="110; 80; 60; 65;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="60; 55; 35; 30;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="10; 20; 10; 0;" dur="10s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<!--BIRDS-->' +
					'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M50,25 L55,30 L60,25 L55,28 L50,25; M50,28 L55,33 L60,28 L55,31 L50,28; M50,30 L55,28 L60,30 L55,26 L50,30; M50,28 L55,27 L60,28 L55,24 L50,28; M50,25 L55,30 L60,25 L55,28 L50,25;" dur="1s" repeatCount="indefinite"/>' +
		            '</path>' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M15,10 L30,20 L45,10 L30,15 L15,10; M15,15 L30,25 L45,15 L30,20 L15,15; M15,20 L30,20 L45,20 L30,15 L15,20; M15,15 L30,16 L45,15 L30,10 L15,15; M15,10 L30,20 L45,10 L30,15 L15,10;" dur="1.5s" repeatCount="indefinite"/>' +
		            '</path>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var birds_osc_wide_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="300" height="50">' +
				    '<!--BIRDS-->' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M140,10 L150,20 L160,10 L150,15 L140,10; M140,15 L150,25 L160,15 L150,20 L140,15; M140,25 L150,23 L160,25 L150,20 L140,25; M140,20 L150,18 L160,20 L150,15 L140,20; M140,10 L150,20 L160,10 L150,15 L140,10;" dur="1s" repeatCount="indefinite"/>' +
		            '</path>' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M115,20 L125,30 L135,20 L125,25 L115,20; M115,25 L125,35 L135,25 L125,30 L115,25; M115,35 L125,33 L135,35 L125,30 L115,35; M115,30 L125,28 L135,30 L125,25 L115,30; M115,20 L125,30 L135,20 L125,25 L115,20;" dur="1.5s" repeatCount="indefinite"/>' +
		            '</path>' +
					'<!--CLOUDS ON LEFT-->' +
					'<circle cx="100" cy="50" r="10" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="100; 0; 100;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 40; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="10; 20; 10;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="80" cy="50" r="15" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="80; -20; 80;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 30; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="15; 30; 15;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="50" r="30" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="50; -50; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 90; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="30; 50; 30;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="0" cy="50" r="20" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="0; -20; 0;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 0; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 30; 20;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="40" cy="-20" r="40" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="40; 0; 40;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-30; -60; -30;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="40; 50; 40;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<!--CLOUDS ON RIGHT-->' +
					'<circle cx="220" cy="50" r="10" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="220; 340; 220" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="10; 50; 10;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="300" cy="-10" r="40" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="300; 250; 300;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-10; -70; -10;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="40; 50; 40;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="270" cy="50" r="30" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="260; 360; 260;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="60; 10; 60;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="30; 40; 30;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

document.getElementById('menu').innerHTML = menu_nav_codeblock;
document.getElementById('eye').innerHTML = lang_nav_codeblock;

document.getElementById('default-osc').innerHTML = default_osc_codeblock;
document.getElementById('rings-osc').innerHTML = rings_osc_codeblock;
document.getElementById('racer-osc').innerHTML = racer_osc_codeblock;
document.getElementById('birds-osc').innerHTML = birds_osc_codeblock;

document.getElementById('default-osc-wide').innerHTML = default_osc_wide_codeblock;
document.getElementById('rings-osc-wide').innerHTML = rings_osc_wide_codeblock;
document.getElementById('racer-osc-wide').innerHTML = racer_osc_wide_codeblock;
document.getElementById('birds-osc-wide').innerHTML = birds_osc_wide_codeblock;

document.getElementById('left').innerHTML = left_nav_codeblock;
document.getElementById('right').innerHTML = right_nav_codeblock;

//window.addEventListener("load", navStartup);

//function navStartup() {
//console.log(document.location);
//}