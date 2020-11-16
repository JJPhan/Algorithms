// DATE: 11/15/2020
// PROBLEM: Group Anagrams
			// function takes in an array of strings
			// group all anagrams together
// HIGH LEVEL STRATEGY:


    function groupAnagrams(words) {
        let anagrams = {};
        for (let i = 0; i < words.length; i++) {
            let sorted = words[i].split("").sort().join("")
            if (anagrams[sorted]) anagrams[sorted].push(words[i])
            if (!anagrams[sorted]) anagrams[sorted] = [words[i]]
        }
        
        return Object.values(anagrams)
    }