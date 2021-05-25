const sweeper = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      const row = [];
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          row.push(9);
        } else {
          row.push(neighbourChecker(grid, i, j));
        }
      }
      newGrid.push(row);
    }
    return newGrid;
  };
  
  const neighbourChecker = (grid, rowIndex, colIndex) => {
    let counter = 0;
    for (let i = rowIndex - 1; i <= rowIndex + 1 && i < grid.length; i++) {
      if (!!grid[i]) {
        for (let j = colIndex - 1; j <= colIndex + 1 && j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
            ++counter;
          }
        }
      }
    }
    console.log(counter);
    return counter;
  };
  
  sweeper( [
  
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 1, 0, 0],
    ])