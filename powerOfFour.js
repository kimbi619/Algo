
/**
 * 
 * @param { integer } n 
 * @returns boolean if number is a power of four (4)
 */
const isPowerOfFour = (n) => {

    if(n === 4 || n === 1){
        return true
    }
    if(n % 4 !== 0 ){
        return false
    }

    return isPowerOfFour( Math.floor(n / 4) )

}

const solution = (input) => {
    let res = []
    for(let i in input){
        res[i] = isPowerOfFour(input[i])
    }

    return res
}


const input = [4, 2, 16, 9, 12, 64, 3, 27]
console.log(solution(input))