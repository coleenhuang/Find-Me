import './components/_matches.polyfill.js';
import './component'
import game from './game'

//get the app container
let app = document.querySelector('[data-app]');

//Determines the view UI
let page = app.getAttribute('data-app');
console.log(page)

if (page === 'start') {
    //render the start page
}
if (page === "game") {
    //render the game page
    game.render();
}