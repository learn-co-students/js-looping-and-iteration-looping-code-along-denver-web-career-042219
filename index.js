// Code your solutions in this file
const writeCards = (arr, word) => {
  let thankYouCards = []
  for( let i = 0; i < arr.length; i++){
  thankYouCards.push( `Thank you, ${arr[i]}, for the wonderful ${word} gift!` )
  }
  return thankYouCards
}


function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}
