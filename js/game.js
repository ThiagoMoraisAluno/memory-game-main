const grid = document.querySelector('.grid');

//ESTA FUNÇÃO SERVE PARA CRIARMOS UMA CARTA
const createCard = () =>{

    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');



    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

// ESSA PARTE SERVE PARA SETARMOS OS FILHOS DAS NOSSAS DIVS
    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);

}

createCard();