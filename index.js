function stringLength(string){
  let count = 0;

  if(string > 0 && string < 10){
    for( let i = 0; i < string.length; i++) {
      count++
  } return count;
  } else {
    throw new Error('You have passed the limit');
  }
   
}

module.exports = stringLength;