// This is your JS Entry point... You can add as many as JS files you want if you think it is better!
import axios from 'axios';

function evalFormula(formulaP)
{
axios.post('http://localhost:8081/', {
    formula: formulaP
})
.then((response) => {
    // working
})
.catch((error) => {
    // error
})
}