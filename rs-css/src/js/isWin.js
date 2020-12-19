module.exports = {
    isWin
  };

  const levels = require('./levels.js');

  function isWin(text, index) {
      if (text == levels[index].win) {
        document.getElementsByClassName("editor")[0].classList.add("shrink");
        setTimeout(function () {
            document.getElementsByClassName("editor")[0].classList.remove("shrink");
          }, 300);
          return true;
      } else {
          document.getElementsByClassName("editor")[0].classList.add("shake");
          setTimeout(function () {
            document.getElementsByClassName("editor")[0].classList.remove("shake");
          }, 1000);
          return false;
      }
  }