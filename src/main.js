(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    menuLinks: document.querySelectorAll(".menu-link"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.menuLinks.forEach((link) => link.addEventListener("click", toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

})();
