
const form = document.querySelector('form');
const resultContainer = document.getElementById('result-container');
const emergencyNumbers = document.getElementById('emergency-numbers');

form.addEventListener('submit', async function (e) {
	e.preventDefault();

	const answers = new FormData(form);
	const data = {
		q1: answers.get('q1'),
		q2: answers.get('q2'),
		q3: answers.get('q3'),
		q4: answers.get('q4'),
		q5: answers.get('q5'),
		q6: answers.get('q6'),
		q7: answers.get('q7'),
		q8: answers.get('q8'),
		q9: answers.get('q9')
	};

	try {
		const response = await fetch('/predict', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (!response.ok) {
			throw new Error('Something went wrong!');
		}

		const result = await response.json();
		console.log(result);

		resultContainer.innerHTML = `
			<h2>Result:</h2>
			<p>Your score is: <span class="score">${result.score}</span></p>
			<p class="message ${result.message.toLowerCase()}">${result.message}</p>
		`;

		if (result.message.toLowerCase() === 'severe') {
			emergencyNumbers.style.display = 'block';
		} else {
			emergencyNumbers.style.display = 'none';
		}
	} catch (error) {
		console.error(error);
    }

});