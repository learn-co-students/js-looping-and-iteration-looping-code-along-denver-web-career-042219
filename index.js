function writeCards(array, event){
  const writeCardsArray = []
  for (let i = 0; i < array.length; i++){
    writeCardsArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
  return writeCardsArray
}

function countdown(c){
  let i = c
  while (i >= 0){
    console.log(i)
    i--
  }
}
