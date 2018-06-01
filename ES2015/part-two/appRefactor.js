$(document).ready(function () {
  const wordCount = 10;
  const guessCount = 4;
  const password = '';

  const start = $('#start').on('click', function () {
    $('#start-screen').toggleClass('show hide');
    $('#game-screen').toggleClass('hide show');
    startGame();
  });

  function toggleClasses(element, ...more) {
    more.forEach(args => {
      element.toggleClass(args);
    });
  }

  function startGame() {
    // get random words and append them to the DOM
    const wordList = $('#word-list');
    // 'words' variable is from words.js
    const randomWords = getRandomValues(words, wordCount); // eslint-disable-line no-undef
    randomWords.forEach((word) => {
      let li = wordlist.append("<li>word</li>");
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.on('click', updateGame);
  }

  // I think I can refactor this function with ES6 syntax, but not sure how
  function getRandomValues(array, numberOfVals) {
    return shuffle(array).slice(0, numberOfVals);
  }

  function shuffle(array) {
    let arrayCopy = [...array];
    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      let idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
    }
    return arrayCopy;
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    $('#guesses-remaining').text(`Guesses remaining: ${guessCount}.`);
  }

  function updateGame(e) {
    const target = $(event.target);
    if (target.is('li') && !target.hasClass('disabled')) {
      // grab guessed word, check it against password, update view
      //should i use .text(), or .val() here?  
      var guess = target.text();
      var similarityScore = compareWords(guess, password);
      target.addClass('disabled');
      target.text(`${guess} --> Matching Letters: ${similarityScore}`);
      setGuessCount(guessCount - 1);

      // check whether the game is over
      if (similarityScore === password.length) {
        $('#winner').toggleClass('hide show');
        this.off('click', updateGame);
      } else if (guessCount === 0) {
        $('#loser').toggleClass('hide show');
        this.off('click', updateGame);
      }
    }
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) {
      throw 'Words must have the same length';
    }
    let count = 0;
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  }
});