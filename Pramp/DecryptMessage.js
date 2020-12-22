// Problem:
// Date: 12/21/2020

// Encrypting
  // Message consist of only lowercase latin
  // Based off these conditions
      // 1) covert every letter to its ASCII value
      // 2) Add 1 to the first letter
      // 3) For every letter from the second to last one, add the value of the previous letter
            // step 2; c = 100
            // step 1; r = 114
            // step 2; c (step 2) + r (step 1)  = 214 (re-assign previous step2 variable as this number) so c + r = 214 
      // 4) Subtrack 26 from every letter until it is in the range of lowercase letter
      // 5) covert this value back to letters


// Problem is to Decrypt something
  // takes in a string
  // returns decrypted word


// String.character code ; "c".charCodeAt() => 99
// String.fromCharCode(numbrer) => 

// High Level Solutions

// For the first number only 
   //=> Helper Function; Takes in the string, and maybe a variable
   // Itll return the first letter converted, and itll save its ascii value into the variable
   //
   // We apparently cant decrypt anything but the first character without basing it off of anything
   // step 1) chanage string[0] => ascii 
   // subtract 1 from this number, use fromCharCode to reverse it back to original letter

// Helper Function 2; for every other number
   // 


   function decrypt(word) {
    // your code goes here
  }
  



/// RONS ANSWER
  /* 2:48 - 3:09 */
  /* 21 minutes */
  
//   function decrypt(word) {
//     // your code goes here
    
//     if (word === '') return word
    
    // String.prototype.charCodeAt()
    // String.fromCharCode()
  
    // Encryption:
    // Add 1 to the first letter.
    // Add previous letter value to the current letter.
    // Subtract 26 from every letter until it is in the range of lowercase letters.
    // Convert number back to a letter.
    
    // Decryption:
    // First letter.
    // Convert to number.
    // Subtract 1.
    // Convert number back to a letter.
    
    // Second number and onward.
    // Convert to a number.
    // Subtract previous number.
    // Add 26 until it is a positive number.
    // Convert number back to a letter.
    
//     const aCode = 'a'.charCodeAt()
    
//     const decrypted = [String.fromCharCode(word[0].charCodeAt() - 1)]
    
//     if (word.length === 1) return decrypted.join('')
    
//     for (let i = 1; i < word.length; i++) {
//       let sum = word[i].charCodeAt() - word[i - 1].charCodeAt()
      
//       while (sum < aCode) {
//         sum = sum + 26
//       }
      
//       decrypted[i] = String.fromCharCode(sum)
//     }
    
//     return decrypted.join('')
//   }
  
