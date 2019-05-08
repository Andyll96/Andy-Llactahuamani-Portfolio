function splitWords() {
    let quote = document.querySelector("blockquote");
    console.log(quote.innerHTML);

    let words = quote.innerText.split(" ");
    let wordCount = words.length;
    console.dir(words);

    quote.innerHTML = "";

    for (let i = 0; i < wordCount; i++) {
        quote.innerHTML += "<span>" + words[i] + "</span>";
        if (i < wordCount - 1) {
            quote.innerHTML += " ";
        }
    }
    words = document.querySelectorAll("blockquote span");
    console.dir(words);

    fadeWords(words);
    //console.log(quote.innerHTML);
}

function fadeWords(words) {

    words.forEach(function (word) {
        word.animate([
            { opacity: 0, filter: "blur("+getRand(2,4)+"px)" },
            { opacity: 1, filter: "blur(0px)" }
        ],
            {
                duration: 1000,
                easing: 'ease-in-out',
                delay: getRand(500, 3300),
                fill: 'forwards'
            }
        )
    });
}

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let quote = document.querySelector("blockquote");
let cite = document.querySelector("cite");
let triggered = false;

window.addEventListener('scroll', function (e) {
    if (isInViewport(quote) && triggered == false) {
        splitWords();
        cite.animate([
            { opacity: 0 },
            { opacity: 1 }
        ],{
            duration: 1000,
            easing: 'ease-in-out',
            delay: 4000,
            fill: 'forwards'
        })
        triggered = true;
    }
}, false);