import fetch from 'node-fetch';

async function getWeather() {
    const apiUrl = "https://iumevt1a60.execute-api.ap-south-1.amazonaws.com/weather-forecast";
    
    try {
        // Make the GET request using fetch
        const response = await fetch(apiUrl);

        // Check for response status
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Handle the weather data
        console.log("Weather data:", data);
    } catch (error) {
        // Handle errors
        console.error("Error:", error.message);
    }
}

// Invoke the function
getWeather();
