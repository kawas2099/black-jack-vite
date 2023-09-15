


export const crearCarta = (carta, turno, divCartas)=>{
        const imgCarta = document.createElement('img');
        imgCarta.classList.add('carta');
        imgCarta.src = `assets/cartas/${carta}.png`
        divCartas[turno].append(imgCarta);
}