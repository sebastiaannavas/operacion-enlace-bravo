const log = console.log;

const Pais = {
    nombre: undefined,
    casos: undefined
}

const Avion = {
    iDAvion: undefined,
    destino: undefined,
    puestos: 0
}

const Pasajeros = {
    iDPasajero: undefined,
    iDVuelo: undefined,
    vacuna: undefined,
    mascarilla: undefined,
    contacto: undefined,
    sintomas: undefined,
    temperatura: undefined,
    abordaje: undefined
}

let arrayPaises = [], arrayAviones = [], arrayPasajeros = [];

let listaPaises = ['Espana', 'Nicaragua', 'Panama', 'Mexico', 'Venezuela'];
let casosPais = [528, 103, 264, 1295, 822];
let bool = [true, false];
let temp = [36, 37, 38, 39, 40];
let vuelos = [];

let preguntas = [
    'A que avion se dirige?',
    'Se ha vacunado?',
    'Ha estado en contacto con personas que tengan sintomas de COVID-19?',
    'Le cuesta respirar?',
    'Le duele la cabeza?',
    'Siente cansancio con frecuencia?',
    'Ha perdido el gusto o el olfato?',
    'Presenta tos?'
];

module.exports = {
    log,
    Pais, Avion, Pasajeros,
    listaPaises, casosPais,
    arrayPaises, arrayAviones, arrayPasajeros,
    bool, temp, vuelos, preguntas
}