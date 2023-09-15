import { crearDeck,pedirCarta,valorCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases/index';

import _ from 'underscore';

const miModulo = (()=>{

    let deck         = [];
    const tipos      = ['C','H','S','D'],
          especiales = ['J','Q','K','A']

    let puntosJugadores = [];

    //Referencias HTML

    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo'),
          puntosHTML = document.querySelectorAll('small'),
          divCartas  = document.querySelectorAll('.divCartas');
          
    const iniciarJuego = ( numDeJugadores = 2)=>{

        deck                = crearDeck(tipos,especiales);
        puntosJugadores     = [];
        btnPedir.disabled   = false;
        btnDetener.disabled = false;
        for (let i = 0; i < numDeJugadores; i++) {
            puntosJugadores.push(0);
        }
        divCartas.forEach(elem => elem.innerHTML = '');
        puntosHTML.forEach(elem => elem.innerText = 0);
    }


    // const acumularPuntos = (carta, turno)=>{
    //     puntosJugadores[turno] = puntosJugadores[turno]+valorCarta(carta)
    //     puntosHTML[turno].innerText = puntosJugadores[turno]
    //     return puntosJugadores[turno];
    // }

    // const crearCarta = (carta, turno)=>{
    //         const imgCarta = document.createElement('img');
    //         imgCarta.classList.add('carta');
    //         imgCarta.src = `assets/cartas/${carta}.png`
    //         divCartas[turno].append(imgCarta);
    // }

    //

    //Eventos
    btnPedir.addEventListener('click',()=>{
        
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta,0,puntosJugadores,puntosHTML)
        crearCarta(carta,0,divCartas)
        if(puntosJugador>21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador,deck,puntosJugadores,puntosHTML, divCartas);
        }else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador,deck,puntosJugadores,puntosHTML,divCartas);
        }
    })


    btnDetener.addEventListener('click',()=>{
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0],deck,puntosJugadores,puntosHTML, divCartas);
    })

    btnNuevo.addEventListener('click',()=>{
 
        iniciarJuego()
        console.clear();   
    })


    return {
        nuevoJuego: iniciarJuego   //nombre publico de la funcion : nombre de la funcion en el codigo
    }
})()





