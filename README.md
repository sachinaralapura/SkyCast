# SkyCast


## About
---

This is a comprehensive weather web application built using ReactJS and Vite. It empowers users to effortlessly retrieve detailed weather information for any location across the globe. Utilizing the robust **Open-Meteo API**, this application provides not only current weather conditions but also in-depth forecasts to help you stay informed about the weather.

From daily planning to preparing for the week ahead, this application offers a rich set of weather data presented in a user-friendly and visually appealing manner.

## Features

-   **Global Weather Data:** Fetch weather information for any location worldwide by simply entering the place name.
-   **Current Weather Details:** Displays a wide range of current weather parameters:
    -   **Temperature:** Current temperature in Celsius or Fahrenheit ( *Specify if you have implemented unit switching*).
    -   **Feels Like:** "Feels like" or apparent temperature.
    -   **Visibility:** Visibility distance.
    -   **Humidity:** Relative humidity.
    -   **Wind:** Wind speed and direction.
    -   **Chances of Rain:** Probability of precipitation.
    -   **Pressure:** Atmospheric pressure.
-   **Hourly Weather Data:** Access detailed hourly weather forecasts to plan your day hour by hour.
-   **7-Day Forecast:** Get a comprehensive 7-day weather forecast to prepare for the week ahead.
-   **24-Hour Forecast Graph:** Visual representation of the 24-hour forecast using a graph, making it easy to understand temperature trends and changes over the next day.
-   **User-Friendly Interface:** Clean, responsive, and intuitive design for a seamless weather viewing experience on various devices.

## Technologies Used

-   **ReactJS:** A JavaScript library for building user interfaces.
-   **Vite:** A fast and modern build tool that provides a superior development experience.
-   **Open-Meteo API (https://api.open-meteo.com):** A free and open-source weather API providing highly accurate weather data.

## Getting Started

To run this weather application locally, follow these steps:

### Prerequisites

-   **Node.js and npm (or yarn) installed on your machine.** You can download Node.js from <https://nodejs.org/>. npm usually comes bundled with Node.js.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:sachinaralapura/SkyCast.git
    ```
2. **Navigate to the project directory:**

    ```bash
    cd Skycast
    ```
3.  **Install project dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    
    ```bash
    npm run dev
    ```