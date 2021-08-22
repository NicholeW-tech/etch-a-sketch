const container = document.querySelector('#container');
container.classList.add('grid');

function createGrid(row,column) {
    for (let i= 1; i <= (row*column); i++) {
        
        const square= document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        square.classList.add('gridItem');
        
       container.appendChild(square);
    }
}
createGrid(16,16);

function mouseOver(target) {
    target.style.backgroundColor= 'black';
}

container.addEventListener("mouseover", function(e) {
    target = e.target;
    if(target.matches("div")) {
        mouseOver(target);
    }
});