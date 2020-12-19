import '../css/style.css'
import { chooseLevel } from './chooseLevel';
import { isWin } from './isWin';
import { winHandler } from "./winHandler";

const levels = require('./levels.js');
var index = 0;
document.getElementsByClassName("order")[0].innerHTML = levels[index].doThis;
document.getElementById("code-container").innerHTML = levels[index].boardMarkup;
document.getElementsByClassName("table")[0].innerHTML = levels[index].table;
var input = document.getElementsByClassName("input-strobe")[0];
var buttonLevel = [...document.getElementsByClassName('bLevel')];
if (localStorage.getItem("level") != null) {
    var level = localStorage.getItem("level");
} else {
    localStorage.setItem("level", 0);
    var level = localStorage.getItem("level");
}

if (localStorage.getItem("cache") != null && (localStorage.getItem("cache")).length != 0) {
   var cache = localStorage.getItem("cache");
   cache = cache.split(",");
   for (let i = 0; i < cache.length; i++) {
           document.getElementsByClassName("bLevel")[cache[i]].classList.add("completed");
   }
}

    
    


for (let i = 0; i < buttonLevel.length; i++) {
    let bLevel = buttonLevel[i];
    bLevel.classList.remove("current");
    bLevel.onclick = function() {
        localStorage.setItem("level", i);
        for (let i = 0; i < buttonLevel.length; i++) {
            let bLevel = buttonLevel[i];
            bLevel.classList.remove("current");
        }
        bLevel.classList.add("current");
        
        chooseLevel(i);
        index = i;
    }
}

buttonLevel[level].click();

document.getElementsByClassName("help-button")[0].onclick = function () {
    buttonLevel[index].classList.add("hint");
    let value = (levels[index].win).split("");
    let i = 0;
        var timeId = setInterval(function () {
            
            document.getElementsByClassName("input-strobe")[0].value += value[i];
            i++;
            if (i == value.length) {
                clearInterval(timeId);
            }
        }, 100);
        input.focus();
};

document.getElementsByClassName("enter-button")[0].onclick = function () {
    index = winHandler(input.value, index);
};
document.getElementsByClassName("input-strobe")[0].onkeydown = enterInput;

function enterInput(e) {
    if (e.code == "Enter") {
        index = winHandler(input.value, index);
    }
};

document.getElementsByClassName("reset-progress")[0].onclick = function () {
    if (localStorage.getItem("cache") != null && (localStorage.getItem("cache")).length != 0) {
        var cacheArr = localStorage.getItem("cache");
        cacheArr = cacheArr.split(",");
    } else {
        var cacheArr = [];
    }
    cacheArr = [];
    localStorage.setItem("cache", cacheArr);
    for (let i = 0; i < buttonLevel.length; i++) {
        let bLevel = buttonLevel[i];
        bLevel.classList.remove("completed");
        bLevel.classList.remove("hint");
    }
    buttonLevel[0].click();
};