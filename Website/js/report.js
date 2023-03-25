const chatlog = document.getElementById('chatlog');
const userinput = document.getElementById('userinput');
const sendbutton = document.getElementById('sendbutton');

const questions = [
	"What is your age?",
	"What is your gender?",
	"Do you experience a persistent feeling of sadness or hopelessness?",
	"Do you have a lack of interest or pleasure in things you used to enjoy?",
	"Do you have trouble sleeping or sleeping too much?",
	"Do you experience fatigue or loss of energy?",
	"Do you have trouble concentrating or making decisions?",
	"Do you have thoughts of death or suicide?",
];

const answers = [];
let currentQuestion = 0;

function askQuestion() {
	const question = questions[currentQuestion];
	const answer = answers[currentQuestion];
	
	chatlog.innerHTML += `<div class="botmsg">${question}</div>`;
	if (answer) {
		chatlog.innerHTML += `<div class="usermsg">${answer}</div>`;
	}
	chatlog.scrollTop = chatlog.scrollHeight;
}

function processInput() {
	const input = userinput.value.trim();
	if (input) {
		answers.push(input);
		userinput.value = '';
		
		if (currentQuestion === questions.length - 1) {
			const score = calculateScore(answers);
			const level = determineLevel(score);
			chatlog.innerHTML += `<div class="usermsg">${input}</div>`;
			chatlog.innerHTML += `<div class="botmsg">Based on your responses, your depression level is ${level}.</div>`;
			sendbutton.disabled = true;
		} else {
			currentQuestion++;
			askQuestion();
		}
	}
}

function calculateScore(answers) {
	let score = 0;
	
	// Add up scores for each answer
	score += parseInt(answers[0]) > 25 ? 3
    (score += 0);
    score += answers[1].toLowerCase() === 'male' ? 0 : 1;
    score += parseInt(answers[2]) > 2 ? 2 : 0;
    score += parseInt(answers[3]) > 2 ? 2 : 0;
    score += parseInt(answers[4]) > 2 ? 2 : 0;
    score += parseInt(answers[5]) > 2 ? 2 : 0;
    score += parseInt(answers[6]) > 2 ? 2 : 0;
    score += answers[7].toLowerCase().includes('yes') ? 3 : 0;

    return score;

}

function determineLevel(score) {
if (score < 5) {
return 'Mild';
} else if (score < 10) {
return 'Moderate';
} else {
return 'Severe';
}
}

askQuestion();

userinput.addEventListener('keydown', function(event) {
if (event.keyCode === 13) {
processInput();
}
});

sendbutton.addEventListener('click', function() {
processInput();
});
