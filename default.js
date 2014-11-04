function hideScroll() {
	document.body.style.overflow = "Hidden";
	document.getElementById("scrollnorth").style.display = "inline";
	document.getElementById("scrollsouth").style.display = "inline";
	document.getElementById("scrolleast").style.display = "inline";
	document.getElementById("scrollwest").style.display = "inline";
	}
	
var x = 0; /* Definerer posisjon i øst/vest retning (x-aksen) */
var y = 0; /* Definerer posisjon i nord/sør retning (y-aksen) */

var offsetX = window.width - bredde på kart
var offsetY = window.height - høyde på kart

function movenorth(multiplier) {
  if (x >= 0 || x <= offsetX ) {
		x = (multiplier * 1);
  }
  document.getElementById("map").style.top = parseFloat(document.getElementById("map").style.top) + x + "em";
} 
