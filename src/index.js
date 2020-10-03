module.exports = function check(str, bracketsConfig) {
  let array = str.split('');
  let n = array.length / 2;
  for (let j = 0; j < n; j++){
    for (let i = 0; i < array.length; i++){
      if (array[i] == '(' && array[i+1] == ')' || array[i] == '|' && array[i+1] == '|' || array[i] == '[' && array[i+1] == ']' || 
      array[i] == '{' && array[i+1] == '}' || array[i] == '1' && array[i+1] == '2' || array[i] == '3' && array[i+1] == '4' || 
      array[i] == '5' && array[i+1] == '6' || array[i] == '7' && array[i+1] == '7' || array[i] == '8' && array[i+1] == '8'){
        array.splice(i, 2);
    }
  }
}
  if (array.length == 0) return true;
  else return false;
}
