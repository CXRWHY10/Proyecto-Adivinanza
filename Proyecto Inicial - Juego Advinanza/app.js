let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroDelJugador = 0;
let intentos = 1;
let intentosmax = 3;

console.log(numeroSecreto);
intentosmax = prompt("Ingrese el numero de intentos que gustes: ")

while(numeroSecreto != numeroDelJugador){
    numeroDelJugador = prompt("Ingresa un numero entre 1 y 10")
if (numeroSecreto == numeroDelJugador) {
    alert(`Loco encontraste el numero de tu ex :  ${numeroSecreto} , lo hiciste en ${intentos} ${intentos == 1? "vez":"veces"}`);
}else{
    alert("segui choquito ya estas llegando :(")
    if (numeroDelJugador > numeroSecreto) {
        alert("El numero es menor locazo")
    } else {
        alert("El numero es mayor locazo")
    }
    intentos++;
    if (intentos > intentosmax) {
        alert(`Nimodo choco llegaste al numero maximo de intentos permitidos : ${intentosmax}`)
        break;
    }
}

}