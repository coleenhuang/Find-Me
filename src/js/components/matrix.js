const rows = 5;
const cols = 5;
const words = ['CAR', 'MARR', 'SHARK']


let matrix = [
    ['Y', 'W', 'S', 'T','D'],
    ['L', 'E', 'H', 'C','R'],
    ['V', 'C', 'A', 'R','R'],
    ['U', 'S', 'R', 'O','A'],
    ['P', 'V', 'K', 'C','M'],
];

function createGrid() {
    let grid = document.createElement("div");
    grid.className = "grid"
    for (let i = 0; i < matrix.length; i++) {
        let column = document.createElement("div");
        column.className = "grid-column";
        let items = '';
        for (let j = 0; j < matrix[i][j]; j++) {
            items += `<div class="grid-item">
                            ${matrix[i][j]}
                    </div>`;
        }
        column.innerHTML = items;
        grid.append(column)
        
    }
}