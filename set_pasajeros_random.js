let {arrayPasajeros} = require('./components.js');

function comprobarRandom(){
    
    let idx = 0, pasajeroLen = arrayPasajeros.length;
    for(; idx < pasajeroLen ; idx++){

        let xPasajero = Object.keys(arrayPasajeros[idx]);
        let i = 1, xLen = xPasajero.length;
        for(; i < xLen ; i++){
            switch(typeof arrayPasajeros[idx][xPasajero[i]]){

                case 'string':
                  
                    if(arrayPasajeros[idx][xPasajero[i]][0] == 'A'){
                        arrayPasajeros[idx].abordaje = 'positivo';

                    } else{
                        arrayPasajeros[idx].abordaje = 'negativo';
                    }
                    break;

                case 'boolean':
    
                    if(xPasajero[i] == 'vacuna' || xPasajero[i] == 'mascarilla'){
        
                        if(arrayPasajeros[idx][xPasajero[i]] == true){
                            arrayPasajeros[idx].abordaje = 'positivo';
            

                        } else{
                            arrayPasajeros[idx].abordaje = 'negativo';
            
                        }
                    }
                    if(xPasajero[i] == 'sintomas'){

                        if(arrayPasajeros[idx][xPasajero[i]] == false){
                            arrayPasajeros[idx].abordaje = 'positivo';
            
                        } else{
                            arrayPasajeros[idx].abordaje = 'negativo';
                        }
                    }
                    break;

                case 'number':

                    if(arrayPasajeros[idx][xPasajero[i]] <= 37){
                        arrayPasajeros[idx].abordaje = 'positivo';
            
                    } else{
                        arrayPasajeros[idx].abordaje = 'negativo';
            
                    }
                    break;
            }
            if(arrayPasajeros[idx].abordaje == 'negativo'){
                i = 7;
            } 
        }
    }
}

module.exports = comprobarRandom;