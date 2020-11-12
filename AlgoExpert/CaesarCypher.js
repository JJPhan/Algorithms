// DATE: 11/12/2020
// PROBLEM: Caesar Cipher Encryptor 
			// given nonempty string of lowercase letters & a key (non-negative integer)
			// write a function that returns a new string obtained by shifting every letter in the input string
				// by shifting every letter in the input string by k positions in the alphabet
// HIGH LEVEL STRATEGY:
			// create alphabet string
			// iterate through the given string
			// find its index + k in the alphabet string to shift it
			// use % 26 to re-round if it overflows

function caesarCipherEncryptor(string, key) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz" 
	let brokenStr = string.split("")
	let newStr = ""
	
	for (let i = 0 ; i < brokenStr.length; i++) {
		let idx = (alphabet.indexOf(string[i]) + key) % 26
		newStr += alphabet[idx]
	}
	return newStr
}