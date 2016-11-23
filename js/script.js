var ms = 1;

setInterval(function() {
	if (ms%100 < 10) {
	milisec.innerHTML = "0" + ms%100;
	} else {
		milisec.innerHTML = ms%100;
		}
	ms++;
}, 10);



var s = 1;

setInterval(function() {
	if (s%60 < 10) {
	sec.innerHTML = "0" + s%60;
	} else {
		sec.innerHTML = s%60;
		} 
	s++;
}, 1000);



var m = 1;

setInterval(function() {
	if (m%60 < 10) {
	min.innerHTML = "0" + m%60;
} else {
	min.innerHTML = m%60;
}
	m++;
}, 60000);





