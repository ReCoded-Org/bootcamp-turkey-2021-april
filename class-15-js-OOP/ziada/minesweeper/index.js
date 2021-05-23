const input = [
  [0, 0, 9, 9],
  [9, 0, 9, 0],
  [0, 9, 9, 0],
  [9, 9, 9, 0]

]

function count(data, i, j) {
  let counter = 0;

  const prevRow = data[i - 1];
  const currentRow = data[i]
  const nextRow = data[i + 1];

  [prevRow, currentRow, nextRow].forEach(row => {
    if (row) {
      if (row[j - 1] === 9) {counter++};
      if (row[j] === 9) {counter++};
      if (row[j + 1] === 9) {counter++};
    }
  })
  console.log(counter)
  return counter;
}

count(input)

function update(data) {
  return data.map((row, i) => {
    return row.map((colCell, j) => {
      return colCell == 9 ? colCell : count(data, i, j)
    })
  })
}

const result = update(input)
console.log(result)
