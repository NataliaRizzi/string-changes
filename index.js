function StringChanges(str) { 

  // code goes here  
  const arr = str.split('');

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'M') {
      res.push(arr[i - 1] !== 'M' ? arr[i - 1] : '' || '');
    } else if (arr[i] === 'N') {
      i += 1;
    } else {
      res.push(arr[i]);
    }
  }
  return res.join(''); 
         
}

console.log(StringChanges('abcNdgM'))

module.exports = StringChanges;