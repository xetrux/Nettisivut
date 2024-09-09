const text = document.querySelectorAll(".text");
const button = document.getElementById("projektitNappi");
const chars = "[]\\//^=?+--_____"

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteText(Element) {
    for (let i = 0; i <= Element.innerHTML.length + 108; i++) {
        await sleep(20 - (Element.innerHTML.length))
        var newStr = Element.innerHTML.slice(0, -1);
        Element.innerHTML = newStr;
    }
}

function callback() {
    text.forEach((Element) =>{
        console.log(Element)
        deleteText(Element)
        button.textContent = "[PROJEKTIT]"
    })
}

button.addEventListener("click", callback)