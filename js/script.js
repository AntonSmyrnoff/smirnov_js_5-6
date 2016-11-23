		
var ms = 1;
var s = 1;
var m = 1;

function timer() {
	
	var timerMilisec = setInterval(function() {
		if (ms%100 < 10) {
		milisec.innerHTML = "0" + ms%100;
		} else {
			milisec.innerHTML = ms%100;
			}
		ms++;
	}, 10);

	var timerSec = setInterval(function() {
		if (s%60 < 10) {
		sec.innerHTML = "0" + s%60;
		} else {
			sec.innerHTML = s%60;
			} 
		s++;
	}, 1000);

	var timerMin = setInterval(function() {
		if (m%60 < 10) {
		min.innerHTML = "0" + m%60;
	} else {
		min.innerHTML = m%60;
	}
		m++;
	}, 60000);

	start_button.innerHTML = 'PAUSE';
	start_button.style.backgroundColor = 'blue';
	start_button.addEventListener( 'click', cont );
};

function cont() {
	clearInterval(timerMilisec);
	clearInterval(timerSec);
	clearInterval(timerMin);
}


start_button.addEventListener( 'click', timer );









