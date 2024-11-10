function task10(word1,word2){

  let lowerCaseWord1 = word1.toLowerCase();
  let lowerCaseWord2 = word2.toLowerCase();
  


  function getAlphabet(word){
     let lonlyWord1= word.replace(/[^a-z]/g,'');
      return lonlyWord1;
  }

 let newWord1 = getAlphabet(lowerCaseWord1).split('');  
 let newWord2 = getAlphabet(lowerCaseWord2).split('');      
 let commonLetters=[];

 for(let i=0;i<newWord1.length;i++){
  for(let j=0;j<newWord2.length;j++){
     if(newWord1[i] === newWord2[j]){
        commonLetters.push(newWord2[j]);
     }
  }
 }

 function removeDuplicatesAndSort(arr){
     let noDupe = Array.from(new Set(arr));
     noDupe.sort();
     return noDupe;
 }

 let finalString ="";
 let orderedLetters = removeDuplicatesAndSort(commonLetters);
  
 if(orderedLetters.length===0){
  console.log("no common letters");
 }
 else if(orderedLetters.length>1){
   
   for(let i = 0; i<orderedLetters.length;i++){
    finalString += orderedLetters[i];
    if( i < orderedLetters.length-2){
      finalString += ", ";
    }
    else if( i === orderedLetters.length-2){
      finalString += " and ";
    }
   }

    console.log(finalString);
 }
 else{
  let firstLetter =  orderedLetters[0];
  console.log(firstLetter);
 }

}

task10("I like big cups!", "and I cannot lie!");

module.exports={task10};