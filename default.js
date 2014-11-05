var x = 0; 
var y = 0; 

var offsetX = 2560 - window.width;
var offsetY = 2223 - window.height;

function movenorth(multiplier) {
  if ( y <= 0 && y <= !offsetY ) {
		y = (y + multiplier * -1);
  }
  document.getElementById("map").style.top = y + "px";
}

function movesouth(multiplier) {
  if ( y < 0 ) {
		y = (y + multiplier);
  }
  document.getElementById("map").style.top = y + "px";
}

function moveeast(multiplier) {
	if ( x <= 0 ) {
		x = (x + multiplier * -1);
	}
	document.getElementById("map").style.left = x + "px";
}

function movewest(multiplier) {
	if ( x < 0  ) {
		x = ( x + multiplier );
	}
	document.getElementById("map").style.left = x + "px";
} 


