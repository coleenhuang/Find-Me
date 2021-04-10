import './components/_matches.polyfill.js';
import './component'
import game from './game';


//get the app container
let app = document.querySelector('[data-app]');

//Determines the view UI
let page = app.getAttribute('data-app');


if (page === 'start') {
    //render the start page
}
if (page === "game") {
    //render the game page
    game.render();
    const grid = document.querySelector('#grid');
    let mousePressed = false;

    grid.addEventListener('mousedown', e => {
        mousePressed = true
      });
    
    grid.addEventListener('mousemove', e => {
        let row = e.target.getAttribute('data-row')
        let col = e.target.getAttribute('data-col')
        if(mousePressed) {
            e.target.classList.add('selected')
            console.log(row, col)
        }
    })

    grid.addEventListener('mouseup', e => {
        mousePressed = false
      } )


}