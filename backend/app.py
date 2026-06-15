from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    user_message = data["message"]

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "mistral",
            "prompt": user_message,
            "stream": False
        }
    )

    ai_reply = response.json()["response"]

    return jsonify({
        "reply": ai_reply
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)