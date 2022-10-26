const staticCat = document.querySelector(".static.cat-container");
const catFace = document.querySelector(".cat-face");
staticCat.classList.add("calico");

staticCat.addEventListener("click", function(){
    let textBubble = staticCat.querySelector(".cat-speech-bubble");
    textBubble.innerHTML = "dont touch me";

    let xpos = rng(0, window.innerWidth);
    let ypos = rng(0, window.innerHeight);

    staticCat.style.top = `${ypos}px`;
    staticCat.style.left = `${xpos}px`;
});

staticCat.addEventListener("mouseenter", startWagging);
staticCat.addEventListener("mouseleave", stopWagging);

function startWagging(){
    staticCat.classList.add("aggro");
    catFace.innerHTML = "o w o";
}
function stopWagging(){
    staticCat.classList.remove("aggro");
    catFace.innerHTML = "^ w ^";
}

//helper functions
function rng(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}