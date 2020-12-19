// Main Function
parent.onclick = function(event) {
  if (event.target.id == 'button') {
input.value = input.value + str;
}
if (event.target.id == 'button1') {
input.value = input.value + str_1;
}
if (event.target.id == 'button2') {
input.value = input.value + str_2;
}
if (event.target.id == 'button3') {
input.value = input.value + str_3;
}
if (event.target.id == 'button4') {
input.value = input.value + str_4;
}
if (event.target.id == 'button5') {
input.value = input.value + str_5;
}
if (event.target.id == 'button6') {
input.value = input.value + str_6;
}
if (event.target.id == 'button7') {
input.value = input.value + str_7;
}
if (event.target.id == 'button8') {
input.value = input.value + str_8;
}
if (event.target.id == 'button9') {
input.value = input.value + str_9;
}
if (event.target.id == 'button0') {
input.value = input.value + str_0;
}
if (event.target.id == 'buttonMin') {
input.value = input.value + str_min;
}
if (event.target.id == 'buttonEqual') {
input.value = input.value + str_e;
}
if (event.target.id == 'buttonBackspace') {
input.value = input.value.substring(0,input.length -1);
}
if (event.target.id == 'buttonTab') {
input.value = input.value + '                ';
}
if (event.target.id == 'buttonQ') {
input.value = input.value + str_q;
}
if (event.target.id == 'buttonW') {
input.value = input.value + str_w;
}
if (event.target.id == 'buttonE') {
input.value = input.value + str_ee;
}
if (event.target.id == 'buttonR') {
input.value = input.value + str_r;
}
if (event.target.id == 'buttonT') {
input.value = input.value + str_t;
}
if (event.target.id == 'buttonY') {
input.value = input.value + str_y;
}
if (event.target.id == 'buttonU') {
input.value = input.value + str_u;
}
if (event.target.id == 'buttonI') {
input.value = input.value + str_i;
}
if (event.target.id == 'buttonO') {
input.value = input.value + str_o;
}
if (event.target.id == 'buttonP') {
input.value = input.value + str_p;
}
if (event.target.id == 'buttonKs') {
input.value = input.value + str_ks;
}
if (event.target.id == 'buttonKss') {
input.value = input.value + str_kss;
}
if (event.target.id == 'buttonBackslash') {
input.value = input.value + str_backslash;
}
if (event.target.id == 'buttonDel') {

}
if (event.target.id == 'buttonCapsLock') {
CapsLockClick++;
if (CapsLockClick % 2 != 0 && layotEnglish) {
button_cl.style.background = 'blue';
str = button.innerHTML = '~';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '@';
str_3 = button_3.innerHTML = '#';
str_4 = button_4.innerHTML = '$';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = '^';
str_7 = button_7.innerHTML = '&';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Q';
str_w = button_w.innerHTML = 'W';
str_ee = button_ee.innerHTML = 'E';
str_r = button_r.innerHTML = 'R';
str_t = button_t.innerHTML = 'T';
str_y = button_y.innerHTML = 'Y';
str_u = button_u.innerHTML = 'U';
str_i = button_i.innerHTML = 'I';
str_o = button_o.innerHTML = 'O';
str_p = button_p.innerHTML = 'P';
str_ks = button_ks.innerHTML = '{';
str_kss = button_kss.innerHTML = '}';
str_backslash = button_backslash.innerHTML = '|';
str_a = button_a.innerHTML = 'A';
str_s = button_s.innerHTML = 'S';
str_d = button_d.innerHTML = 'D';
str_f = button_f.innerHTML = 'F';
str_g = button_g.innerHTML = 'G';
str_h = button_h.innerHTML = 'H';
str_j = button_j.innerHTML = 'J';
str_k = button_k.innerHTML = 'K';
str_l = button_l.innerHTML = 'L';
str_za = button_za.innerHTML = ':';
str_kav = button_kav.innerHTML = '"';
str_z = button_z.innerHTML = 'Z';
str_x = button_x.innerHTML = 'X';
str_c = button_c.innerHTML = 'C';
str_v = button_v.innerHTML = 'V';
str_b = button_b.innerHTML = 'B';
str_n = button_n.innerHTML = 'N';
str_m = button_m.innerHTML = 'M';
str_zap = button_zap.innerHTML = '<';
str_toc = button_toc.innerHTML = '>';
str_slash = button_slash.innerHTML = '?';
}


if (CapsLockClick % 2 == 0 && layotEnglish) {
button_cl.style.background = '';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '&#92;';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}
if (CapsLockClick % 2 != 0 && layotRussian) {
str = button.innerHTML = 'Ё';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '"';
str_3 = button_3.innerHTML = '№';
str_4 = button_4.innerHTML = ';';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = ':';
str_7 = button_7.innerHTML = '?';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Й';
str_w = button_w.innerHTML = 'Ц';
str_ee = button_ee.innerHTML = 'У';
str_r = button_r.innerHTML = 'К';
str_t = button_t.innerHTML = 'Е';
str_y = button_y.innerHTML = 'Н';
str_u = button_u.innerHTML = 'Г';
str_i = button_i.innerHTML = 'Ш';
str_o = button_o.innerHTML = 'Щ';
str_p = button_p.innerHTML = 'З';
str_ks = button_ks.innerHTML = 'Х';
str_kss = button_kss.innerHTML = 'Ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'Ф';
str_s = button_s.innerHTML = 'Ы';
str_d = button_d.innerHTML = 'В';
str_f = button_f.innerHTML = 'А';
str_g = button_g.innerHTML = 'П';
str_h = button_h.innerHTML = 'Р';
str_j = button_j.innerHTML = 'О';
str_k = button_k.innerHTML = 'С';
str_l = button_l.innerHTML = 'Д';
str_za = button_za.innerHTML = 'Ж';
str_kav = button_kav.innerHTML = 'Э';
str_z = button_z.innerHTML = 'Я';
str_x = button_x.innerHTML = 'Ч';
str_c = button_c.innerHTML = 'С';
str_v = button_v.innerHTML = 'М';
str_b = button_b.innerHTML = 'И';
str_n = button_n.innerHTML = 'Т';
str_m = button_m.innerHTML = 'Ь';
str_zap = button_zap.innerHTML = 'Б';
str_toc = button_toc.innerHTML = 'Ю';
str_slash = button_slash.innerHTML = ',';
}
if (CapsLockClick % 2 == 0 && layotRussian) {
str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
}
}
if (event.target.id == 'buttonA') {
input.value = input.value + str_a;
}
if (event.target.id == 'buttonS') {
input.value = input.value + str_s;
}
if (event.target.id == 'buttonD') {
input.value = input.value + str_d;
}
if (event.target.id == 'buttonF') {
input.value = input.value + str_f;
}
if (event.target.id == 'buttonG') {
input.value = input.value + str_g;
}
if (event.target.id == 'buttonH') {
input.value = input.value + str_h;
}
if (event.target.id == 'buttonJ') {
input.value = input.value + str_j;
}
if (event.target.id == 'buttonK') {
input.value = input.value + str_k;
}
if (event.target.id == 'buttonL') {
input.value = input.value + str_l;
}
if (event.target.id == 'buttonQuote') {
input.value = input.value + str_kav;
}
if (event.target.id == 'buttonSemicolon') {
input.value = input.value + str_za;
}
if (event.target.id == 'buttonEnter') {
input.value = input.value + "\n";
}
if (event.target.id == 'buttonZ') {
input.value = input.value + str_z;
}
if (event.target.id == 'buttonX') {
input.value = input.value + str_x;
}
if (event.target.id == 'buttonC') {
input.value = input.value + str_c;
}
if (event.target.id == 'buttonV') {
input.value = input.value + str_v;
}
if (event.target.id == 'buttonB') {
input.value = input.value + str_b;
}
if (event.target.id == 'buttonN') {
input.value = input.value + str_n;
}
if (event.target.id == 'buttonM') {
input.value = input.value + str_m;
}
if (event.target.id == 'buttonComma') {
input.value = input.value + str_zap;
}
if (event.target.id == 'buttonPeriod') {
input.value = input.value + str_toc;
}
if (event.target.id == 'buttonSlash') {
input.value = input.value + str_slash;
}
if (event.target.id == 'buttonArrowUp') {
input.value = input.value + '↑';
}
if (event.target.id == 'buttonWin') {

}
if (event.target.id == 'buttonArrowLeft') {
input.value = input.value + '←';
}
if (event.target.id == 'buttonArrowDown') {
input.value = input.value + '↓';
}
if (event.target.id == 'buttonArrowRight') {
input.value = input.value + '→';
}
if (event.target.id == 'buttonSpace') {
input.value = input.value + ' ';
}

};




