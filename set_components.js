const {Pais, Avion, Pasajeros, log} = require('./components.js');
let {listaPaises, casosPais, arrayPaises, arrayAviones, arrayPasajeros} = require('./components.js');
let {bool, temp, vuelos} = require('./components.js');

let xAvion;
let vuelosLlenos = [];

function randomIdx(array) {
    let max = array.length, min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomValue(array) {
    let idx = array.length;
    let xValue, randomIdx;

    while (0 !== idx) {
        randomIdx = Math.floor(Math.random() * idx);
        idx -= 1;
        xValue = array[idx];
        array[idx] = array[randomIdx];
        array[randomIdx] = xValue;
    }
    return array;
}

function randomPais(){

    let idx = 0, paisLen = listaPaises.length;
    randomValue(listaPaises);
    randomValue(casosPais);

    for(; idx < paisLen ; idx++){
        let pais = { __proto__:Pais };
        pais.nombre = listaPaises[idx];
        pais.casos = casosPais[idx];
        arrayPaises[idx] = pais;
    }
    return arrayPaises;
}
randomPais();

function randomAvion(){

    let idx = 0, str;
    randomValue(arrayPaises);

    let verificarVuelo = (destino) => {
        destino.casos > 800 ? str = 'B' : str = 'A';
    }

    for(; idx <= 9 ; idx++){
        let avion = { __proto__:Avion };
        avion.destino = arrayPaises[randomIdx(arrayPaises)];
        verificarVuelo(avion.destino);
        avion.iDAvion = `${str}-${idx}`;
        vuelos[idx] = avion.iDAvion;
        arrayAviones[idx] = avion;
    }
    return arrayAviones;
}
randomAvion();

function avionLleno(puestos, avion){
    if(puestos == 40){
        vuelosLlenos.push(vuelos[avion]);
        vuelos.splice(avion, 1);
    }
}

function randomPasajero(){

    let idx = 0;
    randomValue(vuelos);
    randomValue(bool);
    randomValue(temp);

    for(; idx <= 394 ; idx++){

        let pasajero = { __proto__:Pasajeros };
        pasajero.iDPasajero = idx + 1;

        let xIdx = randomIdx(vuelos);
        pasajero.iDVuelo = vuelos[xIdx];

        xAvion = arrayAviones.findIndex(avion => avion['iDAvion'] == vuelos[xIdx]);
        arrayAviones[xAvion]['puestos'] += 1;
        avionLleno(arrayAviones[xAvion]['puestos'], xIdx);

        pasajero.vacuna = bool[randomIdx(bool)];
        pasajero.mascarilla = bool[randomIdx(bool)];
        pasajero.contacto = bool[randomIdx(bool)];
        pasajero.sintomas = bool[randomIdx(bool)];
        pasajero.temperatura = temp[randomIdx(temp)];
        arrayPasajeros[idx] = pasajero;
    }
    return arrayPasajeros;
}
randomPasajero();

let vuelos2 = vuelosLlenos;

function mostrarVuelos(){
    log(`
--- VUELOS DISPONIBLES:

    ${vuelos2.join('  ')}
`);
}

module.exports = {
    randomPais, randomAvion, randomPasajero,
    mostrarVuelos, randomValue, randomIdx
};