const log = console.log;

let readLine = require('readline-sync')

let numeroCasosRandom = function(){
    return Math.floor(Math.random() * ((24142332+1) - 106806) + 106806)
}

function Pais(nombre, casos) {
    this.nombre = nombre;
    this.casos = casos;
}

function Avion(iDAvion, destino) {
    this.iDAvion = iDAvion;
    this.destino = destino;
    this.casos = numeroCasosRandom()
}

function Pasajeros(iDPasajero, iDVuelo, vacuna, sintomas, contacto, temperatura, mascarilla) {
    this.iDPasajero = iDPasajero;
    this.iDVuelo = iDVuelo;
    this.vacuna = vacuna;
    this.sintomas = sintomas;
    this.contacto = contacto;
    this.temperatura = temperatura;
    this.mascarilla = mascarilla;
}

let arrayPaises = ['España', 'Nicaragua', 'Panama', 'Mexico', 'Venezuela'];

// aqui agregue pais con numero de vuelo ya
let paisesVuelo ={
    pais1: 'Uruguay', nVuelo: 'A1-56', casosInfectados1: numeroCasosRandom(),
    pais2: 'Nicaragua', nVuelo2: 'A4-56', casosInfectados2: numeroCasosRandom(),
    pais3: 'Panama', nVuelo3: 'A10-14', casosInfectados3: numeroCasosRandom(),
    pais4: 'Mexico', nVuelo4: 'A7-78', casosInfectados4: numeroCasosRandom(),
    pais5: 'Venezuela', nVuelo5: 'A5-23', casosInfectados5: numeroCasosRandom(),
    pais6: 'Colombia', nVuelo6: 'A2-49', casosInfectados6: numeroCasosRandom(),
    pais7: 'Brasil', nVuelo7: 'A9-78', casosInfectados7: numeroCasosRandom()
}

let arrayAviones = [], arrayPasajeros = [];

let cantidad = [5, 10, 35];
let boolPasajeros = ['true', 'false'];
let tempPasajeros = [36, 37, 38, 39, 40];

// aqui agregue numero de casos en tal caso que no podamos usar la api, https://es.statista.com/estadisticas/1105121/numero-casos-covid-19-america-latina-caribe-pais/
//me guie de esa pagina para ver los nuevos casos, para sacar un numero random de casos entre un minimo y un maximo

console.log(numeroCasosRandom)
module.exports = {numeroCasosRandom, readLine, paisesVuelo, Avion, log}


