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
        return '<div class="grid">' + props.matrix.map(column => {
            return (
                '<div class="grid-column">' + column.map(item => (
                    '<div class="grid-item">'+ item + '</div>'
                )).join('')+'</div>' )
        }).join('') + '</div>';
    }
})

export default game;



