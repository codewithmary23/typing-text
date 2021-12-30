const textElement = document.querySelector('.text');
const myText = 'Hello World!';
let i = 0;

function textTyping () {
    if (i < myText.length) {
        textElement.innerHTML += myText.charAt(i);
        i++;
        setTimeout(textTyping, 100);
    }
}

textTyping();