// Counters
var counterCtrlLeft = 0;
var counterCtrlRight = 0;
var EnglishCapslock = 0;
var CapsLockClick = 0;
var RussianCapsLock = 0;



// LANGUAGES

var layotRussian = false;
var layotEnglish = true;


//INPUT
var parent = document.getElementById('parent');
parent.style.width = '750px';
parent.style.margin = '0 auto';

var input = document.createElement('textarea');
input.innerHTML = '';

parent.appendChild(input);
input.style.width = '700px';
input.style.height = '300px';

document.write('</br>');


//KEYCODE ` C

var button = document.createElement('button');
var str = button.innerHTML = '`';

parent.appendChild(button);
button.id = 'button';


document.addEventListener('keydown', function (event) {
if (event.code == 'Backquote') {
button.style.background = 'blue';
setTimeout(function () {
  button.style.background = '';
},250);
input.value = input.value + str; 
}
});



// KEYCODE 1 C


var button_1 = document.createElement('button');
var str_1 = button_1.innerHTML = '1';

parent.appendChild(button_1);
button_1.id = 'button1';



parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit1') {
button_1.style.background = 'blue';
setTimeout(function () {
  button_1.style.background = '';
},250);
input.value = input.value + str_1;
}
});

// KEYCODE 2 C


var button_2 = document.createElement('button');
var str_2 = button_2.innerHTML = '2';

parent.appendChild(button_2);
button_2.id = 'button2';


parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit2') {
button_2.style.background = 'blue';
setTimeout(function () {
  button_2.style.background = '';
},250);
input.value = input.value + str_2;
}
});

// KEYCODE 3 C


var button_3 = document.createElement('button');
var str_3 = button_3.innerHTML = '3';

parent.appendChild(button_3);
button_3.id = 'button3';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit3') {
button_3.style.background = 'blue';
setTimeout(function () {
  button_3.style.background = '';
},250);
input.value = input.value + str_3;
}
});

// KEYCODE 4 C


var button_4 = document.createElement('button');
var str_4 = button_4.innerHTML = '4';

parent.appendChild(button_4);
button_4.id = 'button4';




parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit4') {
button_4.style.background = 'blue';
setTimeout(function () {
  button_4.style.background = '';
},250);
input.value = input.value + str_4;
}
});

// KEYCODE 5 C


var button_5 = document.createElement('button');
var str_5 = button_5.innerHTML = '5';

parent.appendChild(button_5);
button_5.id = 'button5';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit5') {
button_5.style.background = 'blue';
setTimeout(function () {
  button_5.style.background = '';
},250);
input.value = input.value + str_5;
}
});

// KEYCODE 6 C


var button_6 = document.createElement('button');
var str_6 = button_6.innerHTML = '6';

parent.appendChild(button_6);
button_6.id = 'button6';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit6') {
button_6.style.background = 'blue';
setTimeout(function () {
  button_6.style.background = '';
},250);
input.value = input.value + str_6;
}
});

// KEYCODE 7 C


var button_7 = document.createElement('button');
var str_7 = button_7.innerHTML = '7';

parent.appendChild(button_7);
button_7.id = 'button7';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit7') {
button_7.style.background = 'blue';
setTimeout(function () {
  button_7.style.background = '';
},250);
input.value = input.value + str_7;
}
});

// KEYCODE 8 C


var button_8 = document.createElement('button');
var str_8 = button_8.innerHTML = '8';

parent.appendChild(button_8);
button_8.id = 'button8';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit8') {
button_8.style.background = 'blue';
setTimeout(function () {
  button_8.style.background = '';
},250);
input.value = input.value + str_8;
}
});

// KEYCODE 9 C


var button_9 = document.createElement('button');
var str_9 = button_9.innerHTML = '9';

parent.appendChild(button_9);
button_9.id = 'button9';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit9') {
button_9.style.background = 'blue';
setTimeout(function () {
  button_9.style.background = '';
},250);
input.value = input.value + str_9;
}
});

// KEYCODE 0 C


var button_0 = document.createElement('button');
var str_0 = button_0.innerHTML = '0';

parent.appendChild(button_0);
button_0.id = 'button0';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Digit0') {
button_0.style.background = 'blue';
setTimeout(function () {
  button_0.style.background = '';
},250);
input.value = input.value + str_0;
}
});

// KEYCODE - C


var button_min = document.createElement('button');
var str_min = button_min.innerHTML = '-';

parent.appendChild(button_min);
button_min.id = 'buttonMin';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Minus') {
button_min.style.background = 'blue';
setTimeout(function () {
  button_min.style.background = '';
},250);
input.value = input.value + str_min;
}
});

// KEYCODE = C


var button_e = document.createElement('button');
var str_e = button_e.innerHTML = '=';

parent.appendChild(button_e);
button_e.id = 'buttonEqual';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Equal') {
button_e.style.background = 'blue';
setTimeout(function () {
  button_e.style.background = '';
},250);
input.value = input.value + str_e;
}
});

// KEYCODE Backspace C


var button_backspace = document.createElement('button');
var str_backspace = button_backspace.innerHTML = 'Backspace';

parent.appendChild(button_backspace);
button_backspace.style.width = '100px';
button_backspace.id = 'buttonBackspace';





parent.addEventListener('keydown', function (event) {
if (event.code == 'Backspace') {
button_backspace.style.background = 'blue';
setTimeout(function () {
  button_backspace.style.background = '';
},250);
input.value = input.value.substring(0,input.length -1);
}
});

document.write('</br>');

// KEYCODE Tab C


var button_T = document.createElement('button');
var str_T = button_T.innerHTML = 'Tab';

parent.appendChild(button_T);
button_T.id = 'buttonTab';



