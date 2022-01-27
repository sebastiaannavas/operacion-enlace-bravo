const log = console.log;

const Pais = {
    nombre: undefined,
    casos: undefined
}

const Avion = {
    iDAvion: undefined,
    destino: undefined
}

const Pasajeros = {
    iDPasajero: undefined,
    iDVuelo: undefined,
    vacuna: undefined,
    sintomas: undefined,
    contacto: undefined,
    temperatura: undefined,
    mascarilla: undefined
}

let arrayPaises = [], arrayAviones = [], arrayPasajeros = [];

let listaPaises = ['España', 'Nicaragua', 'Panama', 'Mexico', 'Venezuela'];
let casosPais = [528, 103, 264, 1295, 822];
let bool = ['true', 'false'];
let temp = [36, 37, 38, 39, 40];
let vuelos = [];

module.exports = {
    log,
    Pais, Avion, Pasajeros,
    listaPaises, casosPais,
    arrayPaises, arrayAviones, arrayPasajeros,
    bool, temp, vuelos
}