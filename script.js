let generateButton = document.querySelector(".passGenBtn");

// Varibles

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqstuvwxyz";
let symbols = "#$%&>?@";
let numbers = "0123456789";

generateButton.addEventListener("click", generate);

function generate() {
    //event.preventDefault;

    let includedItems = ""; //change to accept DomItemsToInclude

    //Event Listener

    let pwLocation = document.getElementById("passWordLocation").firstChild;

    let pwUpperCaseLocation = document.getElementById("upperCase").checked; //get value & location of PW location

    let pwNumbrLocation = document.getElementById("numbers").checked; //get value & location of PW location

    let pwLowerLocation = document.getElementById("lowerCase").checked; //get value & location of PW location

    let pwSymbolLocation = document.getElementById("symbols").checked; //get value & location of PW location

    // Items to inlcude in PW generator

    for (let i = 0; i < 4; i++) {
        if (pwUpperCaseLocation == true) {
            includedItems += upperCase;
        }
        if (pwLowerLocation == true) {
            includedItems += lowerCase;
        }
        if (pwSymbolLocation == true) {
            includedItems += symbols;
        }
        if (pwNumbrLocation == true) {
            includedItems += numbers;
        }
    }

    let pwLenght = document.querySelector(".length").value;

    let pwitems = includedItems;

    // Number of items to itirate over
    let n = includedItems.length;

    // Location for Automatically generated PW
    let retVal = "";

    // Loop to randomly select chars include in includedItems

    for (let i = 0; i < pwLenght; i++) {
        retVal += includedItems.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("passWordLocation").textContent = retVal;
}