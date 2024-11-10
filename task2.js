function task2(name){
  try{
    if(typeof name!== 'string'){
      throw new Error('Hello Friend!');
    }
    console.log(`Hello ${name}!`);
  }
  catch(err){
    console.log(err.message);
  }

}

try{
  //call function in here
  task2(Zane);
}
catch(err){
  console.log("Please call function with string.");
}



module.exports ={task2};