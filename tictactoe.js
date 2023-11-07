

const combination = (char, board) => {
    let xCount = 0;
    let oCount = 0;
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

    for(let i in winningCombinations){
        const [a, b, c] = winningCombinations[i]
        if(char === board[a] && board[a] === board[b] && board[b] === board[c]) {
            return true
        }
    }

}

const gameEngine = (game) => {
    let board = game.split(" ")
    for(let i =0; i < board.length; i++){
        board[i] = board[i].split('')
    }
    
    const oPath = combination('o', board.flat())
    if( oPath === 'invalid'){
        return oPath
    }
    const xPath = combination('x', board.flat())
    if( xPath === 'invalid'){
        return xPath
    }

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
        const res = gameEngine(input[i])
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

const input = [
    'xxo xxo xxo',
    'xox oxo x--',
    'ooo x-- xx-',
    'xxx ooo ---',
    'oox xox --x'
];
  
console.log(solution(input));