//A simple redo fo my personal understanding
function twoNumberSum(array,target){
    for(let i = 0; i < array.length - 1; i++){
        let num1 = array[i]
        for(let j = i + 1; j < array.length; j++){
            num2 = array [j]
            let sum = num1 + num2
            if (sum === target){
                return [num1,num2].sort((a,b)=> a - b)
            }
        }
    }
    return []
}

exports.twoNumberSum = twoNumberSum