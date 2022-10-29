let unsortedArr = [1, 5, 8 , 7, 6, -1, -5, 4, 9, 5]

let output = [];

function meanderArray(unsorted){
  let sorted = unsorted.sort((a, b) => a-b);
  let firstSmallest = sorted[0];
  let firstLargest = sorted[unsorted.length-1];

  for(let i = 0; i <= sorted.length; i++){
  //I should increment firstSmallest and decrement firstLargest numbers and store in output
  } 
 return output;
}
meanderArray(unsortedArr);
console.log(output);




   