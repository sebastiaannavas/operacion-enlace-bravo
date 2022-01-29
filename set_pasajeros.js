const readLine = require('readline-sync');

const {log, Pasajeros} = require('./components.js');
let {arrayPasajeros} = require('./components.js');
let {bool, temp, preguntas} = require('./components.js');
let {mostrarVuelos, randomValue, randomIdx} = require('./set_components.js');

let {randomPais, randomAvion, randomPasajero} = require('./set_components.js');

let pasajero;

randomPais(); 
randomAvion(); 
randomPasajero();

function abordaje(){

    let idx = 395;
    for(; idx <= 399 ; idx++){
        pasajero = { __proto__:Pasajeros };
        pasajero.iDPasajero = idx + 1;
        mostrarVuelos();
        pasajero.iDVuelo = readLine.question(`--- ${preguntas[0]}: `).toUpperCase();
        comprobarVuelo(pasajero.iDVuelo, pasajero.__proto__);
        arrayPasajeros[pasajero.iDPasajero - 1] = pasajero;
    }
}

function comprobarVuelo(valor, objeto){

    if(valor[0] == 'A'){
        comprobarBioseguridad(objeto);

    } else if(valor[0] == 'B'){
        log('\n--- ALERTA: Su vuelo será reprogramado por destino en cuarentena');
        objeto.abordaje = 'negativo';
    }
    else{
        log('\n--- ERROR: * el vuelo no coincide *');
        abordaje();
    }
}

function comprobarRespuesta(valor, objeto, propiedad){

    if(valor == '1'){
        objeto[propiedad] = true;

    } else if(valor == '0'){
        objeto[propiedad] = false;

    } else{
        log('* valor ingresado no valido *');
        objeto[propiedad] = readLine.question('Vuelva a intentarlo: ')
        comprobarRespuesta(objeto[propiedad]);
    }
}

function comprobarBioseguridad(){

    log(`\n--- ${preguntas[1]}`);
    pasajero.vacuna = readLine.question('    Marque: 1 (Si) / 0 (No): ');
    comprobarRespuesta(pasajero.vacuna, pasajero, 'vacuna');

    log('\n--- verificando mascarilla...');
    randomValue(bool);
    pasajero.mascarilla = bool[randomIdx(bool)];

    if(pasajero.vacuna == true && pasajero.mascarilla == true){
        comprobarCOVID();

    } else{
        log('\n--- ALERTA: * usted no puede abordar el avión por no contar con las medidas de bioseguridad *');
        pasajero.abordaje = 'negativo';
    }
}

function comprobarCOVID(){

    log(`\n--- ${preguntas[2]}`);
    pasajero.contacto = readLine.question('Marque: 1 (Si) / 0 (No): ');
    comprobarRespuesta(pasajero.contacto, pasajero, 'contacto'); //.

    let idx = 3, preguntasLen = preguntas.length, check = [];
    let positivo = 0, negativo = 0;
    for(; idx < preguntasLen ; idx++){
        check[idx] = readLine.question(`\n    ${preguntas[idx]}: `);
        comprobarRespuesta(check[idx], check, idx);
        if(check[idx] == true){
            positivo += 1;
        } else{
            negativo += 1;
        }
    }

    if(positivo < negativo){
        pasajero.sintomas = false;
        tomarTemperatura();

    } else{
        pasajero.sintomas = true;
        log('\n--- ALERTA: * usted no puede abordar el avión porque consideramos que tiene el virus *');
        pasajero.abordaje = 'negativo';
    }
}

function tomarTemperatura(){
    log('\n--- tomando temperatura...');
    randomValue(temp);
    pasajero.temperatura = temp[randomIdx(temp)];

    if(pasajero.temperatura <= 37){
        pasajero.abordaje = 'positivo';
        log('\n--- INFO: * usted puede abordar el avión porque cumple con los requisitos indicados *');
        
    } else{
        log('\n--- ALERTA: * usted no puede abordar el avión porque su temperatura está muy elevada *');
        pasajero.abordaje = 'negativo';
    }
}

module.exports = abordaje;