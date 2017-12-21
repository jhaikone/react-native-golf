export default calculateScore = (array, key, start, end) => {
  if (start > array.length - 1 || end > array.length - 1) return 0;
  return array.reduce((prev, current, i) => {
    if (i >= start && i <= end) {
      return prev + current[key]
    } else {
      return prev;
    }
  }, 0);
};