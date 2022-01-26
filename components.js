const log = console.log;

function Pais(nombre, casos) {
    this.nombre = nombre;
    this.casos = casos;
}

function Avion(iDAvion, destino) {
    this.iDAvion = iDAvion;
    this.destino = destino;
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

let arrayAviones = [], arrayPasajeros = [];

let cantidad = [5, 10, 35];
let boolPasajeros = ['true', 'false'];
let tempPasajeros = [36, 37, 38, 39, 40];

