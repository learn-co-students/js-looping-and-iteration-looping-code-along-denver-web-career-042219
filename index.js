// Code your solutions in this file
function writeCards(array, message){
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`)
  }
  return newArray
}

function countdown(num) {
  while (num >= 0) {
    console.log(num)
    num--
  }
}
