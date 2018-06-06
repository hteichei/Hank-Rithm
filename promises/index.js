//NUMBER ONE
$.getJSON('https://swapi.co/api/')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

//NUMBER TWO
$.getJSON('https://swapi.co/api/').then(function(data) {
  $.getJSON(data.films)
    .then(function(filmData) {
      filmData.results.forEach(function(film) {
        console.log(`${film.title} - ${film.director}`);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});

//NUMBER THREE
$.getJSON('https://swapi.co/api/planets/1/').then(function(people) {
  return Promise.all(people.residents.map($.getJSON))
    .then(function(residents) {
      residents.forEach(function(resident) {
        console.log(resident.name);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});

//NUMBER FOUR
var starWarsRacers = [];
starWarsRacers.push(
  $.getJSON('https://swapi.co/api/people/1/'),
  $.getJSON('https://swapi.co/api/people/4/')
);

Promise.race(starWarsRacers)
  .then(function(winner) {
    if (winner.name === 'Luke Skywalker') {
      console.log(`${winner.name} has saved the galaxy`);
    } else {
      console.log(`The galaxy has fallen to ${winner.name}`);
    }
  })
  .catch(function(error) {
    console.log(error);
  });
