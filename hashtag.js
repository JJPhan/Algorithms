// "ab#" => "a"
// "a#b#" => ""
// "###aa##b" => "b"
    //###a#b
        // a#b
            // ###b 
// "abab#b##" => "ab"
    // aba# 
        // ab 
// DATE: 11/21/2020
// problem: remove letter if it proceeds a hash tag
    //return string without hash tag
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



