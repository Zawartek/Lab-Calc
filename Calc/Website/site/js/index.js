// This is your JS Entry point... You can add as many as JS files you want if you think it is better!
import axios from 'axios';

document.getElementById('check').onclick = function() {
    var formulaP = document.getElementById('formula').value;
    var retourT = document.getElementById('retour');

    axios.post('http://localhost:8081/', {
        formula: formulaP
    })
    .then((response) => {
        // working
        retourT.innerText = "";
        var expression = eval(formulaP);
        if (expression === Infinity) {
            retourT.innerText = "MATH ERROR";
        }
        else {
            retourT.innerText = expression;
        }
    })
    .catch((error) => {
        // error
        retourT.innerText = "SYNTAX ERROR";
    })
}