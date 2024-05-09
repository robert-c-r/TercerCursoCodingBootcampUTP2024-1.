function memorama() {
const parejas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]    

parejas.sort(() => Math.random() - 0.5); 

document.getElementById('carta1').style.order = parejas[0];
document.getElementById('carta2').style.order = parejas[1];
document.getElementById('carta3').style.order = parejas[2];
document.getElementById('carta4').style.order = parejas[3];
document.getElementById('carta5').style.order = parejas[4];
document.getElementById('carta6').style.order = parejas[5];
document.getElementById('carta7').style.order = parejas[6];
document.getElementById('carta8').style.order = parejas[7];
document.getElementById('carta9').style.order = parejas[8];
document.getElementById('carta10').style.order = parejas[9];
document.getElementById('carta11').style.order = parejas[10];
document.getElementById('carta12').style.order = parejas[11];
document.getElementById('carta13').style.order = parejas[12];
document.getElementById('carta14').style.order = parejas[13];
document.getElementById('carta15').style.order = parejas[14];
document.getElementById('carta16').style.order = parejas[15];

}
memorama();


document.addEventListener('DOMContentLoaded', () => {
let audioBaltazar = new Audio('AudioProyectoNavidad/Audio/baltazar.mp3');
let audioGaspar = new Audio('AudioProyectoNavidad/Audio/gaspar.mp3');
let audioJesus = new Audio('AudioProyectoNavidad/Audio/jesus.mp3');
let audioJose = new Audio('AudioProyectoNavidad/Audio/jose.mp3');
let audioMaria = new Audio('AudioProyectoNavidad/Audio/maria.mp3');
let audioMelchor = new Audio('AudioProyectoNavidad/Audio/melchor.mp3');
let audioMula = new Audio('AudioProyectoNavidad/Audio/mula.mp3');
let audioPastor = new Audio('AudioProyectoNavidad/Audio/pastor.mp3');

}
)

const parejitas = document.getElementsByTagName('parejas-ordenadas');
parejitas.addEventListener('click', memorama)




/* for (let cartas = 0; cartas < parejas.length; cartas++) {
    
} */

