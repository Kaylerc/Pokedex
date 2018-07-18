

// allPokemon = [pokemon1, pokemon2, pokemon3 ];

var trainer = {
  firstName: 'langly',
  battlesWon: 1839,
  walkingDistance: 1505,
  pokemonCaught: 663,
  pokemonEvolved: 278,
  eggsHatched: 580,
  pokestopsVisited: 1677,
  berriesfed: 3093,
  triningLevel: 28
  // all: function() {
  //   return allPokemon;
  // }
}




function loadPokemon1() {
  var newPoke = new XMLHttpRequest();
  newPoke.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokemon1 = JSON.parse(this.responseText);
      name: document.getElementById("name").innerHTML = pokemon1.name;
      hp: document.getElementById("hp").innerHTML = pokemon1.stats[5].base_stat;
      attack: document.getElementById("attack").innerHTML = pokemon1.stats[4].base_stat;
      defense: document.getElementById("defense").innerHTML = pokemon1.stats[3].base_stat;
      abilities: document.getElementById("abilities").innerHTML = pokemon1.abilities[0].ability.name;
      abilities: document.getElementById("abilities2").innerHTML = pokemon1.abilities[1].ability.name;
      console.log(pokemon1);
    }
  };
  newPoke.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/1.json", true)
  // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
  newPoke.send();
}
