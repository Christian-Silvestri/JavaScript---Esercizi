function calculate() {
  let ris = 0;
  return {
    add: function(x) {
      ris += x;
      return this;
    },
    sub: function(x) {
      ris -= x;
      return this;
    },
    multiply: function(x) {
      ris *= x;
      return this;
    },
    divide: function(x) {
      ris /= x;
      return this;
    },
    printResult: function() {
      console.log('RISULTATO: ' + ris);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7