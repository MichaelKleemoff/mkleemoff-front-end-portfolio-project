// Accessing necessary nodes
const main = document.querySelector('main');
const h2 = document.createElement('h2');
const aside = document.querySelector('aside');
h2.style.color = '#fff';
h2.style.backgroundColor = 'gold';

const form = document.querySelector('form');

const BASE_URL = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '340187f15fmsh4251fb7b3566c66p19fe01jsn2c636412f715',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
	},
};

// Form submission
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const desiredSymbol = document.querySelector('#desired-symbol').value;
	const currSymbol = document.querySelector('#symbol');
	console.log(currSymbol.checked);
	const currName = document.querySelector('#name');
	console.log(currName.checked);

	fetch(`${BASE_URL}symbols`, options)
		.then((data) => data.json())
		.then((JSONresponse) => {
			console.log(JSONresponse);
			JSONresponse;
			const allSymbolKeys = Object.keys(JSONresponse.symbols);
			const allSymbolValues = Object.values(JSONresponse.symbols);

			const foundSymbolKey = allSymbolKeys.find(
				(item) => item === desiredSymbol.toUpperCase()
			);
			console.log(foundSymbolKey);
			const foundSymbolValue = allSymbolValues.find(
				(item) => item.toLowerCase() === desiredSymbol.toLowerCase()
			);

			aside.append(h2);

			if (foundSymbolKey === undefined || foundSymbolValue === undefined) {
				h2.textContent = `The desired symbol wasn't found. Please try another one.`;
			}

			if (currSymbol.checked === true) {
				h2.textContent = `The symbol of the currency is: ${foundSymbolKey}`;
			}

			// if (currName.checked && desiredSymbol.toUpperCase() === foundSymbolKey) {
			// 	h2.textContent = `The name of the symbol is: ${JSONresponse.symbols[foundSymbolKey]}`;
			// }
		});

	form.reset();
});

const btnReset = document.querySelector('#btn-reset');

btnReset.addEventListener('click', () => {
	document.location.reload();
});

// Footer
// Get the current year and `append` it to the copyright line in the `footer`.
const currentYear = document.querySelector('#current-year');
const date = new Date();
const year = date.getFullYear();

currentYear.append(year);
