let gridSize;
const gridSizeBtn = document.getElementById('gridSize');

gridSizeBtn.addEventListener("click", function() {
  const userInput = prompt('Please enter the size of the grid: ');
  if (userInput) {
    gridSize = userInput;
  } else {
    gridSize = 16;
  }
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
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
});

