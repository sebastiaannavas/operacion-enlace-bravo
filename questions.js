const dataComponents =  require('./components')
let readLine = require('readline-sync')
// console.log(dataCasosRandom)



this.iDAvion = readLine.question('A que avion se dirige?:  ').toUpperCase()


let paisesVueloValues = Object.values(dataComponents.paisesVuelo); // valores = ["Scott", "Negro", true, 5];
let i = 0 
let long = paisesVueloValues.length
let bandera = false 

// while (bandera == false) {
//   if(this.iDAvion == paisesVueloValues[i]){
//             console.log(`Hay coincidencia de vuelo `)
//             bandera = true

//     i++
                 
//     }}
// if( bandera == false){
//       console.log(`No hay coincidencia de vuelo`)
//   }

//si el numero no coincide 

let i=0
let long = dataComponents.paisesVuelo.length
while (this.iDAvion != paisesVueloValues[i] && i <= long) {
    console.log(` No hay coincidencia de vuelo `)
      i++
                   
}
if(this.iDAvion != paisesVueloValues[i])

}




// let detallePasajeros=[
//   {
//     dni: '', 
//     vacuna: '',
//     sintomas: '',
//     contactoCovid: '',
//     sintomas1: ''
//   } 
// ]

// let clavesPasajeros = Object.keys(detallePasajeros); // claves = ["nombre", "color", "macho", "edad"]
// let i=0
// let long1=detallePasajeros.length
// for(i; i< long1; i++){
//       let clavesPasajeros = clavesPasajeros[i];
//       console.log(detallePasajeros[clavesPasajeros]);
//     }
