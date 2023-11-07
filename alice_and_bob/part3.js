



/**
 * @param {number[]} stoneValue
 * @return {string}
 */
const stoneGameIII = (stoneValue) => {
    let alice = 0
    let bob = 0
    if(stoneValue.length <= 3){
        let res = sum(stoneValue)
        if(res > 0){
            return 'Alice'
        }
        return "Bob"
    }

    let i = 0;
    let count = 1
    while(stoneValue[i] !== undefined){
        let j = i + 3

        let selectList = stoneValue.splice(i, j)
        if(count % 2 === 0) {
            bob += sum(selectList)
        }
        else {
            alice += sum(selectList)
        }
        count += 1
    }
    
    if(alice > bob){
        return "Alice"
    }
    else if(bob > alice){
        return "Bob"
    }else {
        return "Tie"
    }

};


const input = [1,2,3,7]
console.log(stoneGameIII(input))

