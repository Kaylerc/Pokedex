 allPokemon = [];
 function newPokemon(name, hp, attack, defense, abilities){
   var pokemon = {
      name: name,
      hp: hp,
      attack: attack,
      defense: defense,
      abilities: abilities

}
allPokemon.push(pokemon);
}

var trainer = {
  name: 'Kayler',
  pokemon: allPokemon,
  all: function() {
    return allPokemon;
  },

  get: function (name) {

  }

}


function loadPokemon() {
  var newPoke = new XMLHttpRequest();
  newPoke.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokedata = JSON.parse(this.responseText);

      newPokemon(pokedata.name, pokedata.stats[5].base_stat, pokedata.stats[4].base_stat, pokedata.stats[3].base_stat, [pokedata.abilities[0].ability.name, pokedata.abilities[1].ability.name])

      name: document.getElementById("name").innerHTML = pokedata.name;
      hp: document.getElementById("hp").innerHTML = pokedata.stats[5].base_stat;
      attack: document.getElementById("attack").innerHTML = pokedata.stats[4].base_stat;
      defense: document.getElementById("defense").innerHTML = pokedata.stats[3].base_stat;
      abilities: document.getElementById("abilities").innerHTML = pokedata.abilities[0].ability.name;
      abilities2: document.getElementById("abilities2").innerHTML = pokedata.abilities[1].ability.name;
      abilities3: document.getElementById("abilities3").innerHTML = pokedata.abilities[2].ability.name;



      // name: document.getElementById("name").innerHTML = pokedata.name;
      // hp: document.getElementById("hp").innerHTML = pokedata.stats[5].base_stat;
      // attack: document.getElementById("attack").innerHTML = pokedata.stats[4].base_stat;
      // defense: document.getElementById("defense").innerHTML = pokedata.stats[3].base_stat;
      // abilities: document.getElementById("abilities").innerHTML = pokedata.abilities[0].ability.name;
      // abilities2: document.getElementById("abilities2").innerHTML = pokedata.abilities[1].ability.name;


      // newPokemon(pokeName, pokeHp, pokeAttack, pokeDefense, pokeAbilities)
      //
      //
      // var pokeName = pokedata.name;
      //  document.getElementById("name").innerHTML = pokeName;
      //
      // var pokeHp = pokedata.stats[5].base_stat;
      //   document.getElementById("hp").innerHTML = pokeHp;
      //
      // var pokeAttack = pokedata.stats[4].base_stat;
      //   document.getElementById("attack").innerHTML = pokeAttack;
      //
      // var pokeDefense = pokedata.stats[3].base_stat;
      //   document.getElementById("defense").innerHTML = pokeDefense;
      //
      // var pokeAbilities = pokedata.abilities[0].ability.name;
      //   document.getElementById("abilities").innerHTML = pokeAbilities;
      //
      // var pokeAbilities2 = pokedata.abilities[1].ability.name;
      //   document.getElementById("abilities2").innerHTML = pokeAbilities2;

      console.log(pokedata);
    }

    // totalallPokemon++;
    // allPokemon.push(pokemon);
  };
  newPoke.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/39.json", true);
  // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
  newPoke.send();
}


// pokemon = {
//   name = bulbName,
//   hp = bulbHp,
//   attack: bulbAttack,
//   defense: bulbDefense,
//   abilities: [bulbAbilities, bulbAbilities2]
// }
