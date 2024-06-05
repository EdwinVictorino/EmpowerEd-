function myFunction() {
    var x = document.getElementById("Nbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }