import { pedirCarta } from "./pedir-carta";
import {acumularPuntos} from './acumular-puntos';
import {crearCarta} from './crear-carta';

//Turno de la computadora
    export const turnoComputadora = (puntosMinimos, deck, puntosCPU, puntosHTML, divCartas)=>{

        let puntosComputadora;
        let carta;
        do{
            carta = pedirCarta(deck);
            puntosComputadora = acumularPuntos(carta,puntosCPU.length-1,puntosCPU,puntosHTML)
            crearCarta(carta, puntosCPU.length-1, divCartas)
        }while( (puntosComputadora <puntosMinimos) && puntosMinimos<=21)

        setTimeout(() => {
            
            btnDetener.disabled = true;
            if(puntosMinimos>21){
                alert("Perdiste :(");
            }else if(puntosComputadora>21){
                alert('Ganaste');
            }else if(puntosComputadora===puntosMinimos){
                alert('Nadie Gana');
            }else {
                alert('Perdiste')
            }
        }, 200);
    }