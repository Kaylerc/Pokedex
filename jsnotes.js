

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

// newPokemon(pokedata.name, pokedata.stats[5].base_stat, pokedata.stats[4].base_stat, pokedata.stats[3].base_stat, [pokedata.abilities[0].ability.name, pokedata.abilities[1].ability.name]   )
// name: document.getElementById("name").innerHTML = pokedata.name;
// hp: document.getElementById("hp").innerHTML = pokedata.stats[5].base_stat;
// attack: document.getElementById("attack").innerHTML = pokedata.stats[4].base_stat;
// defense: document.getElementById("defense").innerHTML = pokedata.stats[3].base_stat;
// abilities: document.getElementById("abilities").innerHTML = pokedata.abilities[0].ability.name;
// abilities2: document.getElementById("abilities2").innerHTML = pokedata.abilities[1].ability.name;



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

// ++++++++++++++++++++++++++++++++++++++++++++++


// https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_create_1

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("info").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
//   xhttp.send();
// }




//
// class Trainer {
//   constructor(name) {
//   this.name = name;
//   this.battlesWon = 1398;
//   this.pokemonCaught = 689;
//   this.pokemonEvolved = 435;
//   this.eggsHatched = 365;
//   this.trainingLevel = 28;
//   this.pokemon = {
//     function: function() {
//       loadPokemon1()
//     }
//   }
// }
// }



// var pokemon1 = {
//   name = pokedata.name,
//   hp = pokedata.stats[5].base_stat;
//   attack =
//   defense =
//   abilities =
//   abilities2 =
// }



// class Trainer {
//   this.name = name;
//   this.battlesWon = 1398;
//   this.pokemonCaught = 689;
//   this.pokemonEvolved = 435;
//   this.eggsHatched = 365;
//   this trainingLevel = 28;
//   this.pokemon = {
//     function: function loadPokemon1();
//   }
// }











// class Trainer {
//   constructor (trainerName) {
//       this.trainerName = 'Ash';
//   }
// }

Carmander = {


  }
}

// +++++++++++++++++++++++++

// class Trainer {
//   constructor(hp, attack, defense, abilities) {
//     this.hp = 0;
//     this.attack = 0;
//     this.defense = 0;
//     this.abilities = ''
//   }
// }
//
// class Lilo extends Trainer {
//   constructor(hp, attack, defense, abilities) {
//     super();
//     this.name = name;
//     this.hp = 0;
//     this.attack = 0;
//     this.defense = 0;
//     this.abilities = ''
      this.pokemon = {
        name: '',
        hp:
      }
//   }
// }

++++++++++++++++++
//
//
// class Charmander extends Pokemon {
//   constructor(hp, attack, defense, abilities) {
//     super();
//     this.hp = 0;
//     this.attack = 0;
//     this.defense = 0;
//     this.abilities = ''
//   }
// }
// class Jigglypuff extends Pokemon {
//   constructor(hp, attack, defense, abilities) {
//     super();
//     this.hp = 0;
//     this.attack = 0;
//     this.defense = 0;
//     this.abilities = ''
//   }
// }
++++++++++++++++++++

owner = {
  name: 'rick flair',
  employees: users,
  getRoster: funciton() {
    return this.employees;
  }
}

function createUser(name,email) {
  var user = {
    name: name,
    email: emial
  }
  totalUsers++;
  users.push(user);
}


users = []
