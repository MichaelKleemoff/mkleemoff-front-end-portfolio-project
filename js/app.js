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

	const currCurrency = document.querySelector('#from-currency').value;
	const convCurrency = document.querySelector('#to-currency').value;
	const amount = document.querySelector('#currency-amount').value;

	fetch(
		`${BASE_URL}convert?from=${currCurrency}&to=${convCurrency}&amount=${amount}`,
		options
	)
		.then((data) => data.json())
		.then((JSONresponse) => {
			console.log(JSONresponse);
			JSONresponse;
			aside.append(h2);
			h2.textContent = `The conversion rate is: ${
				JSONresponse.query.to
			} ${JSONresponse.result.toFixed(2)}`;
		});

	form.reset();
});

const btnReset = document.querySelector('#btn-reset');

btnReset.addEventListener('click', () => {
	document.location.reload();
});
