# Titan AI Backend

Backend API for Titan AI Fitness Coach.

The backend acts as a bridge between the frontend interface and the locally running Mistral Large Language Model through Ollama.

---

## Tech Stack

- Python
- Flask
- Flask-CORS
- Requests
- Ollama
- Mistral

---

## Requirements

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Start Ollama

Make sure Ollama is installed and Mistral is downloaded:

```bash
ollama pull mistral
```

Run Ollama:

```bash
ollama run mistral
```

---

## Run Backend

```bash
python app.py
```

Server starts on:

```text
http://127.0.0.1:5000
```

---

## API Endpoint

### POST /chat

Request:

```json
{
  "message": "Create a chest workout"
}
```

Response:

```json
{
  "reply": "Here's a chest workout..."
}
```

---

## Architecture

Frontend
↓
Flask API
↓
Ollama
↓
Mistral LLM

---

## Current Limitations

- No authentication
- No database
- No conversation memory
- Local deployment only
- Single-model support

---

## Future Improvements

- User profiles
- Conversation history
- Personalized coaching
- Workout generation engine
- Nutrition recommendation engine
- Cloud deployment
