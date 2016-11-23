var i = 0;
var timerField = 0; // таймер не запущен
var timerId;
var startButton = document.getElementById('start_button');

function timer() {
	if (timerField==0) {
		timerId = setInterval(function() {
			
			i++
			
			var ms = i%100;	
			if (ms < 10) {
			milisec.innerHTML = "0" + ms;
			} else {
				milisec.innerHTML = ms;
				};

			var s = parseInt(i/100)%60;	
			if ( s < 10) {
			sec.innerHTML = "0" + s;
			} else {
				sec.innerHTML = s;
				}; 

			var m = parseInt(i/6000)%60;
			if ( m < 10) {
			min.innerHTML = "0" + m;
			} else {
				min.innerHTML = m
				}

		}, 10);

		startButton.innerHTML = 'PAUSE';
		startButton.style.backgroundColor = 'blue';
		startButton.id = 'pause_button';
		timerField = 1; //индикатор запущенного таймера

		pause_button.addEventListener( 'click', pause );

	};
};

function pause() {
	clearInterval(timerId);
	//pause_button.id = 'start_button';
	pause_button.innerHTML = 'CONT..';
	pause_button.style.backgroundColor = 'red';
	pause_button.id = 'start_button';
	timerField = 0;
};

/*function cont() {
	cont_button.innerHTML = 'PAUSE';
	cont_button.style.backgroundColor = 'blue';
	cont_button.id = 'pause_button';
	timerField = 0;

}*/

startButton.addEventListener( 'click', timer); // запуск таймера по клику












