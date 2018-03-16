var numbers = document.getElementsByClassName('numbers');
var input = document.getElementById('entries');
var operations = document.getElementsByClassName('operations');
var clearBtn = document.getElementById('clear');
var ac = 0; //Аккумулятор
var op = 0; //Код операции
var firstDigit = true; //Флаг

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function(e){
		if (Number(e.target.innerText) > 0) {
			if (firstDigit) {
				input.value = e.target.innerText;
				// Или this.innerText;
				firstDigit = false;
			}else{
				input.value += this.innerText;
			}
		}
		if (Number(e.target.innerText) === 0) {
			console.log('Zero');
			if (firstDigit) input.value = e.target.innerText;
			if (Number(input.value) != 0) input.value += e.target.innerText;
		}
	})
}

//Операторы "+, -, *, / "
for (var i = 0; i < operations.length; i++) {
	operations[i].addEventListener('click', function(e){
		n = Number(input.value);
		if (ac != 0) {
			switch (op) {
				case '+': {
					ac += n; break;
				};
				case '-': {
					ac -= n; break;
				}; 
				case '*': {
					ac *= n; break;
				};
				case '/': {
					ac /= n; break;
				};
				case '=': {
					ac = n; break;
				};
			}
			input.value = ac;			
		}else{
			ac = n;
		}
		op = e.target.innerText;
		firstDigit = true;
	})
}

//Кнопка Clear
clearBtn.addEventListener('click', function(){
	ac = 0;
	op = 0;
	input.value = 'Введите число...';
	firstDigit = true;
})