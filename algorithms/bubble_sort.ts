export default function bubbleSort(array: number[]): Array<number> {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;

    for (let j = 0; j < array.length - i - 1; j++) {

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;
      }

    }
    
    if (!swapped) break;

  }

  return array;
}


// we take an array
// [5, 6, 1, 9, 0]
// the first loop gives us the number of the turn, 0 for the first
// we use that number to get the index of the last item (array.length - i - 1) in our case 5 - 0 - 1 which is 4
// if any of the numbers that have an index lower than 3, they get compared to the last element
// which is the one that has the index 4 in this case
// each of those numbers gets compared to the one that has the last index
// if it's bigger than the number having the biggest index (4 in this case)
// then we swap them
// [5, 6, 1, 0, 9]
// and the loop returns, the i gets incremented so now we stop at 5 - 1 - 1 which is 3
// and the process repeats itself until the array is sorted by an ascending order


//! NEEDS FIXING