parent.addEventListener('keydown', function (event) {
if (event.code == 'Tab') {
button_T.style.background = 'blue';
setTimeout(function () {
  button_T.style.background = '';
},250);
input.value = input.value + '                ';
}
});

// KEYCODE q C


var button_q = document.createElement('button');
var str_q = button_q.innerHTML = 'q';

parent.appendChild(button_q);
button_q.id = 'buttonQ';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyQ') {
button_q.style.background = 'blue';
setTimeout(function () {
  button_q.style.background = '';
},250);
input.value = input.value + str_q;
}
});

// KEYCODE w C


var button_w = document.createElement('button');
var str_w = button_w.innerHTML = 'w';

parent.appendChild(button_w);
button_w.id = 'buttonW';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyW') {
button_w.style.background = 'blue';
setTimeout(function () {
  button_w.style.background = '';
},250);
input.value = input.value + str_w;
}
});

// KEYCODE e C


var button_ee = document.createElement('button');
var str_ee = button_ee.innerHTML = 'e';

parent.appendChild(button_ee);
button_ee.id = 'buttonE';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyE') {
button_ee.style.background = 'blue';
setTimeout(function () {
  button_ee.style.background = '';
},250);
input.value = input.value + str_ee;
}
});

// KEYCODE r C


var button_r = document.createElement('button');
var str_r = button_r.innerHTML = 'r';

parent.appendChild(button_r);
button_r.id = 'buttonR';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyR') {
button_r.style.background = 'blue';
setTimeout(function () {
  button_r.style.background = '';
},250);
input.value = input.value + str_r;
}
});

// KEYCODE t C


var button_t = document.createElement('button');
var str_t = button_t.innerHTML = 't';

parent.appendChild(button_t);
button_t.id = 'buttonT';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyT') {
button_t.style.background = 'blue';
setTimeout(function () {
  button_t.style.background = '';
},250);
input.value = input.value + str_t;
}
});

// KEYCODE y C


var button_y = document.createElement('button');
var str_y = button_y.innerHTML = 'y';

parent.appendChild(button_y);
button_y.id = 'buttonY';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyY') {
button_y.style.background = 'blue';
setTimeout(function () {
  button_y.style.background = '';
},250);
input.value = input.value + str_y;
}
});

// KEYCODE u C


var button_u = document.createElement('button');
var str_u = button_u.innerHTML = 'u';

parent.appendChild(button_u);
button_u.id = 'buttonU';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyU') {
button_u.style.background = 'blue';
setTimeout(function () {
  button_u.style.background = '';
},250);
input.value = input.value + str_u;
}
});

// KEYCODE i C


var button_i = document.createElement('button');
var str_i = button_i.innerHTML = 'i';

parent.appendChild(button_i);
button_i.id = 'buttonI';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyI') {
button_i.style.background = 'blue';
setTimeout(function () {
  button_i.style.background = '';
},250);
input.value = input.value + str_i;
}
});

// KEYCODE o C


var button_o = document.createElement('button');
var str_o = button_o.innerHTML = 'o';

parent.appendChild(button_o);
button_o.id = 'buttonO';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyO') {
button_o.style.background = 'blue';
setTimeout(function () {
  button_o.style.background = '';
},250);
input.value = input.value + str_o;
}
});

// KEYCODE p C


var button_p = document.createElement('button');
var str_p = button_p.innerHTML = 'p';

parent.appendChild(button_p);
button_p.id = 'buttonP';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyP') {
button_p.style.background = 'blue';
setTimeout(function () {
  button_p.style.background = '';
},250);
input.value = input.value + str_p;
}
});

// KEYCODE [ C


var button_ks = document.createElement('button');
var str_ks = button_ks.innerHTML = '[';

parent.appendChild(button_ks);
button_ks.id = 'buttonKs';

parent.addEventListener('keydown', function (event) {
if (event.code == 'BracketLeft') {
button_ks.style.background = 'blue';
setTimeout(function () {
  button_ks.style.background = '';
},250);
input.value = input.value + str_ks;
}
});

// KEYCODE ] C


var button_kss = document.createElement('button');
var str_kss = button_kss.innerHTML = ']';

parent.appendChild(button_kss);
button_kss.id = 'buttonKss';

parent.addEventListener('keydown', function (event) {
if (event.code == 'BracketRight') {
button_kss.style.background = 'blue';
setTimeout(function () {
  button_kss.style.background = '';
},250);
input.value = input.value + str_kss;
}
});

// KEYCODE \ C


var button_backslash = document.createElement('button');
var str_backslash = button_backslash.innerHTML = '\\';

parent.appendChild(button_backslash);
button_backslash.id = 'buttonBackslash';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Backslash') {
button_backslash.style.background = 'blue';
setTimeout(function () {
  button_backslash.style.background = '';
},250);
input.value = input.value + "\\";
}
});

// KEYCODE DEL C


var button_del = document.createElement('button');
var str_del = button_del.innerHTML = 'DEL';

parent.appendChild(button_del);
button_del.id = 'buttonDel';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Delete') {
button_del.style.background = 'blue';
setTimeout(function () {
  button_del.style.background = '';
},250);
}
});

// KEYCODE CapsLock C


var button_cl = document.createElement('button');
var str_cl = button_cl.innerHTML = 'CapsLock';

parent.appendChild(button_cl);
button_cl.style.width = '100px';
button_cl.id = 'buttonCapsLock';


