const container = document.querySelector('#container');
container.classList.add('grid');

function createGrid(row,column) {
    for (let i= 1; i <= (row*column); i++) {
        
        const square= document.createElement('div');
        square.classList.add('gridItem');
        square.textContent = 'Hello you'
       container.appendChild(square);
    }
}
createGrid(16,16);