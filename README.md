# Weather App

A React-based web application that allows users to search for and view current weather information for a specific city. It fetches weather data from the OpenWeatherMap API and displays relevant details such as the city name, temperature, climate, and an icon representing the current weather conditions.

## Features

- User input field to enter a city name
- Fetches weather data from the OpenWeatherMap API based on the entered city
- Displays the city name, temperature, climate, and an icon representing the current weather conditions
- Shows the current date and time, updating every second
- Handles loading and error states during the API request
- Responsive design for optimal viewing experience on different devices

## Technologies Used

- React
- React Hooks (useState, useEffect)
- OpenWeatherMap API
- react-icons library
- CSS for styling

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/weather.git
   ```

2. Navigate to the project directory:

   ```
   cd weather
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```
   REACT_APP_API_KEY=your_openweathermap_api_key
   ```

5. Start the development server:

   ```
   npm start
   ```

   The app will open in your default browser at `http://localhost:3000`.

## Usage

1. Enter the name of a city in the input field.
2. Click the "Go" button to fetch the weather data for the entered city.
3. The app will display the current weather information, including the city name, temperature, climate, and an icon representing the weather conditions.
4. The current date and time will be displayed and updated every second.