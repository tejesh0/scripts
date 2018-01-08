    // Given an array of integers, find the first missing positive integer in linear time and constant space.In other words, find the lowest positive integer that does not exist in the array.The array can contain duplicates and negative numbers as well.

// For example, the input[3, 4, -1, 1] should give 2. The input[1, 2, 0] should give 3.

// Time Complexity - O(n)
// Space Complexity - O(n)
function get_first_missing_pos_int(input) {
    // create a hash of input array
    var hash = {}
    var hash = input.reduce(function(acc, elm , i) {
        if(elm > 0) acc[elm] = true
        return acc
    }, {})
    var result = 1
    while(hash[result]) result += 1

    return result

}

// Test cases
console.assert(get_first_missing_pos_int([3, 4, -1, 1]) === 2, 'test case [3, 4, -1, 1] failed')
console.assert(get_first_missing_pos_int([1, 2, 0]) === 3, 'test case [1, 2, 0] failed')

////////////////////////////////////////////////////////////////////////////////////
// Solutin 2
// Time Complexity - O(n)
// Space Complexity - O(1)

function get_first_missing_pos_int(input) {
    var posInput;
    input.forEach(function(num, index) {
        if(num <= 0 && index < input.length-1) {
            // swap
            var temp = input[index]
            input[index] = input[index+1]
            input[index+1] = temp
        }
    })

    var cutIndex;
    input.forEach(function(num, index) {
        if(num > 0) {
            cutIndex = index
        }
    })
    input.splice(cutIndex+1, input.length)

    // input = [1,10,3,5,9]
    // Key idea: the result will be less than or equal to len(input) + 1

    // iterate over the input,
    // if number is less than input length, 
    // make the number in the index pos of the current number, negative of itself.
    input.forEach(function(num, index) {
        if (num <= input.length) {
            input[num-1] = -input[num-1]
        }
    })

    var result;
    input.forEach(function loop(num, index) {
        if (num > 0) {
            result = index + 1
        }
        if(result) loop.stop = true
    })
    if(!result) result = input.length + 1
    return result
}

console.assert(get_first_missing_pos_int([3, 4, -1, 1]) === 2, 'test case [3, 4, -1, 1] failed')
console.assert(get_first_missing_pos_int([1, 2, 0]) === 3, 'test case [1, 2, 0] failed')