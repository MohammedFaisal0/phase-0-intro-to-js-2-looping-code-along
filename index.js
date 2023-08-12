// Code your solutions in this file
function writeCards(names, message) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
    array[i] = `Thank you, ${names[i]}, for the wonderful ${message} gift!`
  }
  return array;
}
function countDown () {
  for (let i=10; i>=0 ;i--){
    console.log(i)
  }
}