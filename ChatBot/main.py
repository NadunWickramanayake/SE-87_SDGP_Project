import nltk
import pickle

# Load the sentiment analysis model
with open('sentiment_analysis_model.pkl', 'rb') as file:
    sentiment_model = pickle.load(file)


# Define the depression screening function
def depression_bot():
    print("Hi! I'm a depression screening chat bot. Let's get started.")
    name = input("What's your name? ")
    print(f"Nice to meet you, {name}! I'm here to help you determine your depression level.")
    print("Please answer the following questions with a sentence or two:")
    print("")

    # Ask questions to screen for depression levels
    questions = [
        "1. How are you feeling today?",
        "2. Have you been experiencing any changes in your appetite?",
        "3. Are you finding it hard to get out of bed in the morning?",
        "4. Have you been feeling isolated or alone lately?",
        "5. Have you lost interest in activities that you used to enjoy?",
        "6. Have you been having any trouble sleeping?",
        "7. Have you been feeling hopeless or like things will never get better?",
        "8. Have you been having any thoughts of self-harm or suicide?"
    ]

    responses = []
    for question in questions:
        response = input(question + " ")
        responses.append(response)

    # Use the sentiment analysis model to classify responses
    sentiment_scores = [sentiment_model.predict([response])[0] for response in responses]

    # Calculate total score and assign depression level
    total_score = sum(sentiment_scores)

    if total_score <= 1:
        depression_level = "mild"
        interpretation = "Your responses suggest that you may be experiencing mild symptoms of depression. It's important to take care of yourself and seek help if your symptoms worsen."
    elif total_score <= 3:
        depression_level = "moderate"
        interpretation = "Your responses suggest that you may be experiencing moderate symptoms of depression. It's important to seek help from a mental health professional to manage your symptoms."
    else:
        depression_level = "severe"
        interpretation = "Your responses suggest that you may be experiencing severe symptoms of depression. It's crucial that you seek help from a mental health professional as soon as possible. In case of an emergency, please call 911 or your local emergency number."

    # Generate report
    report = f"Depression Screening Report for {name}:\n\n"
    for i, question in enumerate(questions):
        score = sentiment_scores[i]
        report += f"{question}\nResponse: {responses[i]}\nSentiment Score: {score}\n\n"
    report += f"Total Sentiment Score: {total_score}\n"
    report += f"Depression Level: {depression_level}\n"
    report += f"Interpretation: {interpretation}\n"

    # Prompt emergency numbers if depression is severe
    if depression_level == "severe":
        print("URGENT: Please call emergency services (911 or your local emergency number) for immediate help.")

    print(report)

    # Ask if user wants to take the test again
    print("")
    again = input
while again.lower() not in ['yes', 'no']:
    again = input("Would you like to take the depression screening test again? (Yes/No) ")

if again.lower() == 'yes':
    depression_bot()
else:
    print("Thank you for using the depression screening chat bot. Take care!")
