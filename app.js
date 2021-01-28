// Here's some variable initialization

let randomNumber = Math.floor(Math.random() * 100) + 1

// Let's make some selections in the browser

const game = document.querySelector('#game'),
  guessBtn = document.querySelector('.guess-btn'),
  guessInput = document.querySelector('#guessInput'),
  message = document.querySelector('.message')

// Listen for a user's guess on a mouse click

guessBtn.addEventListener('click', function () {
  let guess = Number(guessInput.value).toFixed(2)
  // check for stupidity
  if (guess > 100 || guess < 1 || isNaN(guess)) {
    setMessage(`I asked for a number between 1 and 100.`)
  }
  // win condition
  else if (guess === randomNumber) {
    setMessage(
      `Congratulations. ${randomNumber} is correct. You should be really proud of yourself.`
    )
  } else {
    if (guess > randomNumber) {
      guessInput.value = ''
      setMessage(`${guess} is too high.`)
    } else {
      setMessage(`${guess} is too low.`)
    }
  }
})

// set message to print below guess text field

function setMessage(msg) {
  message.textContent = msg
}
