function task5(num1,num2,num3){
  let arr = [num1,num2,num3];
  let max = arr[0];
  for(let i=1;i<arr.length;i++){
     if(max<arr[i]){
       max = arr[i];
     }
  }

  return max;
}

task5(-1,-2,-3);

module.exports={task5};