parent.addEventListener('keydown', function (event) {
if (event.code == 'CapsLock') {
EnglishCapslock++;
if (EnglishCapslock % 2 != 0 && layotEnglish) {
button_cl.style.background = 'blue';
str = button.innerHTML = '~';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '@';
str_3 = button_3.innerHTML = '#';
str_4 = button_4.innerHTML = '$';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = '^';
str_7 = button_7.innerHTML = '&';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Q';
str_w = button_w.innerHTML = 'W';
str_ee = button_ee.innerHTML = 'E';
str_r = button_r.innerHTML = 'R';
str_t = button_t.innerHTML = 'T';
str_y = button_y.innerHTML = 'Y';
str_u = button_u.innerHTML = 'U';
str_i = button_i.innerHTML = 'I';
str_o = button_o.innerHTML = 'O';
str_p = button_p.innerHTML = 'P';
str_ks = button_ks.innerHTML = '{';
str_kss = button_kss.innerHTML = '}';
str_backslash = button_backslash.innerHTML = '|';
str_a = button_a.innerHTML = 'A';
str_s = button_s.innerHTML = 'S';
str_d = button_d.innerHTML = 'D';
str_f = button_f.innerHTML = 'F';
str_g = button_g.innerHTML = 'G';
str_h = button_h.innerHTML = 'H';
str_j = button_j.innerHTML = 'J';
str_k = button_k.innerHTML = 'K';
str_l = button_l.innerHTML = 'L';
str_za = button_za.innerHTML = ':';
str_kav = button_kav.innerHTML = '"';
str_z = button_z.innerHTML = 'Z';
str_x = button_x.innerHTML = 'X';
str_c = button_c.innerHTML = 'C';
str_v = button_v.innerHTML = 'V';
str_b = button_b.innerHTML = 'B';
str_n = button_n.innerHTML = 'N';
str_m = button_m.innerHTML = 'M';
str_zap = button_zap.innerHTML = '<';
str_toc = button_toc.innerHTML = '>';
str_slash = button_slash.innerHTML = '?';
}


if (EnglishCapslock % 2 == 0 && layotEnglish) {
button_cl.style.background = '';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '&#92;';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}

RussianCapsLock++;

if (RussianCapsLock % 2 != 0 && layotRussian) {
str = button.innerHTML = 'Ё';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '"';
str_3 = button_3.innerHTML = '№';
str_4 = button_4.innerHTML = ';';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = ':';
str_7 = button_7.innerHTML = '?';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Й';
str_w = button_w.innerHTML = 'Ц';
str_ee = button_ee.innerHTML = 'У';
str_r = button_r.innerHTML = 'К';
str_t = button_t.innerHTML = 'Е';
str_y = button_y.innerHTML = 'Н';
str_u = button_u.innerHTML = 'Г';
str_i = button_i.innerHTML = 'Ш';
str_o = button_o.innerHTML = 'Щ';
str_p = button_p.innerHTML = 'З';
str_ks = button_ks.innerHTML = 'Х';
str_kss = button_kss.innerHTML = 'Ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'Ф';
str_s = button_s.innerHTML = 'Ы';
str_d = button_d.innerHTML = 'В';
str_f = button_f.innerHTML = 'А';
str_g = button_g.innerHTML = 'П';
str_h = button_h.innerHTML = 'Р';
str_j = button_j.innerHTML = 'О';
str_k = button_k.innerHTML = 'С';
str_l = button_l.innerHTML = 'Д';
str_za = button_za.innerHTML = 'Ж';
str_kav = button_kav.innerHTML = 'Э';
str_z = button_z.innerHTML = 'Я';
str_x = button_x.innerHTML = 'Ч';
str_c = button_c.innerHTML = 'С';
str_v = button_v.innerHTML = 'М';
str_b = button_b.innerHTML = 'И';
str_n = button_n.innerHTML = 'Т';
str_m = button_m.innerHTML = 'Ь';
str_zap = button_zap.innerHTML = 'Б';
str_toc = button_toc.innerHTML = 'Ю';
str_slash = button_slash.innerHTML = ',';
}
if (RussianCapsLock % 2 == 0 && layotRussian) {
str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
}
}
});

// KEYCODE a C


var button_a = document.createElement('button');
var str_a = button_a.innerHTML = 'a';

parent.appendChild(button_a);
button_a.id = 'ButtonA';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyA') {
button_a.style.background = 'blue';
setTimeout(function () {
  button_a.style.background = '';
},250);
input.value = input.value + str_a;
}
});

// KEYCODE s C


var button_s = document.createElement('button');
var str_s = button_s.innerHTML = 's';

parent.appendChild(button_s);
button_s.id = 'buttonS';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyS') {
button_s.style.background = 'blue';
setTimeout(function () {
  button_s.style.background = '';
},250);
input.value = input.value + str_s;
}
});

// KEYCODE d C


var button_d = document.createElement('button');
var str_d = button_d.innerHTML = 'd';

parent.appendChild(button_d);
button_d.id = 'buttonD';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyD') {
button_d.style.background = 'blue';
setTimeout(function () {
  button_d.style.background = '';
},250);
input.value = input.value + str_d;
}
});

// KEYCODE f C


var button_f = document.createElement('button');
var str_f = button_f.innerHTML = 'f';

parent.appendChild(button_f);
button_f.id = 'buttonF';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyF') {
button_f.style.background = 'blue';
setTimeout(function () {
  button_f.style.background = '';
},250);
input.value = input.value + str_f;
}
});

// KEYCODE g C


var button_g = document.createElement('button');
var str_g = button_g.innerHTML = 'g';

parent.appendChild(button_g);
button_g.id = 'buttonG';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyG') {
button_g.style.background = 'blue';
setTimeout(function () {
  button_g.style.background = '';
},250);
input.value = input.value + str_g;
}
});

// KEYCODE h C


var button_h = document.createElement('button');
var str_h = button_h.innerHTML = 'h';

parent.appendChild(button_h);
button_h.id = 'buttonH';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyH') {
button_h.style.background = 'blue';
setTimeout(function () {
  button_h.style.background = '';
},250);
input.value = input.value + str_h;
}
});

// KEYCODE j C


var button_j = document.createElement('button');
var str_j = button_j.innerHTML = 'j';

parent.appendChild(button_j);
button_j.id = 'buttonJ';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyJ') {
button_j.style.background = 'blue';
setTimeout(function () {
  button_j.style.background = '';
},250);
input.value = input.value + str_j;
}
});

// KEYCODE k C


var button_k = document.createElement('button');
var str_k = button_k.innerHTML = 'k';

parent.appendChild(button_k);
button_k.id = 'buttonK';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyK') {
button_k.style.background = 'blue';
setTimeout(function () {
  button_k.style.background = '';
},250);
input.value = input.value + str_k;
}
});

// KEYCODE l C


var button_l = document.createElement('button');
var str_l = button_l.innerHTML = 'l';

parent.appendChild(button_l);
button_l.id = 'buttonL';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyL') {
button_l.style.background = 'blue';
setTimeout(function () {
  button_l.style.background = '';
},250);
input.value = input.value + str_l;
}
});

// KEYCODE ; C


var button_za = document.createElement('button');
var str_za = button_za.innerHTML = ';';

parent.appendChild(button_za);
button_za.id = 'buttonSemicolon';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Semicolon') {
button_za.style.background = 'blue';
setTimeout(function () {
  button_za.style.background = '';
},250);
input.value = input.value + str_za;
}
});

// KEYCODE ' C


var button_kav = document.createElement('button');
var str_kav = button_kav.innerHTML = "'";

parent.appendChild(button_kav);
button_kav.id = 'buttonQuote';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Quote') {
button_kav.style.background = 'blue';
setTimeout(function () {
  button_kav.style.background = '';
},250);
input.value = input.value + "'";
}
});

// KEYCODE Enter C


var button_enter = document.createElement('button');
var str_enter = button_enter.innerHTML = 'Enter';

parent.appendChild(button_enter);
button_enter.style.width = '100px';
button_enter.id = 'buttonEnter';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Enter') {
button_enter.style.background = 'blue';
setTimeout(function () {
  button_enter.style.background = '';
},250);
input.value = input.value + "\n";
}
});

// KEYCODE LeftShift C


var button_lshift = document.createElement('button');
var str_lshift = button_lshift.innerHTML = 'Shift';

parent.appendChild(button_lshift);
button_lshift.style.width = '100px';
button_lshift.addEventListener('mousedown', clicklshift_func);
button_lshift.addEventListener('mouseup', clicklshift1_func);

