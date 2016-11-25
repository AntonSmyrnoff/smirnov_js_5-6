var i = 0;
var timerInd = 0; // Индикатор таймера в режиме "ТАЙМЕР НЕ ЗАПУЩЕН"
var timerId;
var ms, s, m, h;

start_button.addEventListener( 'click', start );
clear_button.addEventListener( 'click', stopTimer );

function start() {
	if (timerInd == 0)
		timer() // запуск таймера по клику
	else 
		pause() // остановка таймера по клику
}

function timer() {
	
		start_button.innerHTML = 'PAUSE';
		start_button.style.backgroundColor = 'blue';
		timerInd = 1; // Индикатор таймера в режиме "ТАЙМЕР ЗАПУЩЕН"
		
		timerId = setInterval(function() { // запускаем таймер (функция с интервалом исполнения 10мс)
			
			i++
			
			ms = i%100;	
			if (ms < 10) {
			milisec.innerHTML = "0" + ms;
			} else {
				milisec.innerHTML = ms;
				};

			s = parseInt(i/100)%60;
			if ( s < 10) {
			sec.innerHTML = "0" + s;
			} else {
				sec.innerHTML = s;
				}; 

			m = parseInt(i/6000)%60; 
			if ( m < 10) {
			min.innerHTML = "0" + m;
			} else {
				min.innerHTML = m
				};

			h = parseInt(i/360000)%24; 
			if ( h < 10) {
			hours.innerHTML = "0" + h;
			} else {
				hours.innerHTML = h
				};				

		}, 10);
};

function pause() {
	clearInterval(timerId); 
	start_button.innerHTML = 'CONTINUE'; 
	start_button.style.backgroundColor = 'green';
	timerInd = 0; //Индикатор таймера переводится в режим "ТАЙМЕР НЕ ЗАПУЩЕН"
};

function stopTimer() {
	clearInterval(timerId);
	timerInd = 0;
	start_button.innerHTML = 'START'; 
	start_button.style.backgroundColor = 'green';
	i = 0; // обнуляем счетчик
	hours.innerHTML = '00';
	min.innerHTML = '00';
	sec.innerHTML = '00';
	milisec.innerHTML = '00';
}





















