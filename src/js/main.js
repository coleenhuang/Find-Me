import './components/_matches.polyfill.js';

//get the app container
let app = document.querySelector('[data-app]');

//Determines the view UI
let page = app.getAttribute('data-app');

if (page === 'start') {
    //render the start page
}
if (page === 'game') {
    //render the game page
}