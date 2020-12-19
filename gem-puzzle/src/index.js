var time = document.getElementById("time");
var movesBlock = document.getElementById("moves");
var arr = [], box, ei, ej;
var min = 0;
var sec = 0;
var moves = 0;
var goalArr = [];
var checkbox = document.getElementById("checkbox");
var box = document.getElementById("id");
var startDradr = false;
var isStop = true;

function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function addZeroMin(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function swap(arr, i1, j1, i2, j2) {
	t = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = t;
}
window.onload = function () {
	box = document.getElementById("box");
	newGame();
	setInterval(showTime, 1000);
	document.getElementById("reset").onclick = newGame;
	document.getElementById("reset2").onclick = newGame;
	document.getElementById("save").onclick = save;
	document.getElementById("load").onclick = load;
}

function save() {
	localStorage.setItem("game", box.innerHTML);
	localStorage.setItem("arr", arr);
	localStorage.setItem("ei", ei);
	localStorage.setItem("ej", ej);
	localStorage.setItem("moves", moves);
	localStorage.setItem("min", min);
	localStorage.setItem("sec", sec);
}

function load() {

	if (localStorage.getItem("game") != null) {
		min = localStorage.getItem("min");
		sec = localStorage.getItem("sec");
		showTime();
		var movesBlock = document.getElementById("moves");
		moves = localStorage.getItem("moves");
		movesBlock.innerHTML = moves;
		ei = localStorage.getItem("ei");
		ej = localStorage.getItem("ej");
		box.innerHTML = localStorage.getItem("game");
		var larr = localStorage.getItem("arr").split(",");
		arr = [
			[larr[0], larr[1], larr[2], larr[3]],
			[larr[4], larr[5], larr[6], larr[7]],
			[larr[8], larr[9], larr[10], larr[11]],
			[larr[12], larr[13], larr[14], larr[15]],
		];
		var cells = [...document.getElementsByTagName("td")];
		for (let i = 0; i < cells.length; i++) {
			cells[i].onclick = cellClick;
		}


	}
	else {
		alert("Нет сохранённых игр!");
	}
}

function cellClick(event) {
	var event = event || window.event,
		el = event.srcElement || event.target,
		i = el.id.charAt(0),
		j = el.id.charAt(2);
	if ((i == ei && Math.abs(j - ej) == 1) || (j == ej && Math.abs(i - ei) == 1)) {
		var startPosition = offset(el);
		var end = false;
		el.style.top = startPosition.top;
		if (i > ei) {
			var pos = 0;
			var id = setInterval(frame, 1);
			function frame() {
				if (pos == 70) {
					end = true;
					clearInterval(id);
					pos = 0;
					el.style.position = "static";
					el.style.left = '0';
					el.style.top = "0";
					el.style.bottom = "0";
				} else {
					pos++;
					el.style.position = "absolute";
					el.style.left = 'auto';
					el.style.top = (Number(el.style.top.slice(0, -2)) - 1) + "px";
					el.style.bottom = "auto";
				}
			}
		}
		else if (i < ei) {
			var pos = 0;
			var id = setInterval(frame, 1);
			function frame() {
				if (pos == 50) {
					pos = 0;
					el.style.position = "static";
					el.style.left = '0';
					el.style.top = "0";
					el.style.bottom = "0";
					clearInterval(id);
				} else {
					pos++;
					el.style.position = "absolute";
					el.style.left = 'auto';
					el.style.top = (Number(el.style.top.slice(0, -2)) + 1) + "px";
					el.style.bottom = "auto";
				}
			}
		}
		else {
			el.style.left = startPosition.left;
			if (j > ej) {
				var pos = 0;
				var id = setInterval(frame, 1);
				function frame() {
					if (pos == 50) {
						pos = 0;
						el.style.position = "static";
						el.style.left = '0';
						el.style.top = "0";
						el.style.bottom = "0";
						clearInterval(id);
					} else {
						pos++;
						el.style.position = "absolute";
						el.style.top = "auto";
						el.style.left = (Number(el.style.left.slice(0, -2)) - 1) + "px";
						el.style.bottom = "auto";
					}
				}
			}
			if (j < ej) {
				var pos = 0;
				var id = setInterval(frame, 1);
				function frame() {
					if (pos == 50) {
						pos = 0;
						el.style.position = "static";
						el.style.left = '0';
						el.style.top = "0";
						el.style.bottom = "0";
						clearInterval(id);
					} else {
						pos++;
						el.style.position = "absolute";
						el.style.top = "auto";
						el.style.left = (Number(el.style.left.slice(0, -2)) + 1) + "px";
						el.style.bottom = "auto";
					}
				}
			}
		}
		setTimeout(function () {
			var audio = new Audio();
			if (!audio) return;
			audio.currentTime = 0;
			audio.src = "./assets/kubik.mp3";
			audio.play();
			var movesBlock = document.getElementById("moves");
			moves++;
			movesBlock.innerHTML = moves;
			var oldStyle = el.style.backgroundPosition;
			var oldStyle2 = document.getElementById(ei + " " + ej).style.backgroundPosition;
			document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
			document.getElementById(ei + " " + ej).style.backgroundPosition = oldStyle;
			el.style.backgroundPosition = oldStyle2;
			el.innerHTML = "";
			ei = i;
			ej = j;
			var q = true;
			for (i = 0; i < 4; ++i)
				for (j = 0; j < 4; ++j)
					if (i + j != 6 && document.getElementById(i + " " + j).innerHTML != i * 4 + j + 1) {
						q = false;
						break;
					}

			if (q) {
				var time = document.getElementById("time");
				var movesBlock = document.getElementById("moves");
				var congratulations = document.querySelector(".congratulations");
				var modalBlock = document.querySelector(".modal-block");
				var overlay = document.querySelector(".overlay");
				var topTable = document.querySelector(".top-table");
				congratulations.innerHTML = `Ура! Вы решили головоломку за ${time.innerHTML} и ${moves} ходов`;
				congratulations.style.display = "inline";
				overlay.style.display = "block";
				modalBlock.style.display = "flex";
				var myopacity = 0;

				function MyFadeFunction() {
					if (myopacity < 1) {
						myopacity += .075;
						setTimeout(function () { MyFadeFunction() }, 100);
					}
					document.querySelector('.modal-block').style.opacity = myopacity;
				}

				MyFadeFunction();
				var prioritet = moves;
				goalArr.unshift(prioritet);
				if (goalArr.length > 10) {
					goalArr.pop();
				}
				goalArr.sort();
				topTable.innerHTML = "";
				topTable.innerHTML += "<h5>Results:</h5>";
				for (let i = 0; i < goalArr.length; i++) {
					topTable.innerHTML += `<p>${goalArr[i]}</p>`;
				}
				localStorage.setItem("results", goalArr);
			}
		}, 250);
	}
}
function newGame() {
	var answer = document.getElementById("answer");
	answer.innerHTML = "Узнать ответ";
	isStop = true;
	var topTable = document.querySelector(".top-table");
	if (localStorage.getItem("results") != null && topTable.childElementCount <= 1) {
		goalArr = localStorage.getItem("results").split(",");
		for (let i = 0; i < goalArr.length; i++) {
			topTable.innerHTML += `<p>${goalArr[i]}</p>`;
		}
	}
	var time = document.getElementById("time");
	var movesBlock = document.getElementById("moves");
	var congratulations = document.querySelector(".congratulations");
	var modalBlock = document.querySelector(".modal-block");
	var overlay = document.querySelector(".overlay");
	congratulations.style.display = "none";
	overlay.style.display = "none";
	modalBlock.style.display = "none";
	var time = document.getElementById("time");
	var movesBlock = document.getElementById("moves");
	min = 0;
	sec = 0;
	moves = 0;
	time.innerHTML = "00:00";
	movesBlock.innerHTML = "0";
	for (i = 0; i < 4; ++i) {
		arr[i] = []
		for (j = 0; j < 4; ++j) {
			if (i + j != 6) {
				arr[i][j] = i * 4 + j + 1;
			}
			else
				arr[i][j] = "";
		}
	}
	ei = 3;
	ej = 3;

	for (i = 0; i < 1600; ++i)
		switch (Math.round(3 * Math.random())) {
			case 0: if (ei != 0) swap(arr, ei, ej, --ei, ej); break; // up
			case 1: if (ej != 3) swap(arr, ei, ej, ei, ++ej); break; // right
			case 2: if (ei != 3) swap(arr, ei, ej, ++ei, ej); break; // down
			case 3: if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
		}
	var table = document.createElement("table"),
		tbody = document.createElement("tbody");
	table.appendChild(tbody);
	var bpos = 58;
	var bpos2 = 222;
	var random = Math.round(Math.random() * 150);
	for (i = 0; i < 4; ++i) {
		var row = document.createElement("tr");
		for (j = 0; j < 4; ++j) {
			var cell = document.createElement("td");
			cell.id = i + " " + j;
			cell.onclick = cellClick;
			cell.innerHTML = arr[i][j];
			if (cell.innerHTML == "1" || cell.innerHTML == "2" || cell.innerHTML == "3" || cell.innerHTML == "4") {
				bpos2 = 222;
				cell.style.backgroundPosition = `-${bpos * (cell.innerHTML - 1)}px ${bpos2}px`;
			}
			if (cell.innerHTML == "5" || cell.innerHTML == "6" || cell.innerHTML == "7" || cell.innerHTML == "8") {
				bpos2 = 167;
				cell.style.backgroundPosition = `-${bpos * (cell.innerHTML - 5)}px ${bpos2}px`;
			}
			if (cell.innerHTML == "9" || cell.innerHTML == "10" || cell.innerHTML == "11" || cell.innerHTML == "12") {
				bpos2 = 107;
				cell.style.backgroundPosition = `-${bpos * (cell.innerHTML - 9)}px ${bpos2}px`;
			}
			if (cell.innerHTML == "13" || cell.innerHTML == "14" || cell.innerHTML == "15") {
				bpos2 = 53;
				cell.style.backgroundPosition = `-${bpos * (cell.innerHTML - 13)}px ${bpos2}px`;
			}
			if (cell.innerHTML == "") {
				cell.style.backgroundPosition = `-400px 53px`;
			}
			cell.style.backgroundImage = `url(./assets/${random}.jpg)`;
			cell.style.backgroundSize = "230px";

			row.appendChild(cell);

		}

		tbody.appendChild(row);
	}
	if (box.childNodes.length == 1)
		box.removeChild(box.firstChild);
	box.appendChild(table);
}

function showTime() {
	var time = document.getElementById("time");
	time.innerHTML = `${addZeroMin(min)}<span>:</span>${addZero(sec)}`;
	sec++;
	if (sec === 60) {
		sec = 0;
		min++;
	}
}

var checkbox = document.getElementById("checkbox");
checkbox.onclick = function () {
	startDradr = checkbox.checked;
	if (startDradr) {
		var cells = [...document.getElementsByTagName("td")];
		for (let i = 0; i < cells.length; i++) {
			var cell = cells[i];
			cell.onmousedown = function (e) {
				if (e.target.innerHTML != "" && startDradr) {
					var startPositions = offset(e.target);

					e.target.style.position = 'absolute';
					moveAt(e);

					e.target.style.zIndex = 1000;

					function moveAt(e) {
						e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
						e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
					}

					document.onmousemove = function (e) {

						moveAt(e);
					}

					cell.onmouseup = function () {
						document.onmousemove = null;
						e.target.onmouseup = null;
						e.target.style.position = "static";
						if ((e.target.style.top + 60) < startPositions.top && (e.target.style.top - 60) > startPositions.top) {
							e.target.click();
						}
					}
					cell.ondragstart = function () {
						return false;
					};
				}
			}
		}
	}
}


function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

//------------------------------------------------------------------------------------------------------------------------|

var answer = document.getElementById("answer");

answer.onclick = function () {
	isStop = !isStop;
	if (isStop) {
		answer.innerHTML = "Узнать ответ";
	} else {
		answer.innerHTML = "Остановить";
	}

	// NPuzzleSolver
	// by Zachary Cava
	// repository: https://github.com/technogeek00/NPuzzleSolver

	function NPuzzleSolver(toSolve) {
		this.grid = [];
		this.fixed = [];
		this.numbers = [];
		this.solution = [];
		this.originalGrid = toSolve;
	}

	NPuzzleSolver.prototype.setupSolver = function () {
		this.numbers = [];
		this.fixed = [];
		this.grid = [];
		for (var i = 0; i < this.originalGrid.length; i++) {
			this.fixed[i] = [];
			this.grid[i] = [];
			for (var j = 0; j < this.originalGrid.length; j++) {
				var num = this.originalGrid[i][j];
				this.grid[i][j] = num;
				this.fixed[i][j] = false;
				this.numbers[num] = { x: j, y: i };
			}
		}
	}

	NPuzzleSolver.prototype.solve = function () {
		this.setupSolver();
		try {
			this.solveGrid(this.grid.length);
		} catch (err) {
			console.log(err.message);
			return null;
		}
		return this.solution;
	}

	NPuzzleSolver.prototype.solveGrid = function (size) {
		if (size > 2) {
			// pattern solve nxn squares greater than 2x2
			this.solveRow(size); // solve the upper row first
			this.solveColumn(size); // solve the left column next
			this.solveGrid(size - 1); // now we can solve the sub (n-1)x(n-1) puzzle
		} else if (size == 2) {
			this.solveRow(size); // solve the row like normal
			// rotate last two numbers if they arent in place
			if (this.grid[this.grid.length - 1][this.grid.length - size] === "") {
				this.swapE({ x: this.grid.length - 1, y: this.grid.length - 1 });
			}
		} // smaller than 2 is solved by definition
	}

	NPuzzleSolver.prototype.solveRow = function (size) {
		var rowNumber = this.grid.length - size;
		// using row number here because this is also our starting column
		for (var i = rowNumber; i < this.grid.length - 2; i++) {
			var number = rowNumber * this.grid.length + (i + 1); // calculate the number that is suppose to be at this position
			this.moveNumberTowards(number, { x: i, y: rowNumber });
			this.fixed[rowNumber][i] = true;
		}
		var secondToLast = rowNumber * this.grid.length + this.grid.length - 1;
		var last = secondToLast + 1;
		// position second to last number
		this.moveNumberTowards(secondToLast, { x: this.grid.length - 1, y: rowNumber });
		// position last number
		this.moveNumberTowards(last, { x: this.grid.length - 1, y: rowNumber + 1 });
		// double check to make sure they are in the right position
		if (this.numbers[secondToLast].x != this.grid.length - 1 || this.numbers[secondToLast].y != rowNumber ||
			this.numbers[last].x != this.grid.length - 1 || this.numbers[last].y != rowNumber + 1) {
			// the ordering has messed up
			this.moveNumberTowards(secondToLast, { x: this.grid.length - 1, y: rowNumber });
			this.moveNumberTowards(last, { x: this.grid.length - 2, y: rowNumber });
			this.moveEmptyTo({ x: this.grid.length - 2, y: rowNumber + 1 });
			// the numbers will be right next to each other
			var pos = { x: this.grid.length - 1, y: rowNumber + 1 }; // square below last one in row
			var moveList = ["ul", "u", "", "l", "dl", "d", "", "l", "ul", "u", "", "l", "ul", "u", "", "d"];
			this.applyRelativeMoveList(pos, moveList);
			// now we reversed them, the puzzle is solveable!
		}
		// do the special
		this.specialTopRightRotation(rowNumber);
		// now the row has been solved :D
	}

	NPuzzleSolver.prototype.solveColumn = function (size) {
		var colNumber = this.grid.length - size;
		// use column number as this is the starting row
		for (var i = colNumber; i < this.grid.length - 2; i++) {
			var number = i * this.grid.length + 1 + colNumber;
			this.moveNumberTowards(number, { x: colNumber, y: i });
			this.fixed[i][colNumber] = true;
		}
		var secondToLast = (this.grid.length - 2) * this.grid.length + 1 + colNumber;
		var last = secondToLast + this.grid.length;
		// position second to last number
		this.moveNumberTowards(secondToLast, { x: colNumber, y: this.grid.length - 1 });
		// position last number
		this.moveNumberTowards(last, { x: colNumber + 1, y: this.grid.length - 1 });

		// double check to make sure they are in the right position
		if (this.numbers[secondToLast].x != colNumber || this.numbers[secondToLast].y != this.grid.length - 1 ||
			this.numbers[last].x != colNumber + 1 || this.numbers[last].y != this.grid.length - 1) {
			// this happens because the ordering of the two numbers is reversed, we have to reverse them
			this.moveNumberTowards(secondToLast, { x: colNumber, y: this.grid.length - 1 });
			this.moveNumberTowards(last, { x: colNumber, y: this.grid.length - 2 });
			this.moveEmptyTo({ x: colNumber + 1, y: this.grid.length - 2 });
			// the numbers will be stacked and the empty should be to the left of the last number
			var pos = { x: colNumber + 1, y: this.grid.length - 1 };
			var moveList = ["ul", "l", "", "u", "ur", "r", "", "u", "ul", "l", "", "u", "ul", "l", "", "r"];
			this.applyRelativeMoveList(pos, moveList);
			// now the order has been officially reversed
		}

		// do the special
		this.specialLeftBottomRotation(colNumber);
		// now the column is solved
	}

	NPuzzleSolver.prototype.applyRelativeMoveList = function (pos, list) {
		for (var i = 0; i < list.length; i++) {
			if (list[i] == "") {
				this.swapE(pos);
			} else {
				this.swapE(this.offsetPosition(pos, list[i]));
			}
		}
	}

	NPuzzleSolver.prototype.moveNumberTowards = function (num, dest) {
		// dont bother if the piece is in the right place, it can cause odd things to happen with the space
		if (this.numbers[num].x == dest.x && this.numbers[num].y == dest.y) return; // dont bother

		// choose where we want the empty square
		this.makeEmptyNeighborTo(num);
		// now empty will be next to our number and thats all we need
		var counter = 1;
		while (this.numbers[num].x != dest.x || this.numbers[num].y != dest.y) {
			var direction = this.getDirectionToProceed(num, dest);
			if (!this.areNeighbors(num, "")) {
				throw "cannot rotate without empty";
			}
			if (direction == "u" || direction == "d") {
				this.rotateVertical(num, (direction == "u"));
			} else {
				this.rotateHorizontal(num, (direction == "l"));
			}
		}
	}

	NPuzzleSolver.prototype.rotateHorizontal = function (num, leftDirection) {
		var side = (leftDirection) ? "l" : "r";
		var other = (leftDirection) ? "r" : "l";
		var empty = this.numbers[""];
		var pos = this.numbers[num];
		if (empty.y != pos.y) {
			// the empty space is above us
			var location = (empty.y < pos.y) ? "u" : "d";
			if (!this.moveable(this.offsetPosition(pos, location + side)) || !this.moveable(this.offsetPosition(pos, location))) {
				this.swapE(this.offsetPosition(pos, location + other));
				this.swapE(this.offsetPosition(pos, other));
				this.proper3By2RotationHorizontal(pos, leftDirection);
			} else {
				this.swapE(this.offsetPosition(pos, location + side));
				this.swapE(this.offsetPosition(pos, side));
			}
		} else if ((empty.x < pos.x && !leftDirection) || (empty.x > pos.x && leftDirection)) {

			// its on the opposite that we want it on
			this.proper3By2RotationHorizontal(pos, leftDirection);
		}
		// now it is in the direction we want to go so just swap
		this.swapE(pos);
	}

	NPuzzleSolver.prototype.proper3By2RotationHorizontal = function (pos, leftDirection) {
		var side = (leftDirection) ? "l" : "r";
		var other = (leftDirection) ? "r" : "l";
		var location = "u"; // assume up as default
		if (this.moveable(this.offsetPosition(pos, "d" + side)) && this.moveable(this.offsetPosition(pos, "d")) && this.moveable(this.offsetPosition(pos, "d" + other))) {
			location = "d";
		} else if (!this.moveable(this.offsetPosition(pos, "u" + side)) || !this.moveable(this.offsetPosition(pos, "u")) || !this.moveable(this.offsetPosition(pos, "u" + other))) {
			throw "unable to move up all spots fixed";
		}
		this.swapE(this.offsetPosition(pos, location + other));
		this.swapE(this.offsetPosition(pos, location));
		this.swapE(this.offsetPosition(pos, location + side));
		this.swapE(this.offsetPosition(pos, side));
	}

	NPuzzleSolver.prototype.rotateVertical = function (num, upDirection) {
		var toward = (upDirection) ? "u" : "d";
		var away = (upDirection) ? "d" : "u";

		var empty = this.numbers[""];
		var pos = this.numbers[num];
		if (empty.x != pos.x) {
			// its to the right or left
			var side = (empty.x < pos.x) ? "l" : "r";
			if (!this.moveable(this.offsetPosition(pos, toward + side)) || !this.moveable(this.offsetPosition(pos, side))) {
				this.swapE(this.offsetPosition(pos, away + side));
				this.swapE(this.offsetPosition(pos, away));
				this.proper2By3RotationVertical(pos, upDirection);
			} else {
				this.swapE(this.offsetPosition(pos, toward + side));
				this.swapE(this.offsetPosition(pos, toward));
			}
		} else if ((empty.y < pos.y && !upDirection) || (empty.y > pos.y && upDirection)) {
			// its in the opposite direction we want to go
			this.proper2By3RotationVertical(pos, upDirection);
		}
		// now the empty is in the direction we need to go
		// so just swap with it
		this.swapE(pos);
	}

	NPuzzleSolver.prototype.proper2By3RotationVertical = function (pos, upDirection) {
		var toward = (upDirection) ? "u" : "d";
		var away = (upDirection) ? "d" : "u";

		var side = "r"; // default to right column usage
		if (this.moveable(this.offsetPosition(pos, toward + "l")) && this.moveable(this.offsetPosition(pos, "l")) && this.moveable(this.offsetPosition(pos, away + "l"))) {
			side = "l";
		} else if (!this.moveable(this.offsetPosition(pos, toward + "r")) || !this.moveable(this.offsetPosition(pos, "r")) || !this.moveable(this.offsetPosition(pos, away + "r"))) {
			throw "Unable to preform move, the puzzle is quite possibly unsolveable";
		}
		this.swapE(this.offsetPosition(pos, away + side));
		this.swapE(this.offsetPosition(pos, side));
		this.swapE(this.offsetPosition(pos, toward + side));
		this.swapE(this.offsetPosition(pos, toward));
	}

	NPuzzleSolver.prototype.specialTopRightRotation = function (top) {
		// lock the two pieces
		this.fixed[top][this.grid.length - 1] = true;
		this.fixed[top + 1][this.grid.length - 1] = true;
		// preform the swap
		var topRight = { x: this.grid.length - 1, y: top };
		this.moveEmptyTo(this.offsetPosition(topRight, "l"));
		this.swapE(topRight);
		this.swapE(this.offsetPosition(topRight, "d"));
		// lock proper pieces and unlock extra from next row
		this.fixed[top + 1][this.grid.length - 1] = false;
		this.fixed[topRight.y][topRight.x - 1] = true;
	}

	NPuzzleSolver.prototype.specialLeftBottomRotation = function (left) {
		// lock the two pieces
		this.fixed[this.grid.length - 1][left] = true;
		this.fixed[this.grid.length - 1][left + 1] = true;
		// preform the swap
		var leftBottom = { x: left, y: this.grid.length - 1 };
		this.moveEmptyTo(this.offsetPosition(leftBottom, "u"));
		this.swapE(leftBottom);
		this.swapE(this.offsetPosition(leftBottom, "r"));
		// lock proper pieces and unlock extras from next column
		this.fixed[this.grid.length - 1][left + 1] = false;
		this.fixed[leftBottom.y - 1][leftBottom.x] = true;
	}

	NPuzzleSolver.prototype.getDirectionToProceed = function (num, dest) {
		var cur = this.numbers[num];
		var diffx = dest.x - cur.x;
		var diffy = dest.y - cur.y;
		// case 1, we need to move left and are not being blocked
		if (diffx < 0 && this.moveable({ x: cur.x - 1, y: cur.y })) {
			return "l";
		}
		// case 2, we need to move right and are not being blocked
		if (diffx > 0 && this.moveable({ x: cur.x + 1, y: cur.y })) {
			return "r";
		}
		// case 3, we need to move up
		if (diffy < 0 && this.moveable({ x: cur.x, y: cur.y - 1 })) {
			return "u";
		}
		// case 4, we need to move down
		if (diffy > 0 && this.moveable({ x: cur.x, y: cur.y + 1 })) {
			return "d";
		}
		throw "There is no valid move, the puzzle was incorrectly shuffled";
	}

	NPuzzleSolver.prototype.makeEmptyNeighborTo = function (num, boundry) {
		var gotoPos = this.numbers[num];
		var counter = 1;
		while ((this.numbers[""].x != gotoPos.x || this.numbers[""].y != gotoPos.y) && !this.areNeighbors("", num)) {
			this.movingEmptyLoop(gotoPos);
			counter++;
			if (counter > 100) {
				throw "Infinite loop hit while solving the puzzle, it is quite likely this puzzle is invalid";
			}
		}
	}

	NPuzzleSolver.prototype.moveEmptyTo = function (pos) {
		// check to see if the pos is a fixed number
		if (this.fixed[pos.y][pos.x]) {
			throw "cannot move empty to a fixed position";
		}
		var counter = 1;
		while (this.numbers[""].x != pos.x || this.numbers[""].y != pos.y) {
			this.movingEmptyLoop(pos);
			counter++;
			if (counter > 100) {
				console.log("problem trying to move the piece");
				break;
			}
		}
	}

	NPuzzleSolver.prototype.movingEmptyLoop = function (pos) {
		var empty = this.numbers[""];
		var diffx = empty.x - pos.x;
		var diffy = empty.y - pos.y;
		if (diffx < 0 && this.canSwap(empty, this.offsetPosition(empty, "r"))) {
			this.swap(empty, this.offsetPosition(empty, "r"));
		} else if (diffx > 0 && this.canSwap(empty, this.offsetPosition(empty, "l"))) {
			this.swap(empty, this.offsetPosition(empty, "l"));
		} else if (diffy < 0 && this.canSwap(empty, this.offsetPosition(empty, "d"))) {
			this.swap(empty, this.offsetPosition(empty, "d"));
		} else if (diffy > 0 && this.canSwap(empty, this.offsetPosition(empty, "u"))) {
			this.swap(empty, this.offsetPosition(empty, "u"));
		}
	}

	NPuzzleSolver.prototype.offsetPosition = function (pos, direction) {
		if (direction == "u") {
			return { x: pos.x, y: pos.y - 1 };
		} else if (direction == "d") {
			return { x: pos.x, y: pos.y + 1 };
		} else if (direction == "l") {
			return { x: pos.x - 1, y: pos.y };
		} else if (direction == "r") {
			return { x: pos.x + 1, y: pos.y };
		} else if (direction == "ul") {
			return { x: pos.x - 1, y: pos.y - 1 };
		} else if (direction == "ur") {
			return { x: pos.x + 1, y: pos.y - 1 };
		} else if (direction == "dl") {
			return { x: pos.x - 1, y: pos.y + 1 };
		} else if (direction == "dr") {
			return { x: pos.x + 1, y: pos.y + 1 };
		}
		return pos;
	}

	NPuzzleSolver.prototype.areNeighbors = function (first, second) {
		var num1 = this.numbers[first];
		var num2 = this.numbers[second];
		return (Math.abs(num1.x - num2.x) == 1 && num1.y == num2.y) || (Math.abs(num1.y - num2.y) == 1 && num1.x == num2.x);
	}

	NPuzzleSolver.prototype.moveable = function (pos) {
		return this.validPos(pos) && !this.fixed[pos.y][pos.x];
	}

	NPuzzleSolver.prototype.validPos = function (pos) {
		return !(pos.x < 0 || pos.x >= this.grid.length || pos.y < 0 || pos.y >= this.grid.length);
	}

	NPuzzleSolver.prototype.canSwap = function (pos1, pos2) {
		if (!this.validPos(pos1) || !this.validPos(pos2)) {
			return false;
		}
		var num1 = this.grid[pos1.y][pos1.x];
		var num2 = this.grid[pos2.y][pos2.x];
		if (!this.areNeighbors(num1, num2)) {
			return false;
		}
		// check fixed positions
		return !(this.fixed[pos1.y][pos1.x] || this.fixed[pos2.y][pos2.x]);
	}

	NPuzzleSolver.prototype.swapE = function (pos) {
		this.swap(this.numbers[""], pos);
	}

	NPuzzleSolver.prototype.swap = function (pos1, pos2) {
		var num1 = this.grid[pos1.y][pos1.x];
		var num2 = this.grid[pos2.y][pos2.x];
		// guard against illegal moves
		if (!this.areNeighbors(num1, num2)) {
			throw "These numbers are not neighbors and cannot be swapped";
		}
		if (num1 != "" && num2 != "") {
			throw "You must swap with an empty space";
		}
		var oldPos1 = this.numbers[num1];
		this.numbers[num1] = this.numbers[num2];
		this.numbers[num2] = oldPos1;
		this.grid[pos1.y][pos1.x] = num2;
		this.grid[pos2.y][pos2.x] = num1;
		this.solution.push({
			empty: (num1 == "") ? pos1 : pos2,
			piece: (num1 == "") ? pos2 : pos1,
			number: (num1 == "") ? num2 : num1
		});
	}
	var cells = [...document.getElementsByTagName("td")];
	arr = [
		[cells[0].innerHTML, cells[1].innerHTML, cells[2].innerHTML, cells[3].innerHTML],
		[cells[4].innerHTML, cells[5].innerHTML, cells[6].innerHTML, cells[7].innerHTML],
		[cells[8].innerHTML, cells[9].innerHTML, cells[10].innerHTML, cells[11].innerHTML],
		[cells[12].innerHTML, cells[13].innerHTML, cells[14].innerHTML, cells[15].innerHTML],
	];
	var solver = new NPuzzleSolver(arr);
	var solution = solver.solve();
	var q = 0;
	var i = 0;
	function myLoop() {
		setTimeout(function () {
			var cells = [...document.getElementsByTagName("td")];
			if (i == 16) {
				i = 0;
			}
			if (cells[i].innerHTML == solution[q].number) {
				cells[i].click();
				i = 0;
				q++;
			}
			i++;

			if (q < solution.length && !isStop) {
				myLoop();
			}
		}, 300);
	}
	myLoop();
}
