/**
 * Your final solution should be implemented in the function below
 * @param {Array.<string>} input - An array containing the challenge inputs
 */

function solution(input) {
    let result = '';
    let xWin = 0;
    let oWin = 0;
    let invalid = 0;
  
    while (input.length > 0) {
      let boardSize = input.splice(0, 1)[0].split('x');
      let rows = parseInt(boardSize[0]);
      let cols = parseInt(boardSize[1]);
      let board = input.splice(0, rows);
  
      let winner = checkWin(board);
      if (winner === 'x') {
        xWin++;
      } else if (winner === 'o') {
        oWin++;
      } else if (winner === '-') {
        invalid++;
      }
    }
  
    result += `x:${xWin}\no:${oWin}\n-:${invalid}`;
  
    return result;
  }
  
  function checkWin(board) {
    const n = board.length;
  
    // Check rows
    for (let row of board) {
      if (new Set(row).size === 1 && row[0] !== '-') {
        return row[0];
      }
    }
  
    // Check columns
    for (let col = 0; col < n; col++) {
      const columnValues = [];
      for (let row = 0; row < n; row++) {
        columnValues.push(board[row][col]);
      }
      if (new Set(columnValues).size === 1 && columnValues[0] !== '-') {
        return columnValues[0];
      }
    }
  
    // Check diagonal from top-left to bottom-right
    const diagonalValues = [];
    for (let i = 0; i < n; i++) {
      diagonalValues.push(board[i][i]);
    }
    if (new Set(diagonalValues).size === 1 && diagonalValues[0] !== '-') {
      return diagonalValues[0];
    }
  
    // Check diagonal from top-right to bottom-left
    const reverseDiagonalValues = [];
    for (let i = 0; i < n; i++) {
      reverseDiagonalValues.push(board[i][n - 1 - i]);
    }
    if (
      new Set(reverseDiagonalValues).size === 1 &&
      reverseDiagonalValues[0] !== '-'
    ) {
      return reverseDiagonalValues[0];
    }
  
    return '-';
  }
  
  /////////////////////// Ignore the code below //////////////////////////////////
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  
  let inputString = '';
  
  process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
  });
  
  process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n');
  
    main();
  });
  
  function main() {
    console.log(solution(inputString));
  }