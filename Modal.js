export class Modal { 
  constructor(id) {
    this.id = id;
    this.listenCloseButton();
    this.modal = document.querySelector(`#${this.id}`);
  }


openModal() {
  this.modal.classList.add("modal-showed");
  }


closeModal() {
  this.modal.classList.remove("modal-showed");
  }

isOpen() {
  return this.modal.classList.contains("modal-showed");
  }

listenCloseButton() {
  const closebtn = document.querySelector(`#close-modal-btn`);
  closebtn.addEventListener("click", () => {
    this.closeModal();
  });
  }
}
