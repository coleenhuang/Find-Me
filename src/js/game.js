import Component from './component';


const game = new Component('[data-app]', {
    data: {
        words: ['CAR', 'MARR', 'SHARK'],
        matrix: [
            ['Y', 'W', 'S', 'T','D'],
            ['L', 'E', 'H', 'C','R'],
            ['V', 'C', 'A', 'R','R'],
            ['U', 'S', 'R', 'O','A'],
            ['P', 'V', 'K', 'C','M'],
        ],
        selectedArray: []
    },
    template: function(props) {
        return '<div id="grid">' + props.matrix.map((row, rowIndex )=> {
            return (
                row.map((item, colIndex )=> (
                    `<div class="grid-item" 
                    data-row=${rowIndex+1}
                    data-col=${colIndex+1}
                    value=${item}
                    id="r${rowIndex+1}c${colIndex+1}"
                    key="r${rowIndex+1}c${colIndex+1}">`+ item + '</div>'
                )).join(''))
        }).join('') + '</div>';
    }
})

export default game;


//Use mousedown to get selection mode
//Use the offsetx and offset y to get the selection areas



