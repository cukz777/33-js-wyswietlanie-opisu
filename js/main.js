let paragraph = document.getElementById("opis");

let przycisk = document.querySelector('button');


przycisk.onclick = function () { funkcja() };

function funkcja() { paragraph.textContent = 'Działa :)'; }
