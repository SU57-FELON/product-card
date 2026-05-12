export class Modal { 
  constructor(id) {
    this.id = id;
    this.listenCloseButton(); 
  }


openModal() {
  const openModal = document.querySelector(`#${this.id}`);
  openModal.classList.add("modal-showed");
  }


closeModal() {
  const closeModal = document.querySelector(`#${this.id}`);
  closeModal.classList.remove("modal-showed");
  }

isOpen() {
  const isOpen = document.querySelector(`#${this.id}`);
  return isOpen.classList.contains("modal-showed");
  }

listenCloseButton() {
  const closebtn = document.querySelector(`#close-modal-btn`);
  closebtn.addEventListener("click", () => {
    this.closeModal();
  });
  }
}
