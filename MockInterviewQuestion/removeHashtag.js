

// DATE: 11/21/2020
// Interviewer: Phillip for tenwei
// problem: 
        // remove letter if it proceeds a hash tag
        // return string without hash tag
            // "ab#" => "a"
            // "a#b#" => ""
            // "###aa##b" => "b"
            // "abab#b##" => "ab"

// high level solution:
    // create an array 
    // iterate through the string
    // if i = # array.pop
    // else array.push
    // return array.join("")

function removeHashTag(array) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "#") {
            arr.pop
        } else {
            arr.push(array[i])
        }
    }
    return arr.join("")
}



