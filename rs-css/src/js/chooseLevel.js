module.exports = {
    chooseLevel
  };

  const levels = require('./levels.js');
function chooseLevel(index) {
  document.getElementsByClassName("input-strobe")[0].value = "";
    document.getElementsByClassName("order")[0].innerHTML = levels[index].doThis;
    document.getElementsByClassName("table")[0].innerHTML = levels[index].table;

    document.getElementsByClassName("table-wrapper")[0].style.width = levels[index].width;
    document.getElementsByClassName("table-edge")[0].style.width = levels[index].width;

    var str = levels[index].boardMarkup;
    str = str.replaceAll("<", "&lt;");
    str = str.replaceAll(">", "&gt;");
    
    document.getElementById("code-container").innerHTML = str;
}