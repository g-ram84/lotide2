const args = process.argv.slice(2);

const reverse = function (elements) {
	let reverseElement = "";
	for (let element of elements) {
		for (let i = element.length - 1; i >= 0; i--) {
			reverseElement += element[i];
		}
		reverseElement += "\n";
	}
	return reverseElement;
};
console.log(args.length);
console.log(reverse(args));
