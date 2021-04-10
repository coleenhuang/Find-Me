export function findCell(x, y, matrixX, matrixY, squareSize)
{
    let col = Math.floor( (x - matrixX) / squareSize );
    let row = Math.floor( (y - matrixY) / squareSize );
    
    if (col < 0 || col >= cols || row < 0 || row >= rows )
        return null;

    return { row : row, col : col };
}