class Modal {
constructor(element, overlay, buttonId) {  
this.modal = element
this.overlay = overlay
this.handleOverlayClick = (event) => {
    if (event.target === this.overlay) {
      this.close();
    }
  };
this.#initOpen(buttonId);
this.#initClose();
}

open() {
    this.modal.classList.add('modal-showed')
    this.overlay.classList.add('overlay-showed')
    this.overlay.addEventListener('click', this.handleOverlayClick);
  }

close() { this.modal.classList.remove('modal-showed')
  this.overlay.classList.remove('overlay-showed')
  this.overlay.removeEventListener('click', this.handleOverlayClick);
    }

#initOpen(buttonId) {
  const button = document. getElementById(buttonId);
  button.addEventListener('click',() =>{
  this.open();
    })
  }
#initClose(){
const closeButton = this.modal.querySelector( '#modal-close-button')

closeButton.addEventListener('click', () => {
this.close();
    });
  }
}; 
