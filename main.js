// Abre o modal quando o botão é clicado
const botoesAbreModal = document.querySelectorAll('.botaof');
botoesAbreModal.forEach(botao => botao.addEventListener('click', abremodal));

function abremodal(e) {
    console.log("Abrindo modal...");
    // Encontra o modal correspondente ao botão clicado
    const idModal = e.target.id.replace("bmodal-", "");
    console.log("ID do modal:", idModal);
    const modalEl = document.getElementById(`modal-${idModal}`);
    console.log("Elemento modal:", modalEl);
    modalEl.classList.add('visivel');
}

// Fecha o modal quando o botão de fechar é clicado
const botoesFecha = document.querySelectorAll('.fecha');
botoesFecha.forEach(fechaEl => fechaEl.addEventListener('click', fecharModal));

function fecharModal(e) {
    console.log("Fechando modal...");
    // Encontra o modal que contém o botão de fechar clicado
    const modalEl = e.target.closest('.modal');
    console.log("Elemento modal:", modalEl);
    modalEl.classList.remove('visivel');
}
