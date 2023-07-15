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

	fetch(`${BASE_URL}symbols`, options)
		.then((data) => data.json())
		.then((JSONresponse) => {
			console.log(JSONresponse);
			JSONresponse;

			const allSymbolValues = Object.values(JSONresponse.symbols);

			const foundSymbolValue = allSymbolValues.find(
				(name) => name === desiredSymbol
			);

			let currency;

			if (foundSymbolValue === undefined) {
				currency = `The desired symbol wasn't found. Please try another one.`;
			}

			if (foundSymbolValue) {
				currencySymbol = `The symbol of the currency is: ${Object.keys(
					JSONresponse.symbols
				).find((key) => JSONresponse.symbols[key] === foundSymbolValue)}`;
			}

			h2.textContent = currencySymbol;
			aside.append(h2);
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
