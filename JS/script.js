// Import the API key from the config file
import config from "./config.js";

// Use the API key from the config
const apiKey = config.apiKey;
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const locationLink = document.querySelector(".search a");
const cityName = document.querySelector("#city-name");
const tempElement = document.querySelector("#temp");
const windElement = document.querySelector("#wind");
const humidityElement = document.querySelector("#humidity");
const container = document.getElementById("container");

// Display current weather for user's location on page load
document.addEventListener("DOMContentLoaded", () => {
  getCurrentWeather();
});

// Event listener for search button
searchButton.addEventListener("click", getWeatherByCity);

// Event listener for location link
locationLink.addEventListener("click", getCurrentWeather);

// Function to fetch and display current weather data
async function getWeatherByCity() {
  const city = searchInput.value;
  if (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayCurrentWeather(data);
      get5DayForecast(city);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  } else {
    getCurrentWeather(); // If no city is entered, get current location data
  }
}

// Function to fetch and display current weather data using geolocation
function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Display current weather data
      displayCurrentWeather(data);

      // Fetch and display 5-day forecast
      get5DayForecast(data.name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });
}

// Function to display current weather data
function displayCurrentWeather(data) {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  cityName.innerText = `${data.name} (${formattedDate})`;
  tempElement.innerHTML = `<img src="../assets/thermometer.png" alt="temp" width="25px" height="15px">Temperature: ${data.main.temp}°C`;
  windElement.innerHTML = `<img src="../assets/wind.png" alt="wind" width="15px" height="15px">&nbsp;Wind: ${data.wind.speed} m/s`;
  humidityElement.innerHTML = `<img src="../assets/humidity.png" alt="humidity" width="15px" height="15px">&nbsp;Humidity: ${data.main.humidity}%`;

  // Set weather image
  const weatherImage = getWeatherImageURL(data.weather[0].icon);
  document.getElementById("weather-image").src = weatherImage;
}

// Function to fetch and display 5-day forecast
async function get5DayForecast(city) {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    // Display 5-day forecast
    displayForecast(forecastData.list);
  } catch (error) {
    console.error("Error fetching 5-day forecast data:", error);
  }
}

// Function to display the 5-day forecast
function displayForecast(forecastList) {
  container.innerHTML = ""; // Clear previous content

  // Loop through the forecast data for the next 5 days
  for (let i = -1; i < forecastList.length; i += 8) {
    const forecast = forecastList[i];
    if (!forecast) continue; // Skip if forecast data is not available

    const forecastDate = new Date(forecast.dt * 1000);
    const formattedDate = forecastDate.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Determine the weather image URL based on the condition
    const weatherImage = getWeatherImageURL(forecast.weather[0].icon);

    // Create a new div for each day's forecast
    const forecastDiv = document.createElement("div");
    forecastDiv.className = "box"; // Add the 'box' class for styling
    forecastDiv.innerHTML = `
            <img src="${weatherImage}" alt="Weather Icon" style="width: 100px; height: 100px;">
            <p>${formattedDate}</p> <p>(${forecast.weather[0].description})</p>
            <p><img src="../assets/thermometer.png" alt="temp" width="25px" height="15px">Temperature: ${forecast.main.temp}°C</p>
            <p><img src="../assets/wind.png" alt="wind" width="15px" height="15px">&nbsp;Wind: ${forecast.wind.speed} m/s</p>
            <p><img src="../assets/humidity.png" alt="humidity" width="15px" height="15px">&nbsp;Humidity: ${forecast.main.humidity}%</p>
        `;

    // Append the div to the container
    container.appendChild(forecastDiv);
  }
}

// Function to get weather image URL based on the icon code
function getWeatherImageURL(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}.png`;
}
