# Starwars World

### Installation

Clone and the starwars repository
```
$ git clone https://github.com/taldwek/starwars.git
``` 
Once cloning is complete - go into the created folder
```
$ cd starwars
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

* ReactJS - using Functional Components, along with State and Effect Hooks in order to handle component states and side-effects. 
React's react-router-dom package was used for route management
* Styled Components

### Implementation of Requirements
* Core requirement - user will be able to see and save as favorites films, indication of favorite films will persist after page refresh:
    * on loading of the app, the Local Storage is checked for the existence of a 'filmArray' item, if it does not exist (meaning this is the first visit) the list of all films is retrieved from the SWAPI API, and a 'favorite: false' entry is added to each film
    * The list is presented in the Home page
    * If the user clicks on the Like icon, a function for updating the 'favorite' propery of that film is called, after which the new array is saved to Local Storage and the filmList state is updated
    * On next visit the App will get the list of films from Local Storage, and display the favorite movies with a colored icon, and show only the favorite films in the Favorite page
* Seprarion of concerns: 
    * UI - handled by the React components. the App and CardContainer components are the only ones with state, while the rest of the components are stateless. 
    * Logic - majority of the application logic can be found in the filmServices and modalServices files
    * Data layers - handling and manipulation of data is done in the ApiServices file
* Exception handling - the following use cases were covered:
    * Wrong path - an error page is presented (routes in App are nested in a Switch component, and if no route mathces then a fallback component is rendered)
    * API call fails/Server is down - an error is caught by a try...catch statement, and a relevant message is displayed


