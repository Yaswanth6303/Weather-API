# 🌤️ Weather API Application

A modern web application that provides real-time weather information and 5-day forecasts for any city using the OpenWeather API.

## ✨ Features

- 🌡️ Real-time current weather display
- 📅 5-day weather forecast
- 🔍 Search functionality by city name
- 📱 Responsive design for all devices
- 🖼️ Dynamic weather icons
- 💨 Detailed weather metrics (Temperature, Wind, Humidity)
- 📝 Weather descriptions based on conditions

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- An OpenWeather API key (free tier available)

### Installation

1. Clone this repository

   ```bash
   git clone https://github.com/Yaswanth6303/Weather-API.git
   cd Weather-API
   ```

2. Create a `js/config.js` file with your OpenWeather API key:

   ```javascript
   // Configuration file for API keys and other sensitive data
   const config = {
     apiKey: "YOUR_OPENWEATHER_API_KEY", // Replace with your actual API key
   };

   // Export the config object
   export default config;
   ```

3. Open `html/index.html` in your browser or use a local server

### 🔑 Getting an API Key

1. Sign up for a free account at [OpenWeather](https://openweathermap.org/api)
2. Navigate to your account dashboard
3. Go to "API keys" section
4. Copy your API key and paste it in the `js/config.js` file

## 📱 Application Pages

### Home Page

![Home Page](https://github.com/Yaswanth6303/Weather-API/assets/144692822/e4c3f14e-cb49-4c6d-816e-2bc6932dbfd0)

### Blog Page

![Blog Page](https://github.com/Yaswanth6303/Weather-API/assets/144692822/02e969a5-6f88-4579-aac5-4351ee4cd603)

### FAQs Page

![FAQs Page](https://github.com/Yaswanth6303/Weather-API/assets/144692822/8206dbc8-9020-4f78-8cdf-d01df8fa9df9)

### About Us Page

![About Us Page](https://github.com/Yaswanth6303/Weather-API/assets/144692822/67bc9292-0f6a-4477-9092-b6b211009787)

## 🔒 Security Note

The `js/config.js` file is included in the `.gitignore` to prevent accidentally committing your API key to version control. Please keep your API key private and never share it publicly.

## 💻 Usage Instructions

1. **View Current Weather**

   - Open the application in your browser
   - Enter a city name in the search bar
   - Press Enter or click the search button
   - View current weather conditions and details

2. **Check 5-Day Forecast**

   - After searching for a city
   - Scroll down to view the 5-day forecast
   - Each day shows temperature, weather conditions, and other metrics

3. **Navigate Other Pages**
   - Use the navigation menu to access Blog, FAQs, and About Us pages
   - Each page provides additional information and resources

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Yaswanth Gudivada
