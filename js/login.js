const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) =>{
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
        return; //quando colocamos o return dentro de uma função, automaticamente ele pula para o final da função
                
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = () =>{
    event.preventDefault(); //esta linha serve para previnir o comportamento padrão do envio das informações digitadas do formulário(enviar os dados e recarregar a página!)
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
    //como queremos salvar um novo item no nosso localstorage, usamos o método setItem!
                            //O método setItem espera 2 parâmetros, o primeiro é a chave e o segundo é o valor dessa chave que queremos salvar.
}//para salvar as informções digitadas no fomulário, vou salvar em um canto do browser que se chama localstorege, que nada mais é do que um armazenamento local do nosso navegador!


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);