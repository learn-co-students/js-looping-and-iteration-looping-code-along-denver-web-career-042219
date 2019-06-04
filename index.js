// Code your solutions in this file
function writeCards() {
    let names = [ 'Lisa', 'Kaitlin', 'Jan']
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
return newArray
}

function countdown(number){
    let i = number
    do {
      console.log(i)
      i -= 1
    } while (i >= 0)
}
