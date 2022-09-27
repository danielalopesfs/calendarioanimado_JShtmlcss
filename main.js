const lang = navigator.language;
let data = new Date();

let diaNumero = data.getDate();
let mes = data.getMonth();
let nomeDia = data.toLocaleString(lang,{weekday: "long"});
let nomeMes = data.toLocaleString(lang,{month: "long"});
let ano = data.getFullYear();

document.getElementById("nomeMes").innerHTML = nomeMes;
document.getElementById("nomeDia").innerHTML = nomeDia;
document.getElementById("diaNumero").innerHTML = diaNumero;
document.getElementById("ano").innerHTML = ano;