const array = [5, 2, 9, 1, 5, 6];

// Sorting the array in descending order
array.sort(function(a, b) {
  return b - a;
});
console.log(array); // Output will be [9, 6, 5, 5, 2, 1]
