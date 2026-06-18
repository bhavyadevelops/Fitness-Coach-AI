# Titan AI Frontend

Frontend interface for Titan AI Fitness Coach.

Built using HTML, CSS, and JavaScript.

---

## Features

### AI Coach
Interactive chat interface connected to the backend API.

### Nutrition Dashboard
Displays:
- Calorie intake
- Macronutrient tracking
- Meal distribution

### Exercise Library
Includes:
- Exercise categories
- Difficulty levels
- Search interface

### Settings
Contains:
- Display settings
- AI preferences
- System controls

---

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

---

## Pages

### ai-coach.html
Main AI chat interface.

### nutrition.html
Nutrition tracking dashboard.

### library.html
Exercise knowledge base.

### settings.html
Application settings panel.

---

## Running the Frontend

Open the HTML files directly in a browser.

Recommended:

```text
ai-coach.html
```

Ensure the Flask backend is running before using the AI Coach feature.

---

## Backend Connection

The frontend communicates with:

```text
http://127.0.0.1:5000/chat
```

via JavaScript Fetch API.

---

## Design Philosophy

Titan AI follows a dark-themed, performance-focused UI inspired by professional fitness applications.

Key design goals:

- Clean interface
- High readability
- Fast navigation
- Minimal distractions
- Fitness-focused experience

---

## Future Enhancements

- Responsive mobile layout
- User authentication
- Workout generator page
- Progress analytics dashboard
- Voice interaction
- Real-time data persistence
