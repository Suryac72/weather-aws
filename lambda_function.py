import os
import json
import requests

def lambda_handler(event, context):
    # Define the WeatherAPI endpoint
    api_url = "http://api.weatherapi.com/v1/current.json"
    
    # Fetch the API key from environment variables
    api_key = os.getenv("WEATHER_API_KEY")
    
    if not api_key:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "API key is not set in environment variables"})
        }
    
    # Define headers
    headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
        "key": api_key
    }

    # Define query parameters
    params = {
        "q": "India"
    }

    try:
        # Make the GET request
        response = requests.get(api_url, headers=headers, params=params)
        response.raise_for_status()  # Raise an error for HTTP status codes 4xx/5xx

        # Parse and return the response
        weather_data = response.json()
        return {
            "statusCode": 200,
            "body": json.dumps(weather_data)
        }

    except requests.exceptions.RequestException as e:
        # Handle exceptions
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
