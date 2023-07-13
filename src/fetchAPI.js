const url =
	'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=CAD&to=USD&amount=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '340187f15fmsh4251fb7b3566c66p19fe01jsn2c636412f715',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
	},
};

fetch(url, options)
	.then((data) => data.json())
	.then((JSONresponse) => {
		console.log(JSONresponse);
		JSONresponse;
		h2.textContent = `The conversion rate is: ${
			JSONresponse.query.to
		} ${JSONresponse.result.toFixed(2)}`;
	});
