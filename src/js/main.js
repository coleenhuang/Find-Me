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
    const gridItems = document.querySelectorAll('.grid-item')
    let mousePressed = false;
    let prevCell = null;
    let currentCell = null;

    grid.addEventListener('mousedown', e => {
        mousePressed = true
      });
    
    grid.addEventListener('mousemove', e => {
        let row = e.target.getAttribute('data-row')
        let col = e.target.getAttribute('data-col')
        
        if(mousePressed) {
            e.target.classList.add('selected')
            console.log(row, col)
            if(!prevCell) {
                prevCell = {row, col}
            }
            let nextCell = {row, col};
            if (nextCell) {
                currentCell = nextCell
            }

            if (prevCell.row !== nextCell.row) {
                resetSelection()
            }

        }
    })

    

    grid.addEventListener('mouseup', e => {
        mousePressed = false
        
      } )

    function resetSelection() {
        prevCell = null;
        currentCell = null;
        gridItems.forEach(el => el.classList.remove('selected'))
    }


}