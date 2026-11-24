document.getElementById('ano').textContent = new Date().getFullYear();

const formulario = document.getElementById('form-contato');
const resposta = document.getElementById('resposta-formulario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    resposta.textContent = 'Obrigado, ' + nome + '! Este formulário é apenas uma demonstração. Nenhuma mensagem foi enviada.';

    formulario.reset();
});
