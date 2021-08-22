const container = document.querySelector('#container');
container.classList.add('grid');

function createGrid(row,column) {
    for (let i= 1; i <= (row*column); i++) {
        
        const square= document.createElement('div');
        square.classList.add('gridItem');
        square.setAttribute('id','cell')
        square.textContent = 'Hello kitty'
       container.appendChild(square);
    }
}
createGrid(16,16);



const cells= document.getElementById('cell');

cells.addEventListener("mouseover", func);
cells.addEventListener("mouseout", func1);

function func() {
    cells.setAttribute("style", "background-color: black;")
}

function func1() {
    cells.setAttribute("style", "background-color: plum")
}
