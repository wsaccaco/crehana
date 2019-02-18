class main {
  constructor() {
    let d = document;
    this.$weights = d.querySelector('#weights');
    this.$send = d.querySelector('#send');
    this.$resultV = d.querySelector('#resultV');
    this.$resultW = d.querySelector('#resultW');
    this.init();

  }

  init() {
    this.bind();
  }

  addNumbers(number) {
    return number.reduce((prev, current)=>{
      return prev + (+current);
    }, 0);
  }

  send() {
    let {value} = this.$weights;
    let _value =  value.split(' ');
    _value.sort();
    let w = _value.map(number => ({
      value: number,
      weight: this.addNumbers(number.split(''))
    }));
    w.sort(({weight:a}, {weight:b}) => a-b );
    this.$resultV.innerHTML = `Resultado : ${w.map(({value}) => value).join(' ')}`;
    this.$resultW.innerHTML = `Peso :  ${w.map(({weight}) => weight).join(' ')}`;
  }

  bind() {
    this.$send.addEventListener('click', this.send.bind(this));
  }

}

new main();