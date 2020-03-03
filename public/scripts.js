document.querySelector('#name').focus();
// Visualizar/Ocultar div com as informações das redes sociais.
const show = (id) => document.getElementById(id).style.display = 'block';
const hide = (id) => document.getElementById(id).style.display = 'none';



// Validações do formulario.
const validarform = () => { 
    if (document.querySelector('#name').value === '') {
        alert('Preencha o campo com o seu nome é sobrenome');
        document.querySelector('#name').focus();
        return false;
    }
    if (document.querySelector('#tel').value === '') {
        alert('Preencha o campo com o seu número de telefone');
        document.querySelector('#tel').focus()
        return false;
    }
    if (document.querySelector('#tv').checked === false && document.querySelector('#internet').checked === false && document.querySelector('#others').checked === false) {
        alert('Por favor selecione uma das opções abaixo');
        return false;
    }
    if (document.querySelector('#inputRadio1').checked === false && document.querySelector('#inputRadio2').checked === false) {
        alert('Por favor, selecione se você tem redes socais!');
        return false;
    }
    if (document.querySelector('#inputRadio1').checked === true) {
        if (document.querySelector('#facebook').checked === false && document.querySelector('#linkedin').checked === false && document.querySelector('#instagram').checked === false) {
            alert('Por favor selecione uma das redes sociais');
            return false;
        }
    }
    document.querySelector('.btn').onclick = () => {
        return false;
    }
}

