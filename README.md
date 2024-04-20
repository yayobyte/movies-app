# Movie Finder App

## Overview
The application allows users to search for movies using the `https://search.imdbot.workers.dev/` API, and it showcases functionality both on iOS and Android platforms.
Make sure you test this endpoint first as sometimes it is out.

> sometimes the provided `https://search.imdbot.workers.dev/` free endpoint is failing I decided to use another free but only for personal use `https://www.omdbapi.com/` with more queries available per day. Make sure you add the OMDB_API_KEY to the .env file in sdk/ folder


## Architecture
- **/sdk**: Contains an Express.js application that serves as a backend SDK to query the movie database API. This SDK can be integrated into both the React Native and React.js applications.
- **/src**: Contains the React Native application codebase, which provides the user interface for mobile devices.
-- **/web**: Contains a basic react app created to use the sdk with some basic configuration

## Getting Started

### Prerequisites
- Node.js and npm (or Yarn)
- Expo CLI (for running the React Native app)
- Ensure you have React Native setup for development: [Setting up the development environment](https://reactnative.dev/docs/environment-setup).
- Request the sdk api key or make sure you received it by email
- Have the `3000` and `3001` ports available to run the `react` app and `sdk` respectively

### Installation
1. **Clone the repository:**

   ```bash
    git clone https://github.com/yayobyte/movies-app.git
    cd movies app
   ```
2. **Install dependencies**
  ```bash
    yarn install
    cd sdk
    yarn install
    cd ..
    cd web
    yarn install
    cd ..
  ```
3. **Add .env file to SDK**
Make sure you get the `.env` and then copy it into the `sdk` folder containing the `OMDB_API_KEY` provided by email. It should look like this
`sdk/.env`
```bash
  OMDB_API_KEY={API_KEY}
```

4. **Start the SDK**
  ```bash
    yarn start-sdk
  ```
5. **Start the React Native App**
Open a new terminal and ensure that you are in the root folder
  ```bash
    yarn start
  ```

6. **Start the react web app**
  Open a second new terminal and ensure that you are in the root folder
  ```bash
  yarn start-web
  ```

### Troubleshooting
If encountering issues where SDK dependencies are not recognized, ensure that you have run yarn install within the /sdk directory as mentioned in the installation steps. This setup allows the SDK to operate independently, requiring separate dependency management.
