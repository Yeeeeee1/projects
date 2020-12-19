var input = document.querySelector(".use-keyboard-input");
var audio = document.querySelector(".keyboardVoice");

var v = 0;
var c = 0;

const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false,
    lang: "en",
    voices: true,
    micro: false
  },

  

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    if (this.properties.lang === "en") {
    	var insert = ["backspace", "ru", "enter", "?"];
    	if (this.properties.capsLock) {
    		var keyLayout = [
    		"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "backspace",
    		"Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "ru",
    		"caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", "enter",
    		"done", "shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "?",
    		"space", "←", "→", "voi", "micro"
    		];
    	} else {
    		var keyLayout = [
    		"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    		"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "ru",
    		"caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    		"done", "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    		"space", "←", "→", "voi", "micro"
    		];
    	}
    }

    if (this.properties.lang === "ru") {
    	if (this.properties.capsLock) {
    		var insert = ["backspace", "en", "enter", "?"];
    		var keyLayout = [
    		"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "backspace",
    		"Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "en",
    		"caps", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "enter",
    		"done", "shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", ",", ".", "?",
    		"space", "←", "→", "voi", "micro"
    		];
    	} else {
    		var insert = ["backspace", "en", "enter", "."];
    		var keyLayout = [
    		"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    		"й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "en",
    		"caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "enter",
    		"done", "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
    		"space", "←", "→", "voi", "micro"
    		];
    	}
    }

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = insert.indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key) {

      	case "micro":
      	keyElement.classList.add('keyboard__key--wide');
      	keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
        keyElement.innerHTML = createIconHTML('micro');
        keyElement.addEventListener('click', () => {
        	this.properties.micro = !this.properties.micro;
        	keyElement.classList.toggle("keyboard__key--active", this.properties.micro);
      	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = `${this.properties.lang}-${this.properties.lang.toUpperCase()}`;

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      input.textContent = poopScript;
  });

  recognition.addEventListener('end', recognition.start);

  if (this.properties.micro) {
  	recognition.start();
  } else {
  	recognition.stop();
  }
  
});
      	break;

      	case "voi":
      	keyElement.classList.add('keyboard__key--wide');
        keyElement.innerHTML = createIconHTML('offline_bolt');
        keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
        keyElement.classList.toggle("keyboard__key--active", this.properties.voices);
        keyElement.addEventListener("click", () => {
        	this.properties.voices = !this.properties.voices;
        	if (this.properties.voices) {
        		var audio = document.createElement("audio");
        		audio.src = "./assets/boom.wav";
        		audio.class = "keyboardVoice";
        		document.body.appendChild(audio);
        	} else {
        		var audio = document.querySelector(".keyboardVoice");
        		audio.remove();
        		audio = "";
        	}
            keyElement.classList.toggle("keyboard__key--active", this.properties.voices);
          });
      	break;

      	        case '←':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('←');

          keyElement.addEventListener('click', () => {
            function setCaretPosition(ctrl, pos) {
              if (ctrl.setSelectionRange) {
                ctrl.focus();
                ctrl.setSelectionRange(pos, pos);
              } else if (ctrl.createTextRange) {
                const range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
              }
            }
            if (c > input.value.length) {
              c = 0;
            }
            setCaretPosition(input, input.value.length - c);
            c += 1;
            this._triggerEvent('oninput');
          });

          document.addEventListener('keydown', (e) => {
          	if (!audio) return;
          	audio.currentTime = 0;
          	audio.play();
          	input.focus();
          	if (e.code === "ArrowLeft") {
          		audio.src = "./assets/boom.wav";
          		keyElement.style.opacity = "0.5";
          		setTimeout(function () {
          			keyElement.style.opacity = "1";
          		}, 100);
          	}
          	
          });

          break;
      	
      	case '→':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('→');

          keyElement.addEventListener('click', () => {
            function setCaretPosition(ctrl, pos) {
              if (ctrl.setSelectionRange) {
                ctrl.focus();
                ctrl.setSelectionRange(pos, pos);
              } else if (ctrl.createTextRange) {
                const range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
              }
            }
            if (v > input.value.length) {
              v = 0;
            }
            setCaretPosition(input, v);
            v += 1;
            this._triggerEvent('oninput');
          });

          document.addEventListener('keydown', (e) => {
          	if (!audio) return;
          	audio.currentTime = 0;
          	audio.play();
          	input.focus();
          	if (e.code === "ArrowRight") {
          		audio.src = "./assets/boom.wav";
          		keyElement.style.opacity = "0.5";
          		setTimeout(function () {
          			keyElement.style.opacity = "1";
          		}, 100);
          	}
          	
          });

          break;

      	case "shift":
      	keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("touch_app");

          keyElement.addEventListener("mousedown", () => {
            this._toggleCapsLock(2);
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          });
          keyElement.addEventListener("mouseup", () => {
            this._toggleCapsLock(2);
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          });
          document.addEventListener('keydown', (e) => {
          	if (!audio) return;
          	audio.currentTime = 0;
          	audio.play();
          	input.focus();
          	if (e.code === "ShiftLeft") {
          		audio.src = "./assets/tom.wav";
          		keyElement.style.opacity = "0.5";
          		this._toggleCapsLock(2);
          		keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          		setTimeout(function () {
          			keyElement.style.opacity = "1";
          		}, 100);
          	}
          	
          });

          document.addEventListener('keyup', (e) => {
          	if (e.code === "ShiftLeft") {
          		keyElement.style.opacity = "0.5";
          		this._toggleCapsLock(2);
          		keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          		setTimeout(function () {
          			keyElement.style.opacity = "1";
          		}, 100);
          	}
          	
          });
      	break;

        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener('click', () => {
            function insertText(id, text) {
              const txtarea = document.querySelector(id);
              const start = txtarea.selectionStart;
              const end = txtarea.selectionEnd;
              const finText = txtarea.value.substring(0, start - 1) + txtarea.value.substring(end);
              txtarea.value = finText;
              txtarea.focus();
              txtarea.selectionEnd = end - 1;
            }
            insertText('.use-keyboard-input', this.properties.capsLock ? key.toUpperCase() : key.toLowerCase());
            this._triggerEvent("oninput");
        });

          document.addEventListener('keydown', (e) => {
          	if (!audio) return;
          	audio.currentTime = 0;
          	audio.play();
          	input.focus();
          	if (e.code === "Backspace") {
          		audio.src = "./assets/tom.wav";
          		keyElement.style.opacity = "0.9";
          		setTimeout(function () {
          			keyElement.style.opacity = "1";
          		}, 100);
          	}
          	
          });

          break;

          case "ru":
          keyElement.textContent = "ru";

          keyElement.addEventListener("click", () => {
            this._toggleLanguageRu();
          });
          break;

          case "en":
          keyElement.textContent = "en";

          keyElement.addEventListener("click", () => {
            this._toggleLanguageEn();
          });
          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock(1);
          });

          document.addEventListener('keydown', (e) => {
          	if (!audio) return;
          	audio.currentTime = 0;
          	audio.play();
          	input.focus();
          	var caps_lock_on = e.getModifierState('CapsLock');
          	if (caps_lock_on === true) {
          		audio.src = "./assets/tom.wav";
          		console.log();
          		this._toggleCapsLock(1);
          	}
          	
          });

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });

          document.addEventListener('keydown', (e) => {
          	if (e.code === "Enter") {
          		var audioo = new Audio();
          	if (!audioo) return;
          	audioo.currentTime = 0;
          	audioo.src = "./assets/tom.wav";
          	audioo.play();
          	input.focus();
          		keyElement.style.opacity = "0.9";
          		setTimeout(function () {
          			keyElement.style.opacity = "1";
          		}, 100);
          	}
          	
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });

          document.addEventListener('keypress', (e) => {
          	
          	input.focus();
          	var child = keyElement.children;
          	keyElement.name = "space";
          	child = [...child];
          	if (e.code === "Space") {
          		if (!audio) return;
          		audio.currentTime = 0;
          		audio.src = "./assets/boom.wav";
          		audio.play();
          		keyElement.style.opacity = "0.5";
          		setTimeout(function () {
          			keyElement.style.opacity = "1";
          		}, 100);
          	}
          	
          });

          break;

        case "done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
          });

          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            function insertText(id, text) {
              const txtarea = document.querySelector(id);
              const start = txtarea.selectionStart;
              const end = txtarea.selectionEnd;
              const finText = txtarea.value.substring(0, start) + text
              + txtarea.value.substring(end);
              txtarea.value = finText;
              txtarea.focus();
              txtarea.selectionEnd = (start === end) ? (end + text.length) : end;
            }
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            insertText('.use-keyboard-input', this.properties.capsLock ? key.toUpperCase() : key.toLowerCase());


            this._triggerEvent('oninput');
          });

          document.addEventListener('keypress', (e) => {
          	var keyElements = document.getElementsByClassName('keyboard__key');
          	keyElements = [...keyElements];
          	for (let i = 0; i < keyElements.length; i++) {
          		if (e.key === keyElements[i].textContent) {
          			keyElements[i].style.opacity = "0.5";
          			setTimeout(function () {
          				keyElements[i].style.opacity = "1";
          			}, 100);
          		}
          	}
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock(a) {
    this.properties.capsLock = !this.properties.capsLock;
    var keyboardd = document.querySelector('.keyboard');
	keyboardd.remove();
	this.init();
	var keyElements = document.getElementsByClassName('material-icons');
	keyElements = [...keyElements];
	for (var i = 0; i < keyElements.length; i++) {
		if (keyElements[i].textContent === "keyboard_capslock" && keyElements[i].textContent !== "touch_app" && a === 1) {
			keyer = keyElements[i].parentNode;
			keyer.classList.toggle("keyboard__key--active", this.properties.capsLock);
		}
		if (keyElements[i].textContent !== "keyboard_capslock" && keyElements[i].textContent === "touch_app" && a === 2) {
			keyer = keyElements[i].parentNode;
			keyer.classList.toggle("keyboard__key--active", this.properties.capsLock);
		}
	}
	for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
	this.elements.main.classList.remove("keyboard--hidden");
  },

  _toggleLanguageRu() {
  	this.properties.lang = "ru";
  	var keyboardd = document.querySelector('.keyboard');
	keyboardd.remove();
	this.init();
	this.elements.main.classList.remove("keyboard--hidden");
  },

  _toggleLanguageEn() {
  	this.properties.lang = "en";
  	var keyboardd = document.querySelector('.keyboard');
	keyboardd.remove();
	this.init();
	this.elements.main.classList.remove("keyboard--hidden");
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
