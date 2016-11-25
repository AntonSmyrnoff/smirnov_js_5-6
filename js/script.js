var i = 0;
var timerField = 0; // таймер не запущен
var timerId;

function timer() {
	if (timerField == 0) {
		
		timerField = 1; // таймер запущен
		timerId = setInterval(function() {
			
			i++
			
			var ms = i%100;	//запуск милисекунд
			if (ms < 10) {
			milisec.innerHTML = "0" + ms;
			} else {
				milisec.innerHTML = ms;
				};

			var s = parseInt(i/100)%60;	//запуск секунд
			if ( s < 10) {
			sec.innerHTML = "0" + s;
			} else {
				sec.innerHTML = s;
				}; 

			var m = parseInt(i/6000)%60; //запуск минут
			if ( m < 10) {
			min.innerHTML = "0" + m;
			} else {
				min.innerHTML = m
				}

		}, 10);
		
		start_button.addEventListener( 'click', pause );
		start_button.innerHTML = 'PAUSE ' + timerField;
		start_button.style.backgroundColor = 'blue';
	} 
		
};

function pause() {
	
	clearInterval(timerId);
	timerField = 0; //останавливаем таймер
	start_button.innerHTML = 'CONT.. ' + timerField;
	
};


start_button.addEventListener( 'click', timer); // запуск таймера по клику