function clicklshift_func() {
if (layotEnglish) {
button_lshift.style.background = 'blue';
str = button.innerHTML = '~';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '@';
str_3 = button_3.innerHTML = '#';
str_4 = button_4.innerHTML = '$';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = '^';
str_7 = button_7.innerHTML = '&';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Q';
str_w = button_w.innerHTML = 'W';
str_ee = button_ee.innerHTML = 'E';
str_r = button_r.innerHTML = 'R';
str_t = button_t.innerHTML = 'T';
str_y = button_y.innerHTML = 'Y';
str_u = button_u.innerHTML = 'U';
str_i = button_i.innerHTML = 'I';
str_o = button_o.innerHTML = 'O';
str_p = button_p.innerHTML = 'P';
str_ks = button_ks.innerHTML = '{';
str_kss = button_kss.innerHTML = '}';
str_backslash = button_backslash.innerHTML = '|';
str_a = button_a.innerHTML = 'A';
str_s = button_s.innerHTML = 'S';
str_d = button_d.innerHTML = 'D';
str_f = button_f.innerHTML = 'F';
str_g = button_g.innerHTML = 'G';
str_h = button_h.innerHTML = 'H';
str_j = button_j.innerHTML = 'J';
str_k = button_k.innerHTML = 'K';
str_l = button_l.innerHTML = 'L';
str_za = button_za.innerHTML = ':';
str_kav = button_kav.innerHTML = '"';
str_z = button_z.innerHTML = 'Z';
str_x = button_x.innerHTML = 'X';
str_c = button_c.innerHTML = 'C';
str_v = button_v.innerHTML = 'V';
str_b = button_b.innerHTML = 'B';
str_n = button_n.innerHTML = 'N';
str_m = button_m.innerHTML = 'M';
str_zap = button_zap.innerHTML = '<';
str_toc = button_toc.innerHTML = '>';
str_slash = button_slash.innerHTML = '?';
}
if (layotRussian) {
button_lshift.style.background = 'blue';
str = button.innerHTML = 'Ё';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '"';
str_3 = button_3.innerHTML = '№';
str_4 = button_4.innerHTML = ';';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = ':';
str_7 = button_7.innerHTML = '?';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Й';
str_w = button_w.innerHTML = 'Ц';
str_ee = button_ee.innerHTML = 'У';
str_r = button_r.innerHTML = 'К';
str_t = button_t.innerHTML = 'Е';
str_y = button_y.innerHTML = 'Н';
str_u = button_u.innerHTML = 'Г';
str_i = button_i.innerHTML = 'Ш';
str_o = button_o.innerHTML = 'Щ';
str_p = button_p.innerHTML = 'З';
str_ks = button_ks.innerHTML = 'Х';
str_kss = button_kss.innerHTML = 'Ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'Ф';
str_s = button_s.innerHTML = 'Ы';
str_d = button_d.innerHTML = 'В';
str_f = button_f.innerHTML = 'А';
str_g = button_g.innerHTML = 'П';
str_h = button_h.innerHTML = 'Р';
str_j = button_j.innerHTML = 'О';
str_k = button_k.innerHTML = 'С';
str_l = button_l.innerHTML = 'Д';
str_za = button_za.innerHTML = 'Ж';
str_kav = button_kav.innerHTML = 'Э';
str_z = button_z.innerHTML = 'Я';
str_x = button_x.innerHTML = 'Ч';
str_c = button_c.innerHTML = 'С';
str_v = button_v.innerHTML = 'М';
str_b = button_b.innerHTML = 'И';
str_n = button_n.innerHTML = 'Т';
str_m = button_m.innerHTML = 'Ь';
str_zap = button_zap.innerHTML = 'Б';
str_toc = button_toc.innerHTML = 'Ю';
str_slash = button_slash.innerHTML = ',';
}
}
function clicklshift1_func() {
if (layotEnglish) {
button_lshift.style.background = '';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '&#92;';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}
if (layotRussian) {
button_lshift.style.background = '';
str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
}
}

parent.addEventListener('keydown', function (event) {
if (event.code == 'ShiftLeft' && layotEnglish) {
button_lshift.style.background = 'blue';
str = button.innerHTML = '~';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '@';
str_3 = button_3.innerHTML = '#';
str_4 = button_4.innerHTML = '$';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = '^';
str_7 = button_7.innerHTML = '&';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Q';
str_w = button_w.innerHTML = 'W';
str_ee = button_ee.innerHTML = 'E';
str_r = button_r.innerHTML = 'R';
str_t = button_t.innerHTML = 'T';
str_y = button_y.innerHTML = 'Y';
str_u = button_u.innerHTML = 'U';
str_i = button_i.innerHTML = 'I';
str_o = button_o.innerHTML = 'O';
str_p = button_p.innerHTML = 'P';
str_ks = button_ks.innerHTML = '{';
str_kss = button_kss.innerHTML = '}';
str_backslash = button_backslash.innerHTML = '|';
str_a = button_a.innerHTML = 'A';
str_s = button_s.innerHTML = 'S';
str_d = button_d.innerHTML = 'D';
str_f = button_f.innerHTML = 'F';
str_g = button_g.innerHTML = 'G';
str_h = button_h.innerHTML = 'H';
str_j = button_j.innerHTML = 'J';
str_k = button_k.innerHTML = 'K';
str_l = button_l.innerHTML = 'L';
str_za = button_za.innerHTML = ':';
str_kav = button_kav.innerHTML = '"';
str_z = button_z.innerHTML = 'Z';
str_x = button_x.innerHTML = 'X';
str_c = button_c.innerHTML = 'C';
str_v = button_v.innerHTML = 'V';
str_b = button_b.innerHTML = 'B';
str_n = button_n.innerHTML = 'N';
str_m = button_m.innerHTML = 'M';
str_zap = button_zap.innerHTML = '<';
str_toc = button_toc.innerHTML = '>';
str_slash = button_slash.innerHTML = '?';
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'ShiftLeft' && layotEnglish) {
button_lshift.style.background = '';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '&#92;';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}
});
parent.addEventListener('keydown', function (event) {
if (event.code == 'ShiftLeft' && layotRussian) {
button_lshift.style.background = 'blue';
str = button.innerHTML = 'Ё';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '"';
str_3 = button_3.innerHTML = '№';
str_4 = button_4.innerHTML = ';';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = ':';
str_7 = button_7.innerHTML = '?';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Й';
str_w = button_w.innerHTML = 'Ц';
str_ee = button_ee.innerHTML = 'У';
str_r = button_r.innerHTML = 'К';
str_t = button_t.innerHTML = 'Е';
str_y = button_y.innerHTML = 'Н';
str_u = button_u.innerHTML = 'Г';
str_i = button_i.innerHTML = 'Ш';
str_o = button_o.innerHTML = 'Щ';
str_p = button_p.innerHTML = 'З';
str_ks = button_ks.innerHTML = 'Х';
str_kss = button_kss.innerHTML = 'Ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'Ф';
str_s = button_s.innerHTML = 'Ы';
str_d = button_d.innerHTML = 'В';
str_f = button_f.innerHTML = 'А';
str_g = button_g.innerHTML = 'П';
str_h = button_h.innerHTML = 'Р';
str_j = button_j.innerHTML = 'О';
str_k = button_k.innerHTML = 'С';
str_l = button_l.innerHTML = 'Д';
str_za = button_za.innerHTML = 'Ж';
str_kav = button_kav.innerHTML = 'Э';
str_z = button_z.innerHTML = 'Я';
str_x = button_x.innerHTML = 'Ч';
str_c = button_c.innerHTML = 'С';
str_v = button_v.innerHTML = 'М';
str_b = button_b.innerHTML = 'И';
str_n = button_n.innerHTML = 'Т';
str_m = button_m.innerHTML = 'Ь';
str_zap = button_zap.innerHTML = 'Б';
str_toc = button_toc.innerHTML = 'Ю';
str_slash = button_slash.innerHTML = ',';
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'ShiftLeft' && layotRussian) {
button_lshift.style.background = '';
str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
}
});

