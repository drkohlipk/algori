const mergeSort = require('./mergeSort');
const randomArr = require('../../helpers/randomArr');

const binarySearch = (arr, x) => {
	let begIdx = 0;
	let endIdx = arr.length - 1;

	while (begIdx <= endIdx) {
		const mid = Math.floor((endIdx - begIdx) / 2) + begIdx;

		if (arr[mid] === x) {
			return true;
		} else if (arr[mid] < x) {
			begIdx = mid + 1;
		} else {
			endIdx = mid - 1;
		}
	}

	return false;
};

console.log('***********binarySearch************');
let myArr = randomArr(true, 20);
console.log(myArr);
myArr = mergeSort(myArr);
console.log(myArr);
console.log(binarySearch(myArr, 4));
console.log('***********binarySearch************');
