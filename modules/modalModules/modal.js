export default function initModal() {
    const abrirModals = document.querySelectorAll("[data-modal='abrir']");
    const modals = document.querySelectorAll("[data-modal='container']");

    function handleModal(event) {
        event.preventDefault();
        const targetModalId = event.currentTarget.getAttribute('data-target');
        const targetModal = document.querySelector(targetModalId);
        
        if (targetModal) {
            targetModal.classList.add('ativo');
        }
    }

    abrirModals.forEach((link) => {
        link.addEventListener("click", handleModal);
    });

    const fecharModals = document.querySelectorAll('.fechar');

    fecharModals.forEach((fechar) => {
        fechar.addEventListener("click", () => {
            const modalContainer = fechar.closest('.modal-container');
            if (modalContainer) {
                modalContainer.classList.remove('ativo');
            }
        });
    });

    function cliqueForaModal(e) {
        if (e.target.classList.contains('modal-container')) {
            e.target.classList.remove('ativo');
        }
    }

    modals.forEach((modal) => {
        modal.addEventListener('click', cliqueForaModal);
    });
}