// KEYCODE z C


var button_z = document.createElement('button');
var str_z = button_z.innerHTML = 'z';

parent.appendChild(button_z);
button_z.id = 'buttonZ';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyZ') {
button_z.style.background = 'blue';
setTimeout(function () {
  button_z.style.background = '';
},250);
input.value = input.value + str_z;
}
});

// KEYCODE x C


var button_x = document.createElement('button');
var str_x = button_x.innerHTML = 'x';

parent.appendChild(button_x);
button_x.id = 'buttonX';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyX') {
button_x.style.background = 'blue';
setTimeout(function () {
  button_x.style.background = '';
},250);
input.value = input.value + str_x;
}
});

// KEYCODE c C


var button_c = document.createElement('button');
var str_c = button_c.innerHTML = 'c';

parent.appendChild(button_c);
button_c.id = 'buttonC';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyC') {
button_c.style.background = 'blue';
setTimeout(function () {
  button_c.style.background = '';
},250);
input.value = input.value + str_c;
}
});

// KEYCODE v C


var button_v = document.createElement('button');
var str_v = button_v.innerHTML = 'v';

parent.appendChild(button_v);
button_v.id = 'buttonV';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyV') {
button_v.style.background = 'blue';
setTimeout(function () {
  button_v.style.background = '';
},250);
input.value = input.value + str_v;
}
});

// KEYCODE b C


var button_b = document.createElement('button');
var str_b = button_b.innerHTML = 'b';

parent.appendChild(button_b);
button_b.id = 'buttonB';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyB') {
button_b.style.background = 'blue';
setTimeout(function () {
  button_b.style.background = '';
},250);
input.value = input.value + str_b;
}
});

// KEYCODE n C


var button_n = document.createElement('button');
var str_n = button_n.innerHTML = 'n';

parent.appendChild(button_n);
button_n.id = 'buttonN';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyN') {
button_n.style.background = 'blue';
setTimeout(function () {
  button_n.style.background = '';
},250);
input.value = input.value + str_n;
}
});

// KEYCODE m C


var button_m = document.createElement('button');
var str_m = button_m.innerHTML = 'm';

parent.appendChild(button_m);
button_m.id = 'buttonM';

parent.addEventListener('keydown', function (event) {
if (event.code == 'KeyM') {
button_m.style.background = 'blue';
setTimeout(function () {
  button_m.style.background = '';
},250);
input.value = input.value + str_m;
}
});

// KEYCODE , C


var button_zap = document.createElement('button');
var str_zap = button_zap.innerHTML = ',';

parent.appendChild(button_zap);
button_zap.id = 'buttonComma';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Comma') {
button_zap.style.background = 'blue';
setTimeout(function () {
  button_zap.style.background = '';
},250);
input.value = input.value + str_zap;
}
});

// KEYCODE . C


var button_toc = document.createElement('button');
var str_toc = button_toc.innerHTML = '.';

parent.appendChild(button_toc);
button_toc.id = 'buttonPeriod';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Period') {
button_toc.style.background = 'blue';
setTimeout(function () {
  button_toc.style.background = '';
},250);
input.value = input.value + str_toc;
}
});

// KEYCODE / C


var button_slash = document.createElement('button');
var str_slash = button_slash.innerHTML = '/';

parent.appendChild(button_slash);
button_slash.id = 'buttonSlash';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Slash') {
button_slash.style.background = 'blue';
setTimeout(function () {
  button_slash.style.background = '';
},250);
input.value = input.value + str_slash;
}
});

// KEYCODE ArrowUp C


var button_ArrowUp = document.createElement('button');
var str_ArrowUp = button_ArrowUp.innerHTML = '&#8593;';

parent.appendChild(button_ArrowUp);
button_ArrowUp.id = 'buttonArrowUp';

parent.addEventListener('keydown', function (event) {
if (event.code == 'ArrowUp') {
button_ArrowUp.style.background = 'blue';
setTimeout(function () {
  button_ArrowUp.style.background = '';
},250);
input.value = input.value + '↑';
}
});

// KEYCODE RightShift


var button_rshift = document.createElement('button');
var str_rshift = button_rshift.innerHTML = 'Shift';

parent.appendChild(button_rshift);
button_rshift.style.width = '100px';
button_rshift.addEventListener('mousedown', clickrshift_func);
button_rshift.addEventListener('mouseup', clickrshift1_func);

function clickrshift_func() {
if (layotEnglish) {
button_rshift.style.background = 'blue';
str = button.innerHTML = '~';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '@';
str_3 = button_3.innerHTML = '#';
str_4 = button_4.innerHTML = '$';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = '^';
str_7 = button_7.innerHTML = '&';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Q';
str_w = button_w.innerHTML = 'W';
str_ee = button_ee.innerHTML = 'E';
str_r = button_r.innerHTML = 'R';
str_t = button_t.innerHTML = 'T';
str_y = button_y.innerHTML = 'Y';
str_u = button_u.innerHTML = 'U';
str_i = button_i.innerHTML = 'I';
str_o = button_o.innerHTML = 'O';
str_p = button_p.innerHTML = 'P';
str_ks = button_ks.innerHTML = '{';
str_kss = button_kss.innerHTML = '}';
str_backslash = button_backslash.innerHTML = '|';
str_a = button_a.innerHTML = 'A';
str_s = button_s.innerHTML = 'S';
str_d = button_d.innerHTML = 'D';
str_f = button_f.innerHTML = 'F';
str_g = button_g.innerHTML = 'G';
str_h = button_h.innerHTML = 'H';
str_j = button_j.innerHTML = 'J';
str_k = button_k.innerHTML = 'K';
str_l = button_l.innerHTML = 'L';
str_za = button_za.innerHTML = ':';
str_kav = button_kav.innerHTML = '"';
str_z = button_z.innerHTML = 'Z';
str_x = button_x.innerHTML = 'X';
str_c = button_c.innerHTML = 'C';
str_v = button_v.innerHTML = 'V';
str_b = button_b.innerHTML = 'B';
str_n = button_n.innerHTML = 'N';
str_m = button_m.innerHTML = 'M';
str_zap = button_zap.innerHTML = '<';
str_toc = button_toc.innerHTML = '>';
str_slash = button_slash.innerHTML = '?';
}
if (layotRussian) {
button_rshift.style.background = 'blue';
str = button.innerHTML = 'Ё';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '"';
str_3 = button_3.innerHTML = '№';
str_4 = button_4.innerHTML = ';';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = ':';
str_7 = button_7.innerHTML = '?';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Й';
str_w = button_w.innerHTML = 'Ц';
str_ee = button_ee.innerHTML = 'У';
str_r = button_r.innerHTML = 'К';
str_t = button_t.innerHTML = 'Е';
str_y = button_y.innerHTML = 'Н';
str_u = button_u.innerHTML = 'Г';
str_i = button_i.innerHTML = 'Ш';
str_o = button_o.innerHTML = 'Щ';
str_p = button_p.innerHTML = 'З';
str_ks = button_ks.innerHTML = 'Х';
str_kss = button_kss.innerHTML = 'Ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'Ф';
str_s = button_s.innerHTML = 'Ы';
str_d = button_d.innerHTML = 'В';
str_f = button_f.innerHTML = 'А';
str_g = button_g.innerHTML = 'П';
str_h = button_h.innerHTML = 'Р';
str_j = button_j.innerHTML = 'О';
str_k = button_k.innerHTML = 'С';
str_l = button_l.innerHTML = 'Д';
str_za = button_za.innerHTML = 'Ж';
str_kav = button_kav.innerHTML = 'Э';
str_z = button_z.innerHTML = 'Я';
str_x = button_x.innerHTML = 'Ч';
str_c = button_c.innerHTML = 'С';
str_v = button_v.innerHTML = 'М';
str_b = button_b.innerHTML = 'И';
str_n = button_n.innerHTML = 'Т';
str_m = button_m.innerHTML = 'Ь';
str_zap = button_zap.innerHTML = 'Б';
str_toc = button_toc.innerHTML = 'Ю';
str_slash = button_slash.innerHTML = ',';
}
}
function clickrshift1_func() {
if (layotEnglish) {
button_rshift.style.background = '';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '&#92;';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}
if (layotRussian) {
button_rshift.style.background = '';
str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
}
}

