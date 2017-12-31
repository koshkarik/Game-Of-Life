export function setNeighbors(width, height) {
	const neighbsArr = [];
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			neighbsArr.push(getNeib(i, j, width, height));
		}
	}
	return neighbsArr;
}

export function checkIfEmpty(arr, width, height) {
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (arr[i][j] === 1 || arr[i][j] === 2) {
				return false;
			}
		}
	}
	return true;
}

export function checkActiveNeibs(board, neighbsArr, h, w, width) {
	let lifeNeighbs = 0;
	const index = h * width + w;
	for (let i = 0; i < neighbsArr[index].length; i++) {
		let targetNeighbs = neighbsArr[index][i];
		if (board[targetNeighbs[0]][targetNeighbs[1]] > 0) {
			lifeNeighbs++;
		}
	}
	return lifeNeighbs;
}

export function makeLife(board, neighbsArr, width, height) {
	const newBoard = JSON.parse(JSON.stringify(board));
	for (let h = 0; h < height; h++) {
		for (let w = 0; w < width; w++) {
			let numb = checkActiveNeibs(board, neighbsArr, h, w, width);
			if (board[h][w] === 0 && numb === 3) {
				newBoard[h][w] = 1;
			} else if (board[h][w] === 1 && numb > 1 && numb < 4) {
				newBoard[h][w] = 2;
			} else if (board[h][w] === 1 || (board[h][w] === 2 && numb < 2) || numb > 3) {
				newBoard[h][w] = 0;
			}
		}
	}
	return newBoard;
}

export function getNeib(h, w, width, height) {
	const neighb = [];
	if (w + 1 < width) {
		//w
		neighb.push([h, w + 1]);
		if (h - 1 >= 0) {
			//nw
			neighb.push([h - 1, w + 1]);
		}
		if (h + 1 < height) {
			//sw
			neighb.push([h + 1, w + 1]);
		}
	} else if (w + 1 === width) {
		//right mirror
		//west-mirror
		neighb.push([h, 0]);
		if (h - 1 >= 0) {
			//nw-mirror
			neighb.push([h - 1, 0]);
		}
		if (h + 1 < height) {
			//sw-mirrow
			neighb.push([h + 1, 0]);
		}
		if (h - 1 < 0) {
			//right top angle mirror
			neighb.push([height - 1, 0]);
		}
		if (h + 1 === height) {
			//right bottom mirror
			neighb.push([0, 0]);
		}
	}
	if (w - 1 >= 0) {
		//e
		neighb.push([h, w - 1]);
		if (h - 1 >= 0) {
			//en
			neighb.push([h - 1, w - 1]);
		}
		if (h + 1 < height) {
			//es
			neighb.push([h + 1, w - 1]);
		}
	} else if (w - 1 < 0) {
		//left mirror
		//e mirror
		neighb.push([h, width - 1]);
		if (h - 1 >= 0) {
			//en mirror
			neighb.push([h - 1, width - 1]);
		}
		if (h + 1 < height) {
			//es mirror
			neighb.push([h + 1, width - 1]);
		}
		if (h - 1 < 0) {
			//left top corner
			neighb.push([height - 1, width - 1]);
		}
		if (h + 1 === height) {
			//left bottom corner
			neighb.push([0, width - 1]);
		}
	}
	if (h - 1 >= 0) {
		//n
		neighb.push([h - 1, w]);
	} else if (h - 1 < 0) {
		//n mirror
		neighb.push([height - 1, w]);
		if (w + 1 < width) {
			//ne mirror
			neighb.push([height - 1, w + 1]);
		}
		if (w - 1 >= 0) {
			//nw mirror
			neighb.push([height - 1, w - 1]);
		}
	}
	if (h + 1 < height) {
		neighb.push([h + 1, w]);
	} else if (h + 1 === height) {
		//south mirror
		neighb.push([0, w]);
		if (w + 1 < width) {
			//se mirror
			neighb.push([0, w + 1]);
		}
		if (w - 1 >= 0) {
			neighb.push([0, w - 1]);
		}
	}
	return neighb;
}

export function createEmptyBoard(height, width) {
	const newBoard = [];
	for (let i = 0; i < height; i++) {
		newBoard.push([]);
		for (let j = 0; j < width; j++) {
			newBoard[i].push(0);
		}
	}
	return newBoard;
}

export function createRandomBoard(height, width) {
	const newBoard = [];
	for (let i = 0; i < height; i++) {
		newBoard.push([]);
		for (let j = 0; j < width; j++) {
			newBoard[i].push(Math.floor(Math.random() * 3));
		}
	}
	return newBoard;
}

export function clickOnCell(board, h, w) {
	const newBoard = board.slice();
	newBoard[h][w] = newBoard[h][w] === 0 ? 1 : newBoard[h][w] === 1 ? 2 : 0;
	return newBoard;
}

