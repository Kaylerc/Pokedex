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


function loadPokemon() {
  var newPoke = new XMLHttpRequest();
  newPoke.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokedata = JSON.parse(this.responseText);
      document.getElementById("name").innerHTML = pokedata.name;
      document.getElementById("hp").innerHTML = pokedata.hp;
      document.getElementById("attack").innerHTML = pokedata.attack;
      document.getElementById("defense").innerHTML = pokedata.defense;
      document.getElementById("abilities").innerHTML = pokedata.abilities[0].ability.name;
    }
  };
  newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
  newPoke.send();
}
