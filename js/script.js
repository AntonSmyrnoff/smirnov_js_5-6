var i = 0;
var timerInd = 0; // Индикатор таймера в режиме "ТАЙМЕР НЕ ЗАПУЩЕН"
var timerId;

function start() {
	if (timerInd == 0)
		timer() // запуск таймера по клику
	else 
		pause() // При  клике таймер останавливается.
}

function timer() {
	
		start_button.innerHTML = 'PAUSE'; //Кнопка изменяется на "ПАУЗА"
		start_button.style.backgroundColor = 'blue';
		timerInd = 1; // Индикатор таймера переводится в режим "ТАЙМЕР ЗАПУЩЕН"
		
		timerId = setInterval(function() { // запускаем таймер (функция с интервалом исполнения 10мс)
			
			i++
			
			var ms = i%100;	//запуск милисекунд, кратно 10. (i=0, 10 мс прошло - i=1, еще 10мс прошло - i=2 и т.д.)
			if (ms < 10) {
			milisec.innerHTML = "0" + ms;
			} else {
				milisec.innerHTML = ms;
				};

			var s = parseInt(i/100)%60;	//запуск секунд. Пока не пройдет 100*10 мс, секунда не прибавится (10 мс - интервал исполнения функции)
			if ( s < 10) {
			sec.innerHTML = "0" + s;
			} else {
				sec.innerHTML = s;
				}; 

			var m = parseInt(i/6000)%60; //запуск минут. Пока не пройдет 60*100*10 мс, минута не прибавится (10 мс - интервал исполнения функции)
			if ( m < 10) {
			min.innerHTML = "0" + m;
			} else {
				min.innerHTML = m
				}

		}, 10);

};

function pause() { // При  клике таймер останавливается. Выполняется следующее:
	clearInterval(timerId); // очистка интервала исполнения, функция останавливается
	start_button.innerHTML = 'CONT..'; // кнопка менятся на "ПРОДОЛЖИТЬ"
	timerInd = 0; //Индикатор таймера переводится в режим "ТАЙМЕР НЕ ЗАПУЩЕН"

};

start_button.addEventListener( 'click', start )















