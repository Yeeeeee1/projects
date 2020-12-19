import { isWin } from './isWin';
import { chooseLevel } from './chooseLevel';
import { cacheArr } from "./index";
const levels = require('./levels.js');

export function winHandler(value, index) {
    if (isWin(value, index)) {
        if (localStorage.getItem("cache") != null && (localStorage.getItem("cache")).length != 0) {
            var cacheArr = localStorage.getItem("cache");
            cacheArr = cacheArr.split(",");
        } else {
            var cacheArr = [];
        }
        localStorage.setItem("level", index+1);
        cacheArr.push(index)
        localStorage.setItem("cache", cacheArr);
        if (index != 9) {
            chooseLevel(index+1);
            document.getElementsByClassName('bLevel')[index].classList.remove("current");
            document.getElementsByClassName('bLevel')[index].classList.add("completed");
            index += 1;
            document.getElementsByClassName('bLevel')[index].classList.add("current");
        } else if (index == 9) {
            alert("You win!");
            chooseLevel(index-1);
            document.getElementsByClassName('bLevel')[index].classList.remove("current");
            document.getElementsByClassName('bLevel')[index].classList.add("completed");
            document.getElementsByClassName('bLevel')[index].classList.add("current");
        }
        return index;
        
    }

    return index;
}
