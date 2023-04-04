const say = [
    "Hello! I'm the Depression Score Prediction Chatbot. How are you feeling today?",
    "How often have you been bothered by any of the following problems in the past two weeks? Little interest or pleasure in doing things.",
    "How often have you been bothered by any of the following problems in the past two weeks? Feeling down, depressed, or hopeless.",
    "How often have you been bothered by any of the following problems in the past two weeks? Trouble falling or staying asleep, or sleeping too much.",
    "How often have you been bothered by any of the following problems in the past two weeks? Feeling tired or having little energy.",
    "How often have you been bothered by any of the following problems in the past two weeks? Poor appetite or overeating.",
    "How often have you been bothered by any of the following problems in the past two weeks? Feeling bad about yourself, or that you are a failure, or have let yourself or your family down.",
    "How often have you been bothered by any of the following problems in the past two weeks? Trouble concentrating on things, such as reading the newspaper or watching television.",
    "How often have you been bothered by any of the following problems in the past two weeks? Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual.",
];
    
const chatbot = document.querySelector(".chatbot");
const chatbotMessages = document.querySelector(".chatbot-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

let count = 0;
let index = 0;
let responses = "";

sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "chatbot-message user-message";
        userMessageDiv.innerText = userMessage;
        chatbotMessages.appendChild(userMessageDiv);
        userInput.value = "";

        if (index != 0) {
            if (responses === "") {
                responses = userMessage
            } else {
                responses = responses + ", " + userMessage;
            }
        }

        if (index === 0) {
            setTimeout(() => {
            addBotMessage(index);
            index++;
        }, 1000);
    } else {
        addBotMessage(index);
        index++;
    }
    }
});

function addBotMessage(index) {
    const botMessage = say[index];
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "chatbot-message bot-message";
    botMessageDiv.innerText = botMessage;
    chatbotMessages.appendChild(botMessageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    count++;

    if (count === 9) {
        APIPost();
    }
}

async function APIPost() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": "User",
        "responses": responses
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch("http://127.0.0.1:5000/screen_for_depression", requestOptions)
    .then(response => response.json())
    .then(result => {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "chatbot-message bot-message";
        botMessageDiv.innerText = "Thank you for answering these questions. Your depression score is: " + 
        result['Total Sentiment Score'] + 
        ". Please seek help if you are experiencing symptoms of depression."
        chatbotMessages.appendChild(botMessageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    })
    .catch(error => console.log('error', error));
}