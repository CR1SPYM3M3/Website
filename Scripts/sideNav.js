function MobNav() {
  if (document.getElementById('licon').style.visible === "block") {
    document.getElementsByClassName('listContainer')[0].style.visibility = "hidden";
  } else {
    document.getElementsByClassName('listContainer')[0].style.visibility = "visible";
  }
}
