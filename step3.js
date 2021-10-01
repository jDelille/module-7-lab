function find_longest_word(sentence) {
    let words = sentence.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    console.log('The length of the longest word is: ' + maxLength + ' charcters long')
  }


find_longest_word("The chinchilla was chinchillin'");
//chinchillin' = 12 characters

// BIG O RUNTIME - - - - - - > 
// Answer = 0(1). The function is a constant order.