parent.addEventListener('keydown', function (event) {
if (event.code == 'ShiftRight' && layotEnglish) {
button_rshift.style.background = 'blue';
str = button.innerHTML = '~';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '@';
str_3 = button_3.innerHTML = '#';
str_4 = button_4.innerHTML = '$';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = '^';
str_7 = button_7.innerHTML = '&';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Q';
str_w = button_w.innerHTML = 'W';
str_ee = button_ee.innerHTML = 'E';
str_r = button_r.innerHTML = 'R';
str_t = button_t.innerHTML = 'T';
str_y = button_y.innerHTML = 'Y';
str_u = button_u.innerHTML = 'U';
str_i = button_i.innerHTML = 'I';
str_o = button_o.innerHTML = 'O';
str_p = button_p.innerHTML = 'P';
str_ks = button_ks.innerHTML = '{';
str_kss = button_kss.innerHTML = '}';
str_backslash = button_backslash.innerHTML = '|';
str_a = button_a.innerHTML = 'A';
str_s = button_s.innerHTML = 'S';
str_d = button_d.innerHTML = 'D';
str_f = button_f.innerHTML = 'F';
str_g = button_g.innerHTML = 'G';
str_h = button_h.innerHTML = 'H';
str_j = button_j.innerHTML = 'J';
str_k = button_k.innerHTML = 'K';
str_l = button_l.innerHTML = 'L';
str_za = button_za.innerHTML = ':';
str_kav = button_kav.innerHTML = '"';
str_z = button_z.innerHTML = 'Z';
str_x = button_x.innerHTML = 'X';
str_c = button_c.innerHTML = 'C';
str_v = button_v.innerHTML = 'V';
str_b = button_b.innerHTML = 'B';
str_n = button_n.innerHTML = 'N';
str_m = button_m.innerHTML = 'M';
str_zap = button_zap.innerHTML = '<';
str_toc = button_toc.innerHTML = '>';
str_slash = button_slash.innerHTML = '?';
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'ShiftRight' && layotEnglish) {
button_rshift.style.background = '';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '&#92;';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}
});
parent.addEventListener('keydown', function (event) {
if (event.code == 'ShiftRight' && layotRussian) {
button_rshift.style.background = 'blue';
str = button.innerHTML = 'Ё';
str_1 = button_1.innerHTML = '!';
str_2 = button_2.innerHTML = '"';
str_3 = button_3.innerHTML = '№';
str_4 = button_4.innerHTML = ';';
str_5 = button_5.innerHTML = '%';
str_6 = button_6.innerHTML = ':';
str_7 = button_7.innerHTML = '?';
str_8 = button_8.innerHTML = '*';
str_9 = button_9.innerHTML = '(';
str_0 = button_0.innerHTML = ')';
str_min = button_min.innerHTML = '_';
str_e = button_e.innerHTML = '+';
str_q = button_q.innerHTML = 'Й';
str_w = button_w.innerHTML = 'Ц';
str_ee = button_ee.innerHTML = 'У';
str_r = button_r.innerHTML = 'К';
str_t = button_t.innerHTML = 'Е';
str_y = button_y.innerHTML = 'Н';
str_u = button_u.innerHTML = 'Г';
str_i = button_i.innerHTML = 'Ш';
str_o = button_o.innerHTML = 'Щ';
str_p = button_p.innerHTML = 'З';
str_ks = button_ks.innerHTML = 'Х';
str_kss = button_kss.innerHTML = 'Ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'Ф';
str_s = button_s.innerHTML = 'Ы';
str_d = button_d.innerHTML = 'В';
str_f = button_f.innerHTML = 'А';
str_g = button_g.innerHTML = 'П';
str_h = button_h.innerHTML = 'Р';
str_j = button_j.innerHTML = 'О';
str_k = button_k.innerHTML = 'С';
str_l = button_l.innerHTML = 'Д';
str_za = button_za.innerHTML = 'Ж';
str_kav = button_kav.innerHTML = 'Э';
str_z = button_z.innerHTML = 'Я';
str_x = button_x.innerHTML = 'Ч';
str_c = button_c.innerHTML = 'С';
str_v = button_v.innerHTML = 'М';
str_b = button_b.innerHTML = 'И';
str_n = button_n.innerHTML = 'Т';
str_m = button_m.innerHTML = 'Ь';
str_zap = button_zap.innerHTML = 'Б';
str_toc = button_toc.innerHTML = 'Ю';
str_slash = button_slash.innerHTML = ',';
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'ShiftRight' && layotRussian) {
button_rshift.style.background = '';
str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
}
});

// KEYCODE CtrlLeft


var button_ctrll = document.createElement('button');
var str_ctrll = button_ctrll.innerHTML = 'Ctrl';

parent.appendChild(button_ctrll);
button_ctrll.addEventListener('click', clickctrll_func);

function clickctrll_func() {

}

parent.addEventListener('keydown', function (event) {
if (event.code == 'ControlLeft') {
button_ctrll.style.background = 'blue';
counterCtrlLeft++;
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'ControlLeft') {
button_ctrll.style.background = '';
counterCtrlLeft--;
}
});


// KEYCODE WinLeft


var button_winl = document.createElement('button');
var str_winl = button_winl.innerHTML = 'Win';

parent.appendChild(button_winl);
button_winl.id = 'buttonWin';

parent.addEventListener('keydown', function (event) {
if (event.code == 'MetaLeft') {
button_winl.style.background = 'blue';
setTimeout(function () {
  button_winl.style.background = '';
},250);
}
});


// KEYCODE AltLeft


var button_altl= document.createElement('button');
var str_altl = button_altl.innerHTML = 'Alt';

parent.appendChild(button_altl);
button_altl.addEventListener('click', clickaltl_func);

function clickaltl_func() {

}

