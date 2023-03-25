
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

$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var formData = {
			'q1': $('input[name=q1]:checked').val(),
			'q2': $('input[name=q2]:checked').val(),
			'q3': $('input[name=q3]:checked').val(),
			'q4': $('input[name=q4]:checked').val(),
			'q5': $('input[name=q5]:checked').val(),
			'q6': $('input[name=q6]:checked').val(),
			'q7': $('input[name=q7]:checked').val()
		};
		$.ajax({
			type: 'POST',
			url: '/predict',
			contentType: 'application/json',
			data: JSON.stringify(formData),
			success: function(result) {
				$('.result h2').text('Your depression level is: ' + result['depression_level']);
				$('.result p').text(result['message']);
				$('.result').fadeIn();
				if (result['emergency_numbers']) {
					alert('Please contact one of these emergency numbers:\n' + result['emergency_numbers']);
				}
			},
			error: function(error) {
				$('.error').text(error.responseJSON.message);
				$('.error').fadeIn();
			}
		});
	});

	$('.result').hide();
	$('.error').hide();
});
