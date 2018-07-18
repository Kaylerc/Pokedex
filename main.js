

allPokemon = [];

var trainer = {
  firstName: 'Langly',
  battlesWon: 1839,
  walkingDistance: 1505,
  pokemonCaught: 663,
  pokemonEvolved: 278,
  eggsHatched: 580,
  berriesfed: 3093,
  trainingLevel: 28,
  // pokemon: allPokemon,
  // getPokemon: function() {
  //   return this.pokemon;
  // }
  // p1: pokemon1 = {
  //
  // }
  // all: function() {
  //   return allPokemon;
  // }
}
//
//
// function createPokemon(---,----) {
//   var pokemon = {
//     name: name,
//     hp: email
//   }
//   totalallPokemon++;
//   allPokemon.push(pokemon);
// }
//


function loadPokemon1() {
  var newPoke = new XMLHttpRequest();
  newPoke.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokedata = JSON.parse(this.responseText);
      name: document.getElementById("name").innerHTML = pokedata.name;
      hp: document.getElementById("hp").innerHTML = pokedata.stats[5].base_stat;
      attack: document.getElementById("attack").innerHTML = pokedata.stats[4].base_stat;
      defense: document.getElementById("defense").innerHTML = pokedata.stats[3].base_stat;
      abilities: document.getElementById("abilities").innerHTML = pokedata.abilities[0].ability.name;
      abilities2: document.getElementById("abilities2").innerHTML = pokedata.abilities[1].ability.name;
      console.log(pokedata);
    }
    // totalallPokemon++;
    // allPokemon.push(pokemon);
  };
  newPoke.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/1.json", true)
  // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
  newPoke.send();
}
