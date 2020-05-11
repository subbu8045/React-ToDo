function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right)
          quickSort(arr,left,pivotIndex-1);
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  }

  function getLargestElements(arr, count) {
      if(arr && arr.length) {
        var sortedArray = quickSort(arr);
        return count ? sortedArray.slice(arr.length - count) : arr[arr.length-1];
      }
  }
             
  getLargestElements([8,3,1,6,4,2,7,9,0,5], 3);