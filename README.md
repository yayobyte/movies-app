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
- Install Xcode from app store
- Install Command Line Tools: Open Xcode, choose Settings... from the Xcode menu (or press cmd ⌘ + ,). Go to the Locations and install the tools by selecting the most recent version in the Command Line Tools dropdown.
- Install a new simulator: 
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
Once you have the QR code generated in the console, you can press `i` for ios or `a` for android to use the simulator. Make sure you have `android adv manager` installed and/or the `xcode ios simulator`

If you want to run the app directly to ios or android run any of these
```bash
  yarn run:ios
  yarn run:android
```

6. **Start the react web app**
  Open a second new terminal and ensure that you are in the root folder
  ```bash
  yarn start-web
  ```

> The App has been tested in physical multiple devices and simulators, take a look at the following videos 

### Iphone 14 Simulator
![Video Preview](./docs/ios_app.gif)

### Android Simulator
![Video Preview](./docs/ios_app.gif)

### Web
![Video Preview](./docs/web_app.gif)

### Troubleshooting
1. If encountering issues where SDK dependencies are not recognized, ensure that you have run yarn install within the `/sdk` directory as mentioned in the installation steps. This setup allows the SDK to operate independently, requiring separate dependency management.

2. If you are using android and you get an error while trying to connect to local sdk. Change the from `apiUrl = 'http://localhost'` to `apiUrl = 'http://192.168.0.1'` your local IP address and android studio is not able to resolve the IP adrress for any reason
