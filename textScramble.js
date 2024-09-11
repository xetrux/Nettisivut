const text = document.querySelectorAll(".text");
const button = document.getElementById("projektitNappi");
const button2 = document.getElementById("tiedotNappi");

var originalText = [];

var transitioning = false;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteText(element) {
    originalText.push(element.innerHTML);
    var iterations = element.innerHTML.length;
    for (let i = 0; i < iterations; i++) {
        await sleep(40 - (element.innerHTML.length * 3));
        var newStr = element.innerHTML.slice(0, -1);
        element.innerHTML = newStr;
    }
}

async function showText(element, Text) {
    await sleep(2000);
    var iterations = Text.length;
    for (let i = 0; i < iterations; i++) {
        await sleep(30 - (element.innerHTML.length * 2));
        var currentText = element.innerHTML
        var newText = currentText + Text.charAt(i);
        element.textContent = newText;
    }
}

function callback1() {
    if (!transitioning) {
        
    }
    for (let i = 0; i < text.length; i++) {
        deleteText(text[i])
        button.textContent = "[PROJEKTIT]"
        button2.textContent = "TIEDOT"
    }
}

function callback2() {
    if (!transitioning) {

    }
    for (let i = 0; i < text.length; i++) {
        var orgText = originalText[i];
        showText(text[i], orgText);
    }
    button.textContent = "PROJEKTIT"
    button2.textContent = "[TIEDOT]"

}

button.addEventListener("click", callback1)
button2.addEventListener("click", callback2)