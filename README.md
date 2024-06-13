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

## Demo

[Live Demo](https://weather-celsius.vercel.app)

![WeatherApp Screenshot](https://github.com/Kamaruddheen/weather/assets/57263951/94840f46-4af5-4596-88d4-d596db6c4827)

### Prerequisites

- Node.js (>=14.0.0)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```bash
   REACT_APP_API_KEY=your_openweathermap_api_key
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. Enter the name of a city in the input field.
2. Click the "Go" button to fetch the weather data for the entered city.
3. The app will display the current weather information, including the city name, temperature, climate, and an icon representing the weather conditions.
4. The current date and time will be displayed and updated every second.

### Project Structure

- `src/`
  - `components/`
    - `WeatherInput.jsx`
    - `WeatherStatus.jsx`
    - `WeatherInfo.jsx`
  - `image/`
    - `...`
  - `App.js`
  - `index.js`
  - `styles.css`
  - `WeatherApp.jsx`

### Components

- **WeatherApp**: The main component that manages the state and contains the logic for fetching the weather data.
- **WeatherInput**: A component for the input field and button.
- **WeatherStatus**: A component for displaying loading and error messages.
- **WeatherInfo**: A component for displaying the weather information.

### Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Weather App](https://weather-app-sable-ten.vercel.app/) by Ali Turkaman