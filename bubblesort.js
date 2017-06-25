// iterate over each element
// check if index is greater than next index
// if it is greater, swap the two elements

// loop through the array again, repeat instructions for each element in the array (length of array)


var unsorted = [65, 23, 79, 64, 49, 77, 6];

// method 1: nested for loops ----------------------------

function bubbleSort(arr){

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

bubbleSort(unsorted);
var sorted = bubbleSort(unsorted);
console.log('sorted', sorted);


// method 2: while loop ----------------------------

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

bubbleSort2(unsorted);
var sorted2 = bubbleSort(unsorted);
console.log('sorted2', sorted2);

// method 3: do, while ----------------------------

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

bubbleSort3(unsorted);
var sorted3 = bubbleSort(unsorted);
console.log('sorted3', sorted3);