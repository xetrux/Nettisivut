const tiedotNappi = document.getElementById("tiedotNappi");
const projektitNappi = document.getElementById("projektitNappi");
const divs = document.querySelectorAll(".innerDiv");
const projektitDiv = document.querySelector(".projektitDiv");

var transitioning = false;

function hideDivs() {
    for (let i = 0; i < divs.length; i++) {
        var currentWidth = getComputedStyle(divs[i]).width;
        divs[i].style.setProperty("--current", currentWidth);
        divs[i].style.animation = "innerDiv-hide 1s ease-in-out";
        divs[i].style.animationFillMode = "both";
    }
}

async function showDivs() {
    await sleep(1100);
    for (let i = 0; i < divs.length; i++) {
        var currentWidth = getComputedStyle(divs[i]).width;
        divs[i].style.setProperty("--current", currentWidth);
        divs[i].style.animation = "innerDiv-show 1s ease-in-out";
        divs[i].style.animationFillMode = "both";
    }
    await sleep(1000);
    transitioning = false;
}

async function hideProjects() {
    var currentHeight = getComputedStyle(projektitDiv).height;
    projektitDiv.style.setProperty("--projectCurrent", currentHeight);
    projektitDiv.style.animation = "projektitDiv-hide 1s ease-in-out";
    projektitDiv.style.animationFillMode = "both";
}

async function showProjects() {
    await sleep (1100);
    var currentHeight = getComputedStyle(projektitDiv).height;
    projektitDiv.style.setProperty("--projectCurrent", currentHeight);
    projektitDiv.style.animation = "projektitDiv-show 1s ease-in-out";
    projektitDiv.style.animationFillMode = "both";
    await sleep(1000);
    transitioning = false;
}

const switchPage2Tiedot = () => {
    if (!transitioning) {
        showDivs();
        hideProjects();
    }
    transitioning = true;
}

const switchPage2Projektit = () => {
    if (!transitioning) {
        hideDivs();
        showProjects();
    }
    transitioning = true;
}
projektitNappi.addEventListener("click", switchPage2Projektit)
tiedotNappi.addEventListener("click", switchPage2Tiedot)