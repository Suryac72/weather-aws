import fetch from 'node-fetch'; 

function getWeather() {
    const apiUrl = "http://api.weatherapi.com/v1/current.json";
    const apiKey = "bd995da8b32344cfab8143004242811";
    
    // Define the query parameters
    const params = new URLSearchParams({
        q: "India"
    });

    // Set up headers
    const headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
        "key": apiKey
    };

    // Make the GET request using fetch
    fetch(`${apiUrl}?${params.toString()}`, { headers })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching weather data");
            }
            return response.json();
        })
        .then(data => {
            // Handle the weather data
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error.message);
        });
}

// Invoke the function
getWeather();
