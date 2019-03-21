function StringChanges(str) { 
  // code goes here  
  let splitted = str.split('');
  let newArr = [];
  let counter = 0;
  while (counter < splitted.length) {
    if (splitted[counter] === 'M') {
      if (splitted[counter-1] && splitted[counter-1] !== 'M') {
        newArr.push(splitted[counter-1]);
      }
      counter++;
    } else if (splitted[counter] === 'N') {
      // console.log(counter);
      counter = counter + 2;
      // console.log(counter);
    } else {
      newArr.push(splitted[counter]);
      counter++;
    }
  }
  
  let newStr = newArr.join('');

  return newStr; 
         
}

module.exports = StringChanges;