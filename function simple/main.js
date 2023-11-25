function concatstrings (str1, str2){
    return str1. concat (str2)
}
const str1= "hello"
const str2= " world"
const result = concatstrings (str1,str2)
    console.log(result);


function StringToLowerCase (inputString){
    return inputString.toLowerCase()
}
const theFirstString = "ЭТО БУДЕТ НА НИЖНЕМ УРОВНЕ"
const result2 =StringToLowerCase(theFirstString)
console.log(result2);


// function replaceAllOccurances (inputString, targetSubstring, replacement){
//     return inputString.replaceAll(targetSubstring, replacement)
// }
// const the2string = "правильно это правильно а вот провилна  "
// const the3string = stringToAllReplace(the2string,'провилна','правильно');
// console.log(the3string);


function replaceAllOccurrences(inputString, stringToReplace, replacement) {
    
    return inputString.replaceAll(stringToReplace, replacement);
  }
  
 
  const originalString = "Это текст с некоторыми повторяющимися словами. Это текст.";
  const substringToReplace = "Это";
  const replacement = "Замена";
  const result3 = replaceAllOccurrences(originalString, stringToReplace, replacement);
  console.log(result);

  
