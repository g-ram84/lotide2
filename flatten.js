const flatten = (array) => {
	let newArr = [];
	for (let i = 0; i <= array.length - 1; i++) {
		if (Array.isArray(array[i])) {
			for (let j = 0; j <= array[i].length - 1; j++) {
				newArr.push(array[i][j]);
			}
		} else {
			newArr.push(array[i]);
		}
	}
	return newArr;
};

flatten([1, 2, [3, 4], 5, [6]]);
