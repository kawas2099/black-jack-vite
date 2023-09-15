import _ from 'underscore';

/**
 * Crea un nuevo deck
 * @param {Array<string>} tipos ejemplo: ['C','H','S','D']
 * @param {Array<string>} especiales ejemplo: ['J','Q','K','A']
 * @returns {Array<string>} retorna un nuevo deck de cartas 
 */
export const crearDeck  = (tipos, especiales)=>{

    if(!tipos) throw new Error('se necesita un arreglo de strings')

    let deck = [];
    for(let i = 2; i<=10;i++){
        for(let j =0;j<tipos.length;j++){
            deck.push(i+tipos[j]);
        }  
    }
    for(let i= 0;i<especiales.length;i++){
        for(let j = 0; j<tipos.length;j++){
            deck.push(especiales[i]+tipos[j]);
        }
    }
    return _.shuffle(deck);
}