parent.addEventListener('keydown', function (event) {
if (event.code == 'AltLeft') {
counterCtrlLeft++;
button_altl.style.background = 'blue';
if (counterCtrlLeft % 2 == 0) {
  layotRussian = true;
  layotEnglish = false;
  str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
} else {
layotRussian = false;
  layotEnglish = true;
button_altl.style.background = 'blue';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'AltLeft') {
button_altl.style.background = '';

}
});


// KEYCODE Space


var button_space = document.createElement('button');
var str_space = button_space.innerHTML = 'Space';

parent.appendChild(button_space);
button_space.style.width = '350px';
button_space.id = 'buttonSpace';

parent.addEventListener('keydown', function (event) {
if (event.code == 'Space') {
button_space.style.background = 'blue';
setTimeout(function () {
  button_space.style.background = '';
},250);
input.value = input.value + ' ';
}
});





// KEYCODE AltRight


var button_altright = document.createElement('button');
var str_altright = button_altright.innerHTML = 'Alt';

parent.appendChild(button_altright);
button_altright.addEventListener('click', clickaltright_func);

function clickaltright_func() {

}

parent.addEventListener('keydown', function (event) {
if (event.code == 'AltRight') {
counterCtrlRight++;
button_altright.style.background = 'blue';

if (counterCtrlRight % 2 == 0) {
  layotRussian = true;
layotEnglish = false;
  str = button.innerHTML = 'ё';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'й';
str_w = button_w.innerHTML = 'ц';
str_ee = button_ee.innerHTML = 'у';
str_r = button_r.innerHTML = 'к';
str_t = button_t.innerHTML = 'е';
str_y = button_y.innerHTML = 'н';
str_u = button_u.innerHTML = 'г';
str_i = button_i.innerHTML = 'ш';
str_o = button_o.innerHTML = 'щ';
str_p = button_p.innerHTML = 'з';
str_ks = button_ks.innerHTML = 'х';
str_kss = button_kss.innerHTML = 'ъ';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'ф';
str_s = button_s.innerHTML = 'ы';
str_d = button_d.innerHTML = 'в';
str_f = button_f.innerHTML = 'а';
str_g = button_g.innerHTML = 'п';
str_h = button_h.innerHTML = 'р';
str_j = button_j.innerHTML = 'о';
str_k = button_k.innerHTML = 'л';
str_l = button_l.innerHTML = 'д';
str_za = button_za.innerHTML = 'ж';
str_kav = button_kav.innerHTML = 'э';
str_z = button_z.innerHTML = 'я';
str_x = button_x.innerHTML = 'ч';
str_c = button_c.innerHTML = 'с';
str_v = button_v.innerHTML = 'м';
str_b = button_b.innerHTML = 'и';
str_n = button_n.innerHTML = 'т';
str_m = button_m.innerHTML = 'ь';
str_zap = button_zap.innerHTML = 'б';
str_toc = button_toc.innerHTML = 'ю';
str_slash = button_slash.innerHTML = '.';
} else {
layotRussian = false;
layotEnglish = true;
button_altright.style.background = 'blue';
str = button.innerHTML = '`';
str_1 = button_1.innerHTML = '1';
str_2 = button_2.innerHTML = '2';
str_3 = button_3.innerHTML = '3';
str_4 = button_4.innerHTML = '4';
str_5 = button_5.innerHTML = '5';
str_6 = button_6.innerHTML = '6';
str_7 = button_7.innerHTML = '7';
str_8 = button_8.innerHTML = '8';
str_9 = button_9.innerHTML = '9';
str_0 = button_0.innerHTML = '0';
str_min = button_min.innerHTML = '-';
str_e = button_e.innerHTML = '=';
str_q = button_q.innerHTML = 'q';
str_w = button_w.innerHTML = 'w';
str_ee = button_ee.innerHTML = 'e';
str_r = button_r.innerHTML = 'r';
str_t = button_t.innerHTML = 't';
str_y = button_y.innerHTML = 'y';
str_u = button_u.innerHTML = 'u';
str_i = button_i.innerHTML = 'i';
str_o = button_o.innerHTML = 'o';
str_p = button_p.innerHTML = 'p';
str_ks = button_ks.innerHTML = '[';
str_kss = button_kss.innerHTML = ']';
str_backslash = button_backslash.innerHTML = '\\';
str_a = button_a.innerHTML = 'a';
str_s = button_s.innerHTML = 's';
str_d = button_d.innerHTML = 'd';
str_f = button_f.innerHTML = 'f';
str_g = button_g.innerHTML = 'g';
str_h = button_h.innerHTML = 'h';
str_j = button_j.innerHTML = 'j';
str_k = button_k.innerHTML = 'k';
str_l = button_l.innerHTML = 'l';
str_za = button_za.innerHTML = ';';
str_kav = button_kav.innerHTML = "'";
str_z = button_z.innerHTML = 'z';
str_x = button_x.innerHTML = 'x';
str_c = button_c.innerHTML = 'c';
str_v = button_v.innerHTML = 'v';
str_b = button_b.innerHTML = 'b';
str_n = button_n.innerHTML = 'n';
str_m = button_m.innerHTML = 'm';
str_zap = button_zap.innerHTML = '.';
str_toc = button_toc.innerHTML = ',';
str_slash = button_slash.innerHTML = '/';
}
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'AltRight') {
button_altright.style.background = '';

}
});


// KEYCODE ArrowLeft


var button_arrowleft = document.createElement('button');
var str_arrowleft = button_arrowleft.innerHTML = '&#8592;';

parent.appendChild(button_arrowleft);
button_arrowleft.id = 'buttonArrowLeft';

parent.addEventListener('keydown', function (event) {
if (event.code == 'ArrowLeft') {
button_arrowleft.style.background = 'blue';
setTimeout(function () {
  button_arrowleft.style.background = '';
},250);
input.value = input.value + '←';
}
});


// KEYCODE ArrowDown


var button_arrowdown = document.createElement('button');
var str_arrowdown = button_arrowdown.innerHTML = '&#8595;';

parent.appendChild(button_arrowdown);
button_arrowdown.id = 'buttonArrowDown';

parent.addEventListener('keydown', function (event) {
if (event.code == 'ArrowDown') {
button_arrowdown.style.background = 'blue';
setTimeout(function () {
  button_arrowdown.style.background = '';
},250);
input.value = input.value + '↓';
}
});


// KEYCODE ArrowRight


var button_arrowright = document.createElement('button');
var str_arrowright = button_arrowright.innerHTML = '&#8594;';

parent.appendChild(button_arrowright);
button_arrowright.id = 'buttonArrowRight';

parent.addEventListener('keydown', function (event) {
if (event.code == 'ArrowRight') {
button_arrowright.style.background = 'blue';
setTimeout(function () {
  button_arrowright.style.background = '';
},250);
input.value = input.value + '→';
}
});


// KEYCODE CtrlRight


var button_ctrlr = document.createElement('button');
var str_ctrlr = button_ctrlr.innerHTML = 'Ctrl';

parent.appendChild(button_ctrlr);
button_ctrlr.addEventListener('click', clickctrlr_func);

function clickctrlr_func() {

}

parent.addEventListener('keydown', function (event) {
if (event.code == 'ControlRight') {
button_ctrlr.style.background = 'blue';
counterCtrlRight++;
}
});
parent.addEventListener('keyup', function (event) {
if (event.code == 'ControlRight') {
button_ctrlr.style.background = '';
counterCtrlRight--;
}
});