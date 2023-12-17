
# Mars Rover Hub

## Overview
Mars Rover Hub is a captivating cross-platform mobile application developed using React Native, offering a virtual gateway to the wonders of Mars. This educational app  integrates real time updates from the NASA Mars Photo API and Spaceflight News API, providing users with a visual photos from the surface of Mars and News articles. 

This project was originally created as a senior design project during Fall 2023 and anyone can use it to build on it. 


## Features

- **Mars Exploration:** Explore the Martian landscape through a collection of stunning images captured by NASA's rovers, bringing the Red Planet closer than ever before.

- **Spaceflight News:** Stay informed with the latest updates on space exploration, missions, and discoveries through curated news articles from reputable sources in the field.

- **User-Friendly Interface:** With an intuitive design and user-centric navigation, Mars Rover Hub is crafted to cater to space enthusiasts, students, and curious minds alike.

## Requirements

Before using the app, ensure you have Node.js, npm or Yarn, and the React Native CLI installed on your machine. For Android development, you'll need Android Studio and JDK installed.

## API Key Setup

Mars Rover Hub relies on API keys to access the NASA Mars Photo API and Spaceflight News API. To get started, follow these steps:

1. **Create API Key File:**
   
   In the root directory of the project, create a file named `apikey.js`.

2. **Edit `apikey.js`:**

   Open `apikey.js` in a text editor and paste the following content:

   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';

   export default API_KEY;

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/bleuKraken/mars-rover-hub.git


2. **Navigate to the Project Directory:**

   ```bash
   cd mars-rover-hub


3. **Install Dependencies:**

   ```bash
    npm install
    # or
    yarn install



4. **Start the Application:**

   ```bash
   npx react-native run-android

