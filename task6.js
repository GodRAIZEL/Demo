function task6(...numbers){
  let arr = numbers;
  let max = arr[0];
  for(let i=1;i<arr.length;i++){
     if(max<arr[i]){
       max = arr[i];
     }
  }
  
  return max;
}

task6(2);

module.exports = {task6};
