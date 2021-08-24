const container = document.querySelector('#container');
container.classList.add('grid');

function createGrid(gridNumber) {
    for (let i= 1; i <= (gridNumber * gridNumber); i++) {
        
        const square= document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        square.classList.add('gridItem');
        
       container.appendChild(square);
    }
}
createGrid(16);

function mouseOver(target) {
    target.style.backgroundColor= 'black';
}

container.addEventListener("mouseover", function(e) {
    target = e.target;
    if(target.matches("div")) {
        mouseOver(target);
    }
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    document.querySelectorAll("div").forEach(square => square.style.backgroundColor= "white")
} );
btn.addEventListener('click', () => {
    let newGridNumber= prompt("Choose a number between 0 and 100 for your grid size");
    if (isNaN(newGridNumber)|| newGridNumber >= 101) {
        alert ("Please enter a valid number")}
    else {
        createGrid(newGridNumber);
    }
});