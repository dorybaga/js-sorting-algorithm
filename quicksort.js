/*

if array length is > 1
  pick a pivot (usually [0] )
  iterate through array
  left [ ]
  right [ ]
  iterate through array and compare to pivot [ i ]
    if  < go to left [ ]
    else go to right
  return qs (left) concat [pivot] concat qs (right)

else return array

(keeps going thru until length of array is 1; then concats)

*/

var unsorted = [5, 10, 2, 15, 7];

function quickSort(arr){
    var leftArr = [];
    var rightArr = [];
    var pivot = arr[0];

  if (arr.length < 1){
    return arr;
  }

  for(var i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}
quickSort(unsorted);
var sorted = quickSort(unsorted);
console.log(sorted);