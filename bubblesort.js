var unsorted = [65, 23, 79, 64, 49, 77, 6];

function bubbleSort(arr){
  // loop through array
  // if arr[i] > arr[i+1] is true, swap
    // if false, don't swap

  // keep looping until swap is false??


  // iterate over each element
  // check if this index is greater than next index
  // if is greater, swap the two elements

  // loop through the array again repeat instructions for each element in the array


  for (var j = 0; j < arr.length; j++){
    for (var i = 0; i < arr.length; i++){
      if (arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
    return arr;
}

bubbleSort(unsorted); // should return the sorted array
var sorted = bubbleSort(unsorted);
console.log('sorted', sorted);


function bubbleSort2(arr){

  var swap = true;
  while (swap){
    swap = false;

    for (var i = 0; i < arr.length; i++){
      if (arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swap = true;
      }
    }
  }

  return arr;
}

bubbleSort2(unsorted); // should return the sorted array
var sorted2 = bubbleSort(unsorted);
console.log('sorted2', sorted2);

function bubbleSort3(arr){
  var swap = false;

  do {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swap = true;
      }
    }
  } while(swap);

  return arr;
}

bubbleSort3(unsorted); // should return the sorted array
var sorted3 = bubbleSort(unsorted);
console.log('sorted3', sorted3);