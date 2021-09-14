const args = process.argv.slice(2);

const pigLatin = function (elements) {
	let newWord = [];
	let firstLetter = "";
	for (let element of elements) {
		firstLetter = element[0];
		newWord.push(element.slice(1) + firstLetter + "ay ");
	}
	return newWord.join(" ");
};

console.log(pigLatin(args));
