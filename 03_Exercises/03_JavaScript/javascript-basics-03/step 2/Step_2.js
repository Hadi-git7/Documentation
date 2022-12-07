
function showHide(which){
    var show = document.getElementById('show');
    var hide = document.getElementById('hide');
    var texte = document.getElementById('texte');
    if (which === "show") {
        texte.style.display = "block";
      } else if (which==="hide") {
        texte.style.display = "none";
      }
}