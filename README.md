# Netflix GPT

## Stack used
-   React
-   react-rounter-dom for navigation
-   Tailwind for Styling
-   React-redux for store
-   Firebase Authentication
-   Firebase Hosting
-   TMDB API for Movie data 
    - Setup VPN (currently tmdb not working)
    - created account
    - created a constant TMDBoption  with user api token.
    - useEffect to fetch anasyncrounouse api call

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
- created redux using user slice
- implemented signout
- Redirectig to the relevant page , if log in/out  and not be url/location. enchancing security using useNavigate()
    - all navigating will be done in header component as it is present in all pages and inside the Router component.
- unsubscribe to the onAuthStateChange .
- Register TMDB api and create and app and token
- get data from TMDb "now playing movies"
- custom hook for now playing movies
-  create a movie slice
- update store with movie slice
- setting main browse page
    -Title component
    - video component
- fetch data for trailer video
- update store with trailer video
- embedded youtube video
- tailwind classes to style
- build "movie list container" ie movies slider
- pending movie popular  hook




## Features
-   Login .signup page
    -sign in , sign up form 
    - redirect to browse page

-   browse (after authentication for log in user)
    - Header
        - user photo

    - Main Movie <MainContainer />
        - <VideoBackground />
        - <TitleContainer />
            - Title in description
            - play controls
    - <MovieListContainer />
        - movieslist - popular *n
            - MovieCard * n
        - 

-   Netlfix Gpt
    -   Search Bar
    -   Movie suggestion .

## Standard proprrties
-   text x-margin- mx-8
-   text y-margin- mx-4
-   button px-10 py-1



## pending features
-   icons
