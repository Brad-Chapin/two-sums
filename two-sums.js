function twoSums (arr, target){
  let sumIndexes = [];
  sortedArr = arr.slice();
  sortedArr.sort(function(a, b) {
  return a - b;
  });
  // console.log(arr, sortedArr);
  let x = 0;
  let y = sortedArr.length;
  for (let i = 0; i < sortedArr.length; i++){
    if (sortedArr[x] + sortedArr[y] === target){
      sumIndexes.push(arr.indexOf(sortedArr[x]), arr.indexOf(sortedArr[y]));
      console.log(sumIndexes);
      return sumIndexes;
    } else if (arr[x] + arr[y] < target){
      x++;
    } else {
      y--;
    }
  }
}

twoSums ([1, 4, 5, 2, 7, 9], 11); //expect [3, 5]
//[ 1, 2, 4, 5, 7, 9 ]
twoSums ([4, 9, 18, 3, 6, 5, 2], 24); //expect [4, 2]
//[ 2, 3, 4, 5, 6, 9, 18 ]
