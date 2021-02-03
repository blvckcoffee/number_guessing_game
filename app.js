// Here's some variable initialization

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesRemaining = 10;
let totalGuesses = 0;

// Let's make some selections in the browser

const game = document.querySelector('#game'),
  guessBtn = document.querySelector('.guess-btn'),
  guessInput = document.querySelector('#guessInput'),
  message = document.querySelector('.message');

// Listen for a user's guess on a mouse click

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  // check for stupidity
  if (guess > 100 || guess < 1 || isNaN(guess)) {
    setMessage(`I asked for an INTEGER between 1 and 100.`);
  }
  // win condition
  else if (guess === randomNumber) {
    setMessage(
      `Congratulations. ${randomNumber} is correct. It took you ${totalGuesses} total guesses. You should be really proud of yourself.`
    );
  } else {
    // incorrect guess
    guessesRemaining -= 1;
    totalGuesses += 1;
    // lose condition
    if (guessesRemaining === 0) {
      setMessage(
        `You aren't very good at this. The correct number was ${randomNumber}.`
      );
    } else if (guess > randomNumber) {
      guessInput.value = '';
      setMessage(
        `${guess} is too high. You have taken ${totalGuesses} guesses. You have ${guessesRemaining} guesses left.`
      );
    } else {
      setMessage(
        `${guess} is too low. You have taken ${totalGuesses} guesses. You have ${guessesRemaining} guesses left.`
      );
    }
  }
});

// set message to print below guess text field

function setMessage(msg) {
  message.textContent = msg;
}
