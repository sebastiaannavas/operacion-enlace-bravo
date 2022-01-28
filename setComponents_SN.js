const {log, Pais, Avion, Pasajeros} = require('./components_SN.js');
let {listaPaises, casosPais, arrayPaises, arrayAviones, arrayPasajeros} = require('./components_SN.js');
let {bool, temp, vuelos} = require('./components_SN.js');

function randomNum() {
    return Math.floor(Math.random() * (99 - 10)) + 10;
}

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
    // return arrayPaises;
}
randomPais();
// log(arrayPaises);

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
        avion.iDAvion = `${str}-${idx}${randomNum()}`;
        vuelos[idx] = avion.iDAvion;
        arrayAviones[idx] = avion;
    }
    // return arrayAviones;
}
randomAvion();
// log(arrayAviones);

function randomPasajero(){

    let idx = 0;
    randomValue(vuelos);
    randomValue(bool);
    randomValue(temp);

    for(; idx <= 34 ; idx++){
        let pasajero = { __proto__:Pasajeros };
        pasajero.iDPasajero = idx + 1;
        pasajero.iDVuelo = vuelos[randomIdx(vuelos)];
        pasajero.vacuna = bool[randomIdx(bool)];
        pasajero.sintomas = bool[randomIdx(bool)];
        pasajero.contacto = bool[randomIdx(bool)];
        pasajero.temperatura = temp[randomIdx(temp)];
        pasajero.mascarilla = bool[randomIdx(bool)];
        arrayPasajeros[idx] = pasajero;
    }
    // return arrayPasajeros;
}
randomPasajero();
// 
console.log(arrayPasajeros)

module.exports={arrayAviones,arrayPaises,arrayPasajeros}

