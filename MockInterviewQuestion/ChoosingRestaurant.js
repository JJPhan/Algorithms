// Date: 12/15/2020
// Interviewer - Sami
// Choosing A Restaurant - No Prompt, Verbal Explanation

// requests = [
//     {
//         Name: sami
//         Cuisine: burgers
//         Price: ‘$’
//     },
//     {
//         Name: Jordan,
//         Cuisine: Sushi
//         price: ‘$$’
//     },
//     {
//         Name: John,
//         Cuisine: ‘burgers, sushi, and pizza, hot dogs, hamburgers, pineapple’
//         Price: ‘$$$’
//     }
//     ]
//     Restaurants = [
//             {1111
//                 Name: in&out
//                 Cuisine: burgers
//                 price:’$$’
                
//         },
//     {11111
//             Name: moriSushi
//             Cuisine: sushi
//             price:’$’
//     },
//     {
//             Name: olympic flame
//             Cuisine: pizza
//             price:’$$$’
//     }
//         ]
//     output : ‘moriSushi’
//     Output : will not be in and out
    
//     Problem: 
//     // basically I want to see how many votes each place receives
//     // each person can vote for a place based off cuisine, its price, or both
//     //  return the place with most votes
//     High Level Solution:
//     // create a hash with restaurant as a keys, values would be its votes
//     // Nested Loop - Bad Optimization
//     // compare request[i][key] to restaurants[i][key]
//     // if anything matches increase the vote
    
//     Function pickRestaurants(request, rest) {
//         Let votes = {}
        
//     // create a hash with restaurant names as keys
//         For (let j = 0; j < restaurant.length; j++ ) {
//     Let restName = restaurant[j][Name] 
//     votes[restName] = 0
//     }
    
    
//     // iterate through the people
//         For (let i = 0; i < request.length; i++) {
//         // iterate through restaurants
//         For (let j = 0; j < restaurant.length; j++ ) {
//         Let restName = restaurant[j][Name] 
//         Let currentRest = restaurant[j]
//         Let currentPerson = request[i]
    
//         If (currentPerson[cuisine].includes(currentRest[cuisine])) votes[restname] += 1
//         If (currentPerson[price].includes(currentRest[price])) votes[restname] += 1
//     }
//     }
    
//     Let highestVotes = 0
//     Let winner 
    
//     For (let i = 0; i < restaurant.length; i++ ) {
//     Let restName = restaurant[i][Name] 
//     If (votes[restName] >  highestVotes) {
//     winner = restName
//         highestVotes = votes[restName]
//     }
//     }
//     Return winner
//     }
    
//     Time Complexity : o(n*m*l) n = length of request array, m = length of restaurant array, l = length of the restaurant cuisine string
//     Space Complexity : o(m) 
    
// Sami's Solution

//     function pickRestaurants(request, rest) {
//         let winner;
//         let maxVotes = -Infinity
//         for(let rest of restaurants){
//              let votes = 0
//         for(let req  of requets){
//              If (rest[cuisine].includes(req[cuisine])) vote += 1
//              If (rest[price].includes(req[price])) votes += 1
    
//          }
    //     if(votes > maxVotes){
    //         winner = rest[name]
    //         maxVotes = votes
    //     }
//     }
//      return winner
//     }
    