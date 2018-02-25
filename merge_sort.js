//Merge sort

function mergeSort(array){
  if (array.length < 2){
    return array;
  }
  else{
    let middle = Math.floor(array.length/2);
    let leftArray = array.slice(0,middle);
    let rightArray = array.slice(middle,array.length);
    return stitch(mergeSort(leftArray),mergeSort(rightArray));
  }
}

function stitch(left,right){
  let results = [];
  while(left.length && right.length){
    if(left[0] <= right[0]){
      results.push(left.shift());
    }
    else{
      results.push(right.shift());
    }
  }
  while(left.length){
    results.push(left.shift());
  }
  while(right.length){
    results.push(right.shift());
  }
  return results;
}
  
  

console.log(mergeSort([2,7,8,9,5,3]))
