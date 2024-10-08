// Problem: https://www.greatfrontend.com/questions/javascript/unique-array?list=three-months

export default function uniqueArray(array) {
  const result = [];
  const seen = new Set();

  array.forEach((item) => {
    if (!seen.has(item)) {
      result.push(item);
      seen.add(item);
    }
  });

  return result;
}
