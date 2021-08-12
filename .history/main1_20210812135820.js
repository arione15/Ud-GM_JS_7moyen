var readline = require("readline-sync");
var tab = [3, 5, 10, 12];
var nombre = 0;

var saisi = parseInt(readline.question("Quel est votre choix ? "));
do {
    if (saisi === 1) {
        ajouter(tab, nombre);
        menu();
        saisi = parseInt(readline.question("Quel est votre choix ? "));
    } else if (saisi === 2) {
        afficher(tab);
        menu();
        saisi = parseInt(readline.question("Quel est votre choix ? "));
    }
} while (saisi !== 0)

console.log("Au revoir !");


// ---------- Les Fonctions ---------- //
function menu() {
    var txt = "";
    txt += "1/ Ajouter un nombre \n";
    txt += "2/ Afficher le tableau <br>";
    txt += "0/ Quitter <br>";
    console.log(txt);
};

function ajouter(tab, x) {
    var x = parseInt(readline.question("Quel nombre voulez-vous ajouter ? "));
    position = trouverPosition(tab, x)
    tab.splice(position, 0, x);

};
function trouverPosition(tab, x) {
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] > x) {
            return i;
        }
    }
    return tab.length;
};





function afficher(y) {
    console.log(y);
};