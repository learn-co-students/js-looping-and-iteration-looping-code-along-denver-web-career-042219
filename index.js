let names = ["Ada", "Brendan", "Ali"];

function writeCards(names) {
    let thankyous = []
    for (let i = 0; i < names.length; i++) {
        thankyous.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankyous
}

function countdown(numbers) {
    while (numbers > 0 ) {
      console.log(numbers);
      numbers -= 1;
    }
    console.log(numbers);
  }



writeCards(names)

