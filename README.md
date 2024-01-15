# Weather Application

## Overview

The Weather Application is a full-stack web application that allows users to check the current weather by entering a zip code. The application consists of a Spring Boot backend for fetching weather data and a React frontend for user interaction.

## Features

- **Zip Code Form:** Users can enter a zip code to get real-time weather information.
- **Current Weather Display:** Displays the current temperature, city name, and weather conditions.
- **Error Handling:** Provides user-friendly error messages for invalid zip codes or failed weather data fetch.

## Technologies Used

- **Backend:**
  - Spring Boot
  - Java
  - RestTemplate

- **Frontend:**
  - React
  - Bootstrap for styling
  - Fetch API for data retrieval

- **Containerization:**
  - Docker
  - Docker Compose

## Prerequisites

- [Java](https://www.java.com/) installed
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- [Docker](https://www.docker.com/) installed (for containerization)

## Setup

### Backend (Spring Boot)

1. Navigate to the `demo` directory.
2. Build the Spring Boot application: `./mvnw clean package`
3. Run the application: `java -jar target/demo-0.0.1-SNAPSHOT.jar`

### Frontend (React)

1. Navigate to the `weather-app` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Docker (Optional)

1. Build and run the Docker containers: `docker-compose up --build`

## Usage

1. Access the application at [http://localhost:3000](http://localhost:3000).
2. Enter a valid zip code in the form and click "Get The Weather!"

## Configuration

- Backend configuration is located in `demo/src/main/resources/application.properties`.
- Frontend configuration can be adjusted in `weather-app/package.json` and other relevant files.
