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
    let selectedArray = [];

    grid.addEventListener('mousedown', e => {
        game.setData({mousePressed: true})
        mousePressed = true
      });
    
    grid.addEventListener('mousemove', e => {
        let row = e.target.getAttribute('data-row')
        let col = e.target.getAttribute('data-col')
        let id = e.target.getAttribute('id')
        let data = game.getData()
        if(data.mousePressed) {
            e.target.classList.add('selected')
            
            if(!prevCell) {
                prevCell = {row, col, id}
            }
            let nextCell = {row, col, id};
            if(!currentCell) {
                currentCell = nextCell
                selectedArray.push(e.target.getAttribute('value'))
            }
            if (currentCell.id != nextCell.id) {
                selectedArray.push(e.target.getAttribute('value'))
                currentCell = nextCell
            }
            
            if (prevCell.row !== nextCell.row && prevCell.col !== nextCell.col ) {
                resetSelection()
            }
            
            console.log(selectedArray)
        }
    })

    

    grid.addEventListener('mouseup', e => {
        game.setData({mousePressed: false})
        resetSelection();
      } )

    function resetSelection() {
        prevCell = null;
        currentCell = null;
        gridItems.forEach(el => el.classList.remove('selected'))
        selectedArray = [];
    }


}