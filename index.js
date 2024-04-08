function analyzeSentence(sentence) {
  // Initialize counters
  let charCount = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Increment character count
    charCount++;

    // Check if the character is a letter (excluding punctuation)
    if (char.match(/[a-zA-Z]/)) {
      // Increment vowel count if the character is a vowel
      if (char.match(/[aeiouAEIOU]/)) {
        vowelCount++;
      }
    }

    // Check if the character is a space or the last character (period)
    if (char === " " || i === sentence.length - 1) {
      // Increment word count
      wordCount++;
    }
  }

  // Return the results
  return { charCount, wordCount, vowelCount };
}

// Example usage
const userSentence = "This is an example sentence.";
const { charCount, wordCount, vowelCount } = analyzeSentence(userSentence);
console.log(`Length of the sentence: ${charCount} characters`);
console.log(`Number of words in the sentence: ${wordCount}`);
console.log(`Number of vowels in the sentence: ${vowelCount}`);
