import nltk
import pickle
from flask import Flask, request, jsonify

# Load the sentiment analysis model
with open('LRPWeights.pkl', 'rb') as file:
    sentiment_model = pickle.load(file)


# Define the depression screening function
def screen_for_depression(responses):
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
    report = {
        "Depression Screening Report": {
            "Name": request.json.get('name'),
            "Responses": responses,
            "Sentiment Scores": sentiment_scores,
            "Total Sentiment Score": total_score,
            "Depression Level": depression_level,
            "Interpretation": interpretation
        }
    }

    # Prompt emergency numbers if depression is severe
    if depression_level == "severe":
        report['URGENT'] = "Please call emergency services (911 or your local emergency number) for immediate help."

    return report


# Initialize Flask app
app = Flask(__name__)


# Define endpoint for depression screening
@app.route('/screen_for_depression', methods=['POST'])
def depression_screening():
    # Get user responses from the request body
    responses = request.json.get('responses')

    # Call the screening function and return the report
    report = screen_for_depression(responses)
    return jsonify(report)


if __name__ == '__main__':
    app.run(debug=True)





