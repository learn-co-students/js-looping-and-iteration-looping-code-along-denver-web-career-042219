// Code your solutions in this file
function writeCards (people) {
  let messages = []
  for (let i = 0; i < people.length; i++) {
    messages.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`);
  }

  return messages;
}

function countdown (number) {
  let countdown = number;
  while (countdown >= 0) {
    console.log(countdown)
    countdown--
  }
}
