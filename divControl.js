const tiedotNappi = document.getElementById("tiedotNappi");
const projektitNappi = document.getElementById("projektitNappi");
const divs = document.querySelectorAll(".innerDiv");

function hideDivs() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("hide");
    }
}

function showDivs() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("add");
    }
}

const switchPage2Tiedot = () => {

}

const switchPage2Projektit = () => {
    hideDivs();
}
projektitNappi.addEventListener("click", switchPage2Projektit)