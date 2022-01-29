const readLine = require('readline-sync');
const colors = require('colors');

const {log} = require('./components.js');

let {arrayPasajeros} = require('./components.js');

let {randomPais, randomAvion, randomPasajero} = require('./set_components');
let abordaje = require('./set_pasajeros');
let comprobarRandom = require('./set_pasajeros_random');

let consultarDatos;

randomPais();
randomAvion();
randomPasajero();

comprobarRandom();

log('\n--- BIENVENIDO AL AEROPUERTO "BRAVO" ---'.cyan.bold);

abordaje();

function consultar(){
    log('\n--- CONSULTAR PASAJERO');
    let respuesta = readLine.question('Ingrese su ID: ');
    log(arrayPasajeros[respuesta - 1]);
}
consultar();
consultarDatos = readLine.question('Desea consultar sus datos?: ');

while(consultarDatos == '1'){
    consultar();
    consultarDatos = readLine.question('Desea consultar sus datos?: ');
}