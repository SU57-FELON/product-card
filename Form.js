export class Form {
  constructor(Id) {
    this.Id = Id;
  }

  getValues() {
    const form = document.querySelector(`#${this.Id}`);
    return new FormData(form);
  }


  isValid() {
    const validlityForm = document.querySelector(`#${this.Id}`);
    return validlityForm.checkValidity();
  }

  reset() {
  const resetform = document.querySelector(`#${this.Id}`);
  resetform.reset();
  }
}
