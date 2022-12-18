
// Using document.getElementById ;

/*
let bankBalances = prompt("Enter bank balances seprated by a ',' ").split(',');

function calculateIntrest() {
    let bankBalance1 = Number(document.getElementById('bank-balance-1').value);
    let bankBalance2 = Number(document.getElementById('bank-balance-2').value);
    let bankBalance3 = Number(document.getElementById('bank-balance-3').value);
    let bankBalance4 = Number(document.getElementById('bank-balance-4').value);
    let bankBalance5 = Number(document.getElementById('bank-balance-5').value);

    let updatedBankBalance1 = document.getElementById('updated-bank-balance-1');
    let updatedBankBalance2 = document.getElementById('updated-bank-balance-2');
    let updatedBankBalance3 = document.getElementById('updated-bank-balance-3');
    let updatedBankBalance4 = document.getElementById('updated-bank-balance-4');
    let updatedBankBalance5 = document.getElementById('updated-bank-balance-5');

    let bankBalances = [bankBalance1, bankBalance2, bankBalance3, bankBalance4, bankBalance5];

    for (let i = 0; i < bankBalances.length; i++) {
        bankBalances[i] = Number(bankBalances[i]);
        if (bankBalances[i] > 200000) {
            bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1;
            bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002;
        } else if (bankBalances[i] > 100000) {
            bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05;
            bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005;
        } else {
            bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03;
        }
    }

    updatedBankBalance1.value = bankBalances[0];
    updatedBankBalance2.value = bankBalances[1];
    updatedBankBalance3.value = bankBalances[2];
    updatedBankBalance4.value = bankBalances[3];
    updatedBankBalance5.value = bankBalances[4];
    
}

*/

/* --------------------------------------------------------------------------------------------------------------------- */

// By Using document.getElementsByClass (To make it scalable) :

function calculateIntrest() {

    let inputBalanceNodes = document.getElementsByClassName('input-balance');
    let displayUpdatedBalances = document.getElementsByClassName('display-updated-balance');

    let temp;

    for(let i = 0; i< inputBalanceNodes.length; i++) {
        temp = Number(inputBalanceNodes[i].value);
        if (temp > 200000) {
            temp = temp + temp * 0.1;
            temp = temp - temp * 0.002;
        } else if (temp > 100000) {
            temp = temp + temp * 0.05;
            temp = temp - temp * 0.0005;
        } else {
            temp = temp+ temp * 0.03;
        }
        displayUpdatedBalances[i].value = temp;
    }
}