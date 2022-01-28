let {arrayPasajeros, arrayPaises, arrayAviones} = require('./setComponents_SN')
let {temp} = require('./components_SN')

let readline = require('readline-sync')

let vacuna, sintomas, contactoCovid, malestarGeneral, mascarilla;
let arrayTemp=[]

let nVuelo = readline.question('Cual es su n# de vuelo?:     ').toUpperCase()


function randomTemp() {
  let temperaturaRandom=Math.floor(Math.random() * (40 - 38)) + 36;
  return temperaturaRandom
}
function randomIdPasajero() {
  let temperaturaRandom=Math.floor(Math.random() * (500 - 99)) + 99;
  return temperaturaRandom
}



let long = arrayAviones.length;
let long1 = arrayPaises.length

//  asignanacion del iDPasajero y se mete en el array de objetos 
randomIdPasajero()
for (var i = 0; i < arrayPasajeros.length; i++) { 
  for (var propiedad in arrayPasajeros[i]) { 
    if (arrayPasajeros[i].hasOwnProperty(propiedad) && propiedad === "iDPasajero") {
      iDPasajero.push(arrayPasajeros[i][propiedad]);
    }
  }
} 


for (let elementos=0; elementos < long; elementos++) {   // recorremos el objeto de arrayPaises 
  if(nVuelo == arrayAviones[elementos]['iDAvion']){    //si el nVuelo ingresado coincide con alguno de los iDAvion
      // console.log('Hay coincidencia de vuelo')
    for (let elementos1 = 0; elementos1 < long1; elementos1++) {  // entonces que recorra el objeto arrayPaises, y busque los casos, si los casos son mayor o igual que 500
      if(arrayPaises[elementos1]['casos'] >= 500){
          console.log(`El vuelo, ${arrayAviones[elementos1]['iDAvion']} ha sido cancelado porque hay muchos contagios `) // el vuelo es cancelado
      }else{
          console.log('El vuelo despegara pronto ')
            vacuna = readline.question('Usted ya se ha vacunado? Responda con un 1, si la respuesta es SI o 0 si la respuesta es NO:  ')
            console.log('Verificando si tiene mascarilla puesta...')
          for (var i = 0; i < arrayPasajeros.length; i++) { 
            for (var propiedad in arrayPasajeros[i]) { 
              if (arrayPasajeros[i].hasOwnProperty(propiedad) && propiedad === "vacuna") {
                vacuna.push(arrayPasajeros[i][propiedad]);
              }
            }
          } 
          // tienes que asignar mascarilla random y ese resultado lo guardas en el array de objetos y luego comparas ese resultado con lo que esta abajo
           if(vacuna == true && mascarilla == true ){  // tienes que verificar que en el array de objetos donde se guardo la vacuna anterior coincide con true 
              sintomas = readline.question('Ha presentado sintomas de COVID-19? Responda con un 1, si la respuesta es SI o 0 si la respuesta es NO:  ')
              for (var i = 0; i < arrayPasajeros.length; i++) { 
                for (var propiedad in arrayPasajeros[i]) { 
                  if (arrayPasajeros[i].hasOwnProperty(propiedad) && propiedad === "sintomas") {
                    sintomas.push(arrayPasajeros[i][propiedad]);
                  }
                }
              }
              if(sintomas== true){  // tienes que verificar que en el array de objetos donde se guardo la vacuna anterior coincide con true 
                console.log(`tomando temperatura, espere... su temperatura es: ${temperaturaRandom}`)
                arrayTemp.push(temperaturaRandom)
                 if(arrayTemp[0] > 37.5){
                   console.log(`No puede ingresar al vuelo porque su temperatura es ${arrayTemp[0]}`)
              }else{
                   contactoCovid= readline.question('Ha estado en contacto con personas que tienen COVID-19 o presentan los sintomas? Responda con un 1, si la respuesta es SI o 0 si la respuesta es NO:   ')
                   if(contactoCovid == true){
                     malestarGeneral=readline.question('Le cuesta respirar, presenta dolor de cabeza, siente cansancio con frecuencia, ha perdido el sentido del gusto y ha presentado tos? Responda con un 1, si la respuesta es SI o 0 si la respuesta es NO:  ')
                     if(malestarGeneral == true ){
                       
                     }
                  }else{
                    console.log('Puede ingresar')
                  }
              
            
        
            }else{
              console.log('No puede ingresar al vuelo, porque no esta vacunado y no tiene mascarilla.')
            }
    
  }else{
      console.log('El vuelo despegara pronto...')
    }    
  }else{
            console.log('No hay coincidencia de vuelo')
}}}}

