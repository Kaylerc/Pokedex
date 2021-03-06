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

  get: function(name) {
    for(i = 0; i < allPokemon.length; i++) {
      if (name == this.pokemon[i].name){
        console.log(allPokemon[i]);
      }
    }
  }
}

// Jigglypuff

function loadPokemon1() {
  var newPoke = new XMLHttpRequest();
  newPoke.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokedata = JSON.parse(this.responseText);

      newPokemon(pokedata.name, pokedata.stats[5].base_stat, pokedata.stats[4].base_stat, pokedata.stats[3].base_stat, [pokedata.abilities[0].ability.name, pokedata.abilities[1].ability.name, pokedata.abilities[2].ability.name])

      name: document.getElementById("name").innerHTML =  pokedata.name;
      hp: document.getElementById("hp").innerHTML = '<b>HP   :  </b>' + pokedata.stats[5].base_stat;
      attack: document.getElementById("attack").innerHTML = '<b>Attack :  </b> ' + pokedata.stats[4].base_stat;
      defense: document.getElementById("defense").innerHTML = '<b>Defense : </b>' + pokedata.stats[3].base_stat;
      abilities: document.getElementById("abilities").innerHTML ='<b>Abilities : </b> '+ pokedata.abilities[0].ability.name;
      abilities2: document.getElementById("abilities2").innerHTML = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata.abilities[1].ability.name;
      abilities3: document.getElementById("abilities3").innerHTML = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata.abilities[2].ability.name;

      console.log(pokedata);
    }

  };
  newPoke.open("GET", "https://raw.githubusercontent.com/Kaylerc/Pokedex/master/testapi/jigglypuff.js", true);

  // newPoke.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/39.json", true);
  // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/39/", true);
  newPoke.send();
}


// Bulbasaur

function loadPokemon2() {
  var newPoke2 = new XMLHttpRequest();
  newPoke2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokedata2 = JSON.parse(this.responseText);

      newPokemon(pokedata2.name, pokedata2.stats[5].base_stat, pokedata2.stats[4].base_stat, pokedata2.stats[3].base_stat, [pokedata2.abilities[0].ability.name, pokedata2.abilities[1].ability.name])

      name: document.getElementById("bname").innerHTML =  pokedata2.name;
      hp: document.getElementById("bhp").innerHTML = '<b>HP  : </b> ' + pokedata2.stats[5].base_stat;
      attack: document.getElementById("battack").innerHTML = '<b>Attack :   </b>' + pokedata2.stats[4].base_stat;
      defense: document.getElementById("bdefense").innerHTML = '<b>Defense :</b> ' + pokedata2.stats[3].base_stat;
      abilities: document.getElementById("babilities").innerHTML ='<b>Abilities : </b>'+ pokedata2.abilities[0].ability.name;
      abilities2: document.getElementById("babilities2").innerHTML = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata2.abilities[1].ability.name;


      console.log(pokedata2);
    }

  };
  newPoke2.open("GET", "https://raw.githubusercontent.com/Kaylerc/Pokedex/master/testapi/Bulbasaur.js", true);

  // newPoke2.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/1.json", true);
  // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
  newPoke2.send();
}


// Charmander

function loadPokemon3() {
  var newPoke3 = new XMLHttpRequest();
  newPoke3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokedata3 = JSON.parse(this.responseText);

      newPokemon(pokedata3.name, pokedata3.stats[5].base_stat, pokedata3.stats[4].base_stat, pokedata3.stats[3].base_stat, [pokedata3.abilities[0].ability.name, pokedata3.abilities[1].ability.name])

      name: document.getElementById("cname").innerHTML =  pokedata3.name;
      hp: document.getElementById("chp").innerHTML = '<b>HP  </b></b> :  ' + pokedata3.stats[5].base_stat;
      attack: document.getElementById("cattack").innerHTML = '<b>Attack : </b>    ' + pokedata3.stats[4].base_stat;
      defense: document.getElementById("cdefense").innerHTML = '<b>Defense :</b> ' + pokedata3.stats[3].base_stat;
      abilities: document.getElementById("cabilities").innerHTML ='<b>Abilities</b> :  '+ pokedata3.abilities[0].ability.name;
      abilities2: document.getElementById("cabilities2").innerHTML = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata3.abilities[1].ability.name;


      console.log(pokedata3);
    }

  };
  newPoke3.open("GET", "https://raw.githubusercontent.com/Kaylerc/Pokedex/master/testapi/Charmander.js", true);

  // newPoke3.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/4.json", true);
  // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/4/", true);
  newPoke3.send();
}
