function StringChanges(str) { 
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];
    const prevChar = str[i - 1] || '';
    if (curChar === 'M') res += prevChar === 'M' ? '' : prevChar;
    else if (curChar === 'N') i++;
    else res += curChar;
  }
  // code goes here  
  return res; 
         
}

module.exports = StringChanges;