function twoNumberSum(array,target){
    for(let i = 0; i < array.length; i ++){
        let num1 = array[i] // getting our first number
        for(let j = i + 1; j < array.length; j ++){ // for the inner loop we have i + 1 because we do not want to add the same number to it self
            let num2 = array[j] // getting our second number
            if(num1 + num2 == target){ // checking if is equal to our target, if se we return it inside an array and sort it( this is O(1) due to us always giving it the same value of two numbers )
                return [num1,num2].sort((a,b)=> a - b)
            }
        }
    }
    return [] // if no two number sums up to target we return and empty array
}

exports.twoNumberSum = twoNumberSum
