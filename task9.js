function task9(word){
  let lcaseWord= word.toLowerCase();
  let wordChar = [...lcaseWord];
  let vowels =[];
  for(let i =0;i<wordChar.length;i++){
    if(wordChar[i] === 'a'){
      vowels.push(wordChar[i]);
    }
  }
  for(let i =0;i<wordChar.length;i++){
    if(wordChar[i] === 'e'){
      vowels.push(wordChar[i]);
    }
  }
  for(let i =0;i<wordChar.length;i++){
    if(wordChar[i] === 'i'){
      vowels.push(wordChar[i]);
    }
  }
  for(let i =0;i<wordChar.length;i++){
    if(wordChar[i] === 'o'){
      vowels.push(wordChar[i]);
    }
  }
  for(let i =0;i<wordChar.length;i++){
    if(wordChar[i] === 'u'){
      vowels.push(wordChar[i]);
    }
  }

  return vowels;

}

console.log(task9("Hello there Andy"));

module.exports={task9};