const words =  ['CAR', 'MARR', 'SHARK'];
const matrix= 
    [
        ['Y', 'W', 'S', 'T','D'],
        ['L', 'E', 'H', 'C','R'],
        ['V', 'C', 'A', 'R','R'],
        ['U', 'S', 'R', 'O','A'],
        ['P', 'V', 'K', 'C','M'],
    ];

let prevCell = null;
let currentCell = null;
let selectedArray = [];

function renderGrid() {
    let target = document.querySelector('[data-app]')
    target.innerHTML = generateGrid(matrix)
    handleClicks();
}

function generateGrid(gridMatrix) {
    //generates the html for the grid
    return '<div id="grid">' + gridMatrix.map((row, rowIndex )=> {
        return (
            row.map((item, colIndex )=> (
                `<div class="grid-item" 
                data-row=${rowIndex+1}
                data-col=${colIndex+1}
                value=${item}
                id="r${rowIndex+1}c${colIndex+1}"
                key="r${rowIndex+1}c${colIndex+1}">`+ item + '</div>'
            )).join(''))
    }).join('') + '</div>'
}

function handleClicks() {
    let grid = document.querySelector('#grid');
    let gridItems = document.querySelectorAll('.grid-item')
    let mousePressed = false;
    grid.addEventListener('mousedown', e => {
        mousePressed = true
      });
    
    grid.addEventListener('mousemove', e => {
        let row = e.target.getAttribute('data-row')
        let col = e.target.getAttribute('data-col')
        let id = e.target.getAttribute('id')
        
        if(mousePressed) {
            e.target.classList.add('selected')
            
            if(!prevCell) {
                prevCell = {row, col, id}
            }
            let nextCell = {row, col, id};
            if(!currentCell) {
                selectedArray.push(e.target.getAttribute('value'))
                currentCell = nextCell
            }
            if (currentCell.id != nextCell.id) {
                selectedArray.push(e.target.getAttribute('value'))
                currentCell = nextCell
            }
            
            if (prevCell.row !== nextCell.row && prevCell.col !== nextCell.col ) {
                resetSelection(gridItems)
            }
            
            console.log(selectedArray)
        }
    })

    grid.addEventListener('mouseup', e => {
        mousePressed = false;
        resetSelection(gridItems);
      } )
}

function resetSelection(gridItems) {
    prevCell = null;
    currentCell = null;
    gridItems.forEach(el => el.classList.remove('selected'))
    selectedArray = [];
}

export default renderGrid;