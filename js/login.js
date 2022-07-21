const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');

const validateInput = ({target}) =>{
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
        return; //quando colocamos o return dentro de uma função, altomaticamente ele pula para o final da função
                
    }

    button.setAttribute('disabled', '');
}


input.addEventListener('input', validateInput);