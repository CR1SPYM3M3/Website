
  var social = document.getElementById("licon");
  function resize() {
    if (getElementsByClassName("licon").style.display === "hidden") {
      document.getElementsByClassName('listContainer').style.visibility = "visible";
      document.getElementsByClassName('listContainer').style.display = "block";
  }  else {social.style.display = "none";
      document.getElementsByClassName('listContainer').style.visibility = "none"
  }

}
