var readline = require("readline-sync");
var tab = [3, 5, 10, 12];

menu();

function ajouter(x) {

};

function afficher(y) {

};

var saisi = parseInt(readline.question("Quel est votre choix ? "));
while (saisi !== 0) {
    if (saisi === 1) {
        var nombre = readline.question("Quel nombre voulez-vous ajouter ?");
        console.log("tu veux ajouter" + nombre + ".");
        break;
        //ajouter(nombre);
    } else if (saisi === 2) {
        console.log("tu veux afficher" + tab + ".");
        //afficher(tab);
    }
}



function menu() {
    var txt = "";
    txt += console.log("1/ Ajouter un nombre");
    txt += console.log("2/ Afficher le tableau");
    txt += console.log("0/ Quitter");
};