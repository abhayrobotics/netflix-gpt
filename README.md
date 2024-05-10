# Netflix GPT

## Setup
- npx create-react-app
    - delete the icon, test.js file and app.css code

- configure tailwind from website steps
    - follow https://tailwindcss.com/docs/guides/create-react-app

- configure react-router-dom
    - npm i -D react-router-dom
    - set up the main component as <Body /> in app.js
    - Set the path in the Body component using createBrowserRouter and RouterProvider methods
- Routing
- Header Component
- Login Form
- Signup Form
- signup form validation using regex and useRef hook
- hosting using firebase hosting
    - npm install -g firebase-tools
    - firebase login
    - firebase init
        - deploy  (optionally github action)
        - public directory to be :build
        - single page app -NO
    
    - npm run build
- firebase deploy
- firebase authentication
    -  firebase sign up createUser... 
    -  firebase sign in create ...
-  install Redux and itds toolkit
    - npm i react-redux
    - npm i -D @reduxjs/toolkit 

## Features
-   Login .signup page
    -sign in , sign up form 
    - redirect to browse page

-   browse (after authentication for log in user)
    - Header
    - Main Movie
        - trailer in background
        - Title in description
        - MOvie Suggestion
-   Netlfix Gpt
    -   Search Bar
    -   Movie suggestion