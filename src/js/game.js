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
        ]
    },
    template: function(props) {
        return '<div class="grid">' + props.matrix.map((row, rowIndex )=> {
            return (
                row.map((item, itemIndex )=> (
                    `<div class="grid-item" key="r${rowIndex}c${itemIndex}">`+ item + '</div>'
                )).join(''))
        }).join('') + '</div>';
    }
})

export default game;



