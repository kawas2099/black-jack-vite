

/**
 * Funcion que toma una carta aleatorea del mazo
 * @param {Array<String>} deck 
 * @returns {String} Retorna un string
 */
export const pedirCarta =(deck)=>{
    if(deck.length===0){
        throw 'Ya no hat cartas en el mazo'
    }
    return deck.pop();
}

