# 🌤️ Real-Time Weather Analyzer

A responsive web application that provides real-time weather updates for cities worldwide. This project utilizes modern web technologies to fetch and display accurate meteorological data, helping users plan their day effectively.

---

## 📋 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Installation & Usage](#installation--usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## 📖 About the Project
The **Weather Analyzer** is designed to provide instant access to weather conditions. By simply entering a city name, users can view essential data such as temperature, humidity, wind speed, and atmospheric conditions. It serves as a practical implementation of **API integration** and **DOM manipulation** using JavaScript.

---

## ✨ Key Features
* **Real-Time Data:** Fetches live weather data from a global API.
* **City Search:** Search functionality to find weather for any specific location.
* **Detailed Metrics:** Displays Temperature (°C/°F), Humidity, Wind Speed, and Weather Description (e.g., Cloudy, Rainy).
* **Responsive Design:** Optimized for both desktop and mobile viewing.
* **Dynamic Backgrounds:** (Optional) Visuals change based on the current weather conditions.

---

## 💻 Technologies Used
* **Frontend Structure:** HTML5
* **Styling:** CSS3 (Flexbox/Grid for layout)
* **Logic & Functionality:** JavaScript (ES6+)
* **Data Source:** [OpenWeatherMap API](https://openweathermap.org/) (or similar Weather API)

---

## 🚀 Installation & Usage

### Prerequisites
* A modern web browser (Chrome, Firefox, Safari, Edge).
* An active internet connection (to fetch API data).

### Steps to Run
1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/JoelMoirangthem/Weather-analysing.git](https://github.com/JoelMoirangthem/Weather-analysing.git)
    ```

2.  **Navigate to the Weather Folder**
    Since the repository contains multiple projects, navigate specifically to the Weather directory:
    ```bash
    cd Weather-analysing/Weather
    ```

3.  **Launch the Application**
    * Locate the `index.html` file.
    * Double-click to open it in your browser.

### ⚠️ API Key Configuration
If the app does not load data immediately, you may need to add your own API Key:
1.  Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get a free API key.
2.  Open `script.js` in a code editor.
3.  Look for a variable like `apiKey` or `const key = '...'`.
4.  Paste your new API key inside the quotes.

---

## 📂 Project Structure

```text
Weather-analysing/
├── Weather/
│   ├── index.html      # Main user interface
│   ├── style.css       # Visual styling and layout
│   ├── script.js       # API fetching and logic
│   └── images/         # Weather icons and background assets
├── README.md           # Project documentation
└── ...
