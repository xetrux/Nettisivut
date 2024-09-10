const text = document.querySelectorAll(".text");
const button = document.getElementById("projektitNappi");
const button2 = document.getElementById("tiedotNappi");

var originalText = [];

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteText(Element) {
    originalText.push(Element.innerHTML);
    var iterations = Element.innerHTML.length;
    for (let i = 0; i < iterations; i++) {
        await sleep(40 - (Element.innerHTML.length * 3));
        var newStr = Element.innerHTML.slice(0, -1);
        Element.innerHTML = newStr;
    }
}

async function showText(Element) {
    var iterations = text.length
    await sleep(2000);
    for (let i = 0; i < iterations; i++) {
        text[i].textContent = originalText[i] 
    }
}

function callback1() {
    for (let i = 0; i < text.length; i++) {
        //console.log(Element)
        deleteText(text[i])
        button.textContent = "[PROJEKTIT]"
        button2.textContent = "TIEDOT"
    }
    //console.log(originalText);
}

function callback2() {
    showText();
}

button.addEventListener("click", callback1)
button2.addEventListener("click", callback2)