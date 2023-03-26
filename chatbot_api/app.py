import os
from flask import Flask, jsonify, request

app = Flask(__name__)
app.env = "development"

app.secret_key = "ChatBotApp"

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

# Route for chat
@app.route('/api/chat', methods=['GET', 'POST'])
def chat():

    if request.method == "POST":

        # msg = request.form.get('meg')

        # if len(msg) == 0:
        #     return jsonify({'status': "error", 'msg': "Message not exist!"})
        
        # else:
            # return jsonify({'status': "success", 'msg': "This is a auto generate msg!"})


        return jsonify({'status': "success", 'msg': "This is a auto generate msg!"})

    return jsonify({'status': "error", 'msg': "Something went wrong!"})


# Main
if __name__ == '__main__':
    localhost = "0.0.0.0"
    port = "5000"
    app.run(host=localhost, port=port, debug=True)