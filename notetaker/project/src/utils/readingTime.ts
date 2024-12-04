export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const calculateMinimumViewTime = (content: string): number => {
  const readingTime = calculateReadingTime(content);
  // Minimum time is 30% of the estimated reading time (in milliseconds)
  return readingTime * 0.3 * 60 * 1000;
};