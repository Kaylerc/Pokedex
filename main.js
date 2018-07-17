function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("info").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/mlaw-nycda/data/master/data", true);
  xhttp.send();
}
