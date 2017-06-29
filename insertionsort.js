var unsorted = [5, 10, 2, 15, 7];

function insertionSort(arr){
  for(var i = 0; i < arr.length; i++){
    var current = arr[i];
    var prev = i - 1;

    while (prev >= 0 && arr[prev] > current){
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }

  return arr;
}

insertionSort(unsorted);
var sorted = insertionSort(unsorted);
console.log(sorted);