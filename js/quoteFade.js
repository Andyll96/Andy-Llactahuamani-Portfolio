function splitWords(){
    let quote = document.querySelector("blockquote");
    console.log(quote.innerHTML);

    let words = quote.innerText.split(" ");
    let wordCount = words.length;
    console.dir(words);

    quote.innerHTML = "";

    for (let i = 0; i < wordCount; i++) {
        quote.innerHTML += "<span>" + words[i] + "</span>";
        if ( i < wordCount - 1) {
            quote.innerHTML += " ";
        }
    }
    words = document.querySelectorAll("blockquote span");
    console.dir(words);

    fadeWords(words);
    //console.log(quote.innerHTML);
}

function fadeWords(words){

    words.forEach(function(word){
        word.animate([
            {opacity: 0},
            {opacity: 1}
        ],
        {
            duration: 1000,
            delay: getRand(500, 3300),
            fill: 'forwards'
        }
    )});
}

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

splitWords();