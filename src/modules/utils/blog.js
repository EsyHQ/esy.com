function readingTime(text) {
    // Define the average reading speed (in words per minute)
    const wordsPerMinute = 200;
  
    // Calculate the number of words in the text
    const wordCount = text.split(/\s+/g).length;
  
    // Calculate the estimated reading time (in minutes)
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
    // Return the estimated reading time
    return readingTimeMinutes;
  }
  




  export default {
    readingTime
}