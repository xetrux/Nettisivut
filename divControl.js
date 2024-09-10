const tiedotNappi = document.getElementById("tiedotNappi");
const projektitNappi = document.getElementById("projektitNappi");
const divs = document.querySelectorAll(".innerDiv");
const projektitDiv = document.querySelector(".projektitDiv");

function hideDivs() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.toggle("hide");
    }
}

function showDivs() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.toggle("show");
    }
}

const switchPage2Tiedot = () => {
    showDivs();
    projektitDiv.classList.add("hide");
}

const switchPage2Projektit = () => {
    projektitDiv.classList.add("show");
    hideDivs();
}
projektitNappi.addEventListener("click", switchPage2Projektit)
tiedotNappi.addEventListener("click", switchPage2Tiedot)