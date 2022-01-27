let {arrayPasajeros, arrayPaises, arrayAviones} = require('./setComponents_SN')
// let {Avion, Pais} = require('./components_SN')

let readline = require('readline-sync')


let nVuelo = readline.question('Cual es su n# de vuelo?:     ').toUpperCase()
console.log(nVuelo)
console.log(typeof nVuelo)
console.log(typeof arrayAviones)

let long = arrayAviones.length;
for (let elementos; elementos < long; elementos++) {
    if(nVuelo == arrayAviones[elementos]['iDAvion']){
      console.log('Hay coincidencia de vuelo')
    }else{
      console.log('No hay coincidencia de vuelo')
    }}

console.log(arrayAviones[0].iDAvion)
