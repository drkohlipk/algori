const randomArr = require('../../helpers/randomArr');
const quickSort = require('./quickSort');

const binarySearch = (arr, x) => {
	let begIdx = 0;
	let endIdx = arr.length - 1;

	while (begIdx <= endIdx) {
		const mid = Math.floor(endIdx - begIdx) + begIdx;

		if (arr[mid] === x) return true;
		else if (arr[mid] < x) begIdx = mid + 1;
		else endIdx = mid - 1;
	}

	return false;
};

const myArr = randomArr(true, 10);
quickSort(myArr);
console.log(myArr);

console.log(binarySearch(myArr, 4));
