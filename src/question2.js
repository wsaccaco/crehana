const INVALID = 'IP Invalido';
const VALID = 'IP Valido';

class main {
  constructor() {
    let d = document;
    this.$ip = d.querySelector('#ip');
    this.$send = d.querySelector('#send');
    this.$result = d.querySelector('#result');
    this.init();
  }

  init() {
    this.bind();
  }

  message(message){
    this.$result.innerHTML = message;
  }

  send() {
    let {value} = this.$ip;
    let _value =  value.split('.');
    if (_value.find(val => +val > 255)) {
      this.message(INVALID);
      return;
    }
    if (_value.length !== 4) {
      this.message(INVALID);
      return;
    }

    this.message(VALID);

  }

  bind() {
    this.$send.addEventListener('click', this.send.bind(this));
  }

}

new main();