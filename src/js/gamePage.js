const words =  ['CAR', 'MARR', 'SHARK'];
const matrix= [
            ['Y', 'W', 'S', 'T','D'],
            ['L', 'E', 'H', 'C','R'],
            ['V', 'C', 'A', 'R','R'],
            ['U', 'S', 'R', 'O','A'],
            ['P', 'V', 'K', 'C','M'],
        ]

function renderGrid() {
    let target = document.querySelector('[data-app]')
    target.innerHTML = generateGrid(matrix)
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

export default renderGrid;