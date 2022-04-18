const button = document.querySelector(".button");
const text = document.querySelector(".evolution")
const eevee = document.querySelector(".eevee");

let id
let fase = 1;
const evolution = [
    "Eevee",
    "Espeon",
    "Flareon",
    "Glaceon",
    "Jolteon",
    "Leafeon",
    "Sylveon",
    "Umbreon",
    "Vaporeon"
];
 
button.addEventListener("click", function() {
    if(fase === 8) {
        button.value = "Zerar";
    }
    if(fase > 8) {
        button.value = "Evoluir";
        fase = 0;
    }

    id = "eevee"+fase; 
    
    eevee.id = id;
    text.innerHTML = evolution[fase];

    fase++;
}
);