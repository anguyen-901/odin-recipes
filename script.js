const grid = document.createElement('div');
grid.classList.add('grid');
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    });
    square.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = "";
    });
    grid.appendChild(square);
  }
}

// Add the grid to the document
document.body.appendChild(grid);