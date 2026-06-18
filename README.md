# Titan AI – Fitness Coach Assistant

Titan AI is an AI-powered fitness coaching platform designed to provide users with intelligent fitness guidance, workout assistance, nutrition insights, and exercise resources.

This project was developed as a prototype/MVP demonstrating how Large Language Models can be integrated into fitness applications.

---

## Features

### AI Coach
- Interactive AI fitness assistant
- Real-time conversation interface
- Powered by Mistral LLM via Ollama

### Nutrition Dashboard
- Daily calorie tracking
- Macronutrient visualization
- Meal breakdowns

### Exercise Library
- Categorized exercise database
- Difficulty indicators
- Muscle-group filtering
- Each exercise haas video embedding in a modal

### Settings Panel
- User customization interface
- AI behavior settings
- Theme preferences

---

## Technology Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### Backend
- Python
- Flask
- Flask-CORS

### AI Layer
- Ollama
- Mistral LLM

---

## Project Structure

```text
Titan-AI/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
│
└── frontend/
    ├── ai-coach.html
    ├── nutrition.html
    ├── library.html
    ├── settings.html
    ├── styles.css
    ├── chat.js
    └── README.md
```

---

## How It Works

1. User enters a message in Titan AI Coach.
2. Frontend sends the message to Flask backend.
3. Flask forwards the prompt to Ollama.
4. Mistral generates a response.
5. Response is displayed inside the chat interface.

---

## Future Enhancements

- User authentication
- Workout plan generation
- Nutrition plan generation
- Progress tracking
- Voice assistant mode
- Exercise recommendation engine
- Cloud deployment
- Database integration

---

## Status

Current Version: MVP Prototype

Developed for educational and demonstration purposes.
