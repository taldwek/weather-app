# Weather App

### How to run locally

Clone and the weather-app repository
```
$ git clone https://github.com/taldwek/weather-app.git
``` 
Once cloning is complete - go into the created folder
```
$ cd weather-app
``` 
Install dependencies
```
$ npm install
``` 
Run the 'start' script
```
$ npm start
``` 

### Tech

The following technologies were used in this project :

* ReactJS - using Functional Components, along with useState and useEffect Hooks in order to handle component states and side-effects. 
React's react-router-dom package was used for route management, including useLocation for path dependent rendering
* SCSS
* Lodash was used for search throttling
* react-switch was used for implementing dark mode toggle button

### Core requirement - user will be able to search for for weather in a certain city and save a search result to Your Locations, saved items will persist after page refresh:
on loading of the app, the Local Storage is checked for the existence of a 'favoriteWeatherList' item, if it exists it will be set in the application state. If an item is saved/unsaved 'favoriteWeatherList' will change in localStorage and the application state.
* Separation of concerns:
    * UI - handled by the React components. App, Search, and WeatherCard components are stateful, while the rest of the components are stateless.
  * Logic - majority of the application logic can be found in the weatherServices 
  * Data layers - handling and manipulation of data is done in the ApiServices file
  * Exception handling - the following use cases were covered:
    * Wrong path - an error page is presented (routes in App are nested in a Switch component, and if no route matches then the user will be redirected to '/home'
    * API call fails/Server is down - an error is caught by a try...catch statement, and a relevant message is displayed
