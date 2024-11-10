function task8(min){
  let hours;
  let remMin;
  if(min>=60){
    if(min%60===0){
      hours=min/60;
      if(hours>1){
        return `${hours} hours, 0 minutes`;
      }
      else
      {
        return `${hours} hour, 0 minutes`;
      }
    }

    else{
      hours = Math.floor(min/60);
      remMin = min-(hours*60);

      if(hours>1){
        if(remMin>1){
        return `${hours} hours, ${remMin} minutes`;
        }
        else{
          return `${hours} hours, ${remMin} minute`;
        }
      }
      else
      {
        if(remMin>1){
          return `${hours} hour, ${remMin} minutes`;
          }
          else{
            return `${hours} hour, ${remMin} minute`;
          }
      }
    }

  }
  else{
    if(min>1 || min ===0)
    return `0 hours, ${min} minutes`;
     else
     return `0 hours, ${min} minute`;
  }
}

console.log(task8(1));

module.exports={task8};