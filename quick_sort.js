//Quick Sort

function quickSort(array){
  if(array.length <= 1){
    return array;
  }
  else{
    let leftArray = [];
    let rightArray = [];
    let pivot = array[array.length-1];
    for(let i=0;i<array.length-1;i++){
      if(array[i]<pivot){
        leftArray.push(array[i]);
      }
      else{
        rightArray.push(array[i]);
      }
    }
    return quickSort(leftArray).concat(pivot,quickSort(rightArray));
  }
}


console.log(quickSort([2,9,4,7,5,11,3])); 


