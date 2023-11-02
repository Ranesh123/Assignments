function reverseWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Reverse each word and store them in an array
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words to form the final reversed sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example usage
const inputSentence = "Hai this is Ranesh";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "iaH siht si hsenaR"
