
const checkTwo = (char, x, o) => {
    if (x === 2 && o === 2) {
        return 'invalid'
    }
    if (x === 2 && char === 'x' ) {
        return true
    }
    if ( o === 2 && char === 'o') {
        return true
    }

}
const checkThree = (char, board) => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i in winningCombinations){
        const [a, b, c] = winningCombinations[i]
        if(char === board[a] && board[a] === board[b] && board[b] === board[c]) {
            return true
        }
    }

}
const checkFour = (char, board) => {
    const winningCombinations = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10,11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];

    for(let i in winningCombinations){
        const [a, b, c, d] = winningCombinations[i]
        if(char === board[a] && board[a] === board[b] && board[b] === board[c] && board[c] === board[d]) {
            return true
        }
    }

}
const combination = (size, char, board) => {
    let xCount = 0;
    let oCount = 0;

    for(let i in board){
        if(board[i] === 'o'){
            oCount += 1
        }
        if(board[i] === 'x'){
            xCount += 1
        }
    }
    if(xCount > oCount + 1 || xCount < oCount - 1) {
        return 'invalid'
    }

    if(size === '2'){
        let res;
        if(char === 'x'){
            res = checkTwo(char, xCount, oCount)
        }
        else if(char === 'o'){
            res = checkTwo( char, xCount, oCount)
        }
        console.log(char, res)
        return res;
    }
    if(size === '3'){
        return checkThree(char, board)
    }
    if(size === '4'){
        return checkFour(char, board)
    }
}

const gameEngine = (size, game) => {
    
    let board = game.split(" ")
    for(let i =0; i < board.length; i++){
        board[i] = board[i].split('')
    }
    
    const xPath = combination(size, 'x', board.flat())
    const oPath = combination(size, 'o', board.flat())
    if( oPath === 'invalid'){
        return oPath
    }
    if( xPath === 'invalid'){
        return xPath
    }
    console.log(board, xPath, oPath);
    if(xPath === true) {
        if(oPath === true){
            return "invalid"
        }
        return 'x'
    }
    if(oPath === true) {
        return 'o'
    }
}

const solution = (input) => {
    let result = ''
    let xWin = 0
    let oWin = 0
    let invalid = 0

    for(let i in input){
        const res = gameEngine(input[i][0], input[i].substring(4))
        if(res === 'o') {
            oWin += 1
        }
        if(res === 'x') {
            xWin += 1
        }
        if(res === 'invalid') {
            invalid += 1
        }
    }
    result = `x: ${xWin} o: ${oWin} invalid: ${invalid}`

    return result
}

// const input = [
//     '3x3 xxo oo- oxx',
//     '2x2 xo x-',
//     '4x4 xoxo xoxo x--- xo--',
//     '3x3 xxo ooo oox',
//     '3x3 xxx ooo ---'
// ];
  
const input = [
    '4x4 xxxo o--- o-o- -oxx',
    '4x4 -xxo xxxx --oo -oo-',
    '4x4 o--- x--x xo-o oo-o',
    '4x4 -x-x xoxx ox-- oo-x',
    '4x4 oox- -xo- --ox oo-x',
    '4x4 --ox -oxx xx-x oooo',
    '4x4 -xxo oxo- xxx- o--o',
    '4x4 oxx- ---- oox- oxoo',
    '4x4 --oo --x- ---- -oxx',
    '4x4 o-o- xooo ox-- -ooo',

]
console.log(solution(input));