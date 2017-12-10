// This is your JS Entry point... You can add as many as JS files you want if you think it is better!
import axios from 'axios';

document.getElementById('check').onclick = function () {
    var formulaP = document.getElementById('formula').value;
    var retourT = document.getElementById('retour');

    axios.post('http://localhost:8081/', {
        formula: formulaP
    })
        .then((response) => {
            // working
            retourT.innerText = "SYNTAX CHECKED";
        })
        .catch((error) => {
            // error
            retourT.innerText = "SYNTAX ERROR";
        })
}

document.getElementById('eval').onclick = function () {
    var formulaP = document.getElementById('formula').value;
    var retourT = document.getElementById('retour');
    var formulaClean = formulaP.replace(/[^0-9+---*-\/]/g, "");

    axios.post('http://localhost:8081/', {
        formula: formulaClean
    })
        .then((response) => {
            // working
            if (eval(formulaClean) === Infinity) {
                retourT.innerText = "MATH ERROR";
            }
            else {
                var nombres = formulaClean.split(/[+---*-\/]/);
                var operateurs = formulaClean.replace(/[0-9]/g, "").split("");
                var indiceNb;
                var indiceOp = 0;
                var resultat = nombres[0];

                for (indiceNb = 1; indiceNb < nombres.length; indiceNb++) {
                    resultat = calcul(resultat, nombres[indiceNb], operateurs[indiceOp]);
                    indiceOp++;
                }

                retourT.innerText = resultat;
            }
        })
        .catch((error) => {
            // error
            retourT.innerText = "SYNTAX ERROR";
        })
}

function calcul(param1, param2, operateur) {
    var resultat;
    var nombre1 = parseInt(param1);
    var nombre2 = parseInt(param2);

    switch (operateur) {
        case "+":
            resultat = nombre1 + nombre2;
            break;
        case "-":
            resultat = nombre1 - nombre2;
            break;
        case "*":
            resultat = nombre1 * nombre2;
            break;
        case "/":
            resultat = nombre1 / nombre2;
            break;
    }
    return resultat;
}