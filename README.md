# Movie Finder App

## Overview
The application allows users to search for movies using the `https://search.imdbot.workers.dev/` API, and it showcases functionality both on iOS and Android platforms.
Make sure you test this endpoint first as sometimes it is out

## Architecture
- **/sdk**: Contains an Express.js application that serves as a backend SDK to query the movie database API. This SDK can be integrated into both the React Native and React.js applications.
- **/src**: Contains the React Native application codebase, which provides the user interface for mobile devices.

## Getting Started

### Prerequisites
- Node.js and npm (or Yarn)
- Expo CLI (for running the React Native app)
- Ensure you have React Native setup for development: [Setting up the development environment](https://reactnative.dev/docs/environment-setup).

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
  ```
3. **Start the SDK**
  ```bash
  yarn start-sdk
  ```
4. **Start the React Native App**
Open a new terminal and ensure that you are in the root folder
  ```bash
  yarn start
  ```

### Troubleshooting
If encountering issues where SDK dependencies are not recognized, ensure that you have run yarn install within the /sdk directory as mentioned in the installation steps. This setup allows the SDK to operate independently, requiring separate dependency management.
