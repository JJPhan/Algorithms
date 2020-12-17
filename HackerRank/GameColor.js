
// how would you use a counter 
// "wwwbbbbwww"
// "wwbbbbww"
// "wwbbbww" => wendy loses

// w : 1
// b: 2 => if tie bobby wins

// count consecutive elements, if i === i + 1 => counter += 1 : counter = 0
// if counter >= 3 => player counter += 1
// whoever's player counter is greater wins

// Problem: 
    // players will alternate turns
    // if three of their colors are in a row, we can pluck one out -> basically its collaspe, but maybe i dont gotta do that
    // if they cant pluck any colors out they lose
    //

// New Strategy 
    // 

function game(colors) {
    let hash = {
        "b": 0,
        "w": 0
    }
    
    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i] === colors[i+ 1]
            && colors[i] === colors[i - 1]) {
            hash[colors[i]] += 1
        }
    }
    return hash["b"] >= hash["w"] ? "bob" : "wendy"
}

console.log(game("wwwbbbbwww")) // bob
console.log(game("bbwwwbb"))  // wendy
console.log(game("bbbbwwwbbb")) //bob
console.log(game("wbwbwbwbbb")) // bob








// function game(colors) {
    // colors = colors.split("")
    // let current = "w"
    // let i = 0
    // let counter = 0
    // while ( i <= colors.length - 3) {
        // if (current === colors[i]
        //     && current === colors[i+1]
        //     && current === colors[i+2]) {
        //         colors.splice(i, 1) 
        //         i = 0 
        //         current = current === "w" ? "b" : "w"
        //         continue
        //     }
        // i += 1
    // }
    // return current === "w" ? "bob" : "wendy"
// }

// if (colors[i] === current) counter += 1
// if (colors[i] !== current) current = current === "w" ? "b" : "w"