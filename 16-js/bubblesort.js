const myArray = [5, 3, 1, 4, 2];

// LOGIC PROGRAMMING
// IF and FOR LOOP
// Algorithms

// 1,2,3,4,5

// STEP BY STEP -> BUBBLE SORT
// 3,5,1,4,2
// 1,5,3,4,2
// 1,5,3,4,2
// 1,5,3,4,2

// 1,3,5,4,2
// 1,3,5,4,2
// 1,2,5,4,3

// 1,2,4,5,3
// 1,2,3,5,4

// 1,2,3,4,5

// FINISHED

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]; // 5
        array[i] = array[j]; // array[j] = 3;
        array[j] = temp; // array[i] = 5
      }
    }
  }
  return array;
};

const sortedArray = bubbleSort(myArray);
console.log(sortedArray);
