let cells = [];
let x_cells = [];
let o_cells = [];

function writeInCell(cell_id) {
	if (document.getElementById(String(cell_id)).innerHTML != "") {
		alert("Клетка занята!");
		return;
	}
	else {
		document.getElementById(String(cell_id)).innerHTML = "x";
		cells.push(cell_id);
		x_cells.push(cell_id);
		if (cells.length >= 3) {
			checkVictory("Игрок");
		};
		document.getElementById("playerChange").innerHTML = "Ход Компьютера";
		setTimeout(AI, 2000);
	};
}
function AI() {
	while (true) {
		newCell = getRandomInRange(1,9);
		if (document.getElementById(String(newCell)).innerHTML == "") {
			document.getElementById(String(newCell)).innerHTML = "o";
			cells.push(newCell);
			o_cells.push(newCell);
			document.getElementById("playerChange").innerHTML = "Ход Игрока";
			if (cells.length >= 3) {
				checkVictory("Пробирочный Интеллект");
			};
			break;
		};
	};
}

function checkVictory(player) {
	if (player == "Игрок") {
		arr = x_cells;
	}
	else {
		arr = o_cells;
	}
	//Первая строка
	summ1 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 1) {
			summ1 += 1;
		}
		if (arr[i] == 2) {
			summ1 += 2;
		}
		if (arr[i] == 3) {
			summ1 += 3;
		}
	}
	//Вторая строка
	summ2 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 4) {
			summ2 += 4;
		}
		if (arr[i] == 5) {
			summ2 += 5;
		}
		if (arr[i] == 6) {
			summ2 += 6;
		}
	}
	//Треться строка
	summ3 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 7) {
			summ3 += 7;
		}
		if (arr[i] == 8) {
			summ3 += 8;
		}
		if (arr[i] == 9) {
			summ3 += 9;
		}
	}
	//Первый столбец
	summ4 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 1) {
			summ4 += 1;
		}
		if (arr[i] == 4) {
			summ4 += 4;
		}
		if (arr[i] == 7) {
			summ4 += 7;
		}
	}
	//Второй столбец
	summ5 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 2) {
			summ5 += 2;
		}
		if (arr[i] == 5) {
			summ5 += 5;
		}
		if (arr[i] == 8) {
			summ5 += 8;
		}
	}
	//Третий столбец
	summ6 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 3) {
			summ6 += 3;
		}
		if (arr[i] == 6) {
			summ6 += 6;
		}
		if (arr[i] == 9) {
			summ6 += 9;
		}
	}
	//Главная диагональ
	summ7 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 1) {
			summ7 += 1;
		}
		if (arr[i] == 5) {
			summ7 += 5;
		}
		if (arr[i] == 9) {
			summ7 += 9;
		}
	}
	//Вторая диагональ
	summ8 = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 3) {
			summ8 += 3;
		}
		if (arr[i] == 5) {
			summ8 += 5;
		}
		if (arr[i] == 7) {
			summ8 += 7;
		}
	}

	if (summ1 == 6 || summ2 == 15 || summ3 == 24 || summ4 == 12 || summ5 == 15 || summ6 == 18 || summ7 == 15 || summ8 == 15) {
		alert(player+" победил!");
		window.stop();
		window.location.reload();
	}
	else if (cells.length == 9) {
		alert("Ничья!");
		window.stop();
		window.location.reload()
	}
}

//Вспомогательные функции
function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clear() {
	console.log("Я работаю!");
	cells = [];
	x_cells = [];
	o_cells = [];

	for (var i = 0; i < 9; i++) {
		document.getElementById(String(i)).innerHTML = "";
	};
}