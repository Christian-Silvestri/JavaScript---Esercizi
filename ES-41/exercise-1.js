
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) { // throw an exception if amount is negative
      throw new Error('Negative deposit amount');
    }
    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) { // throw an exception if amount is negative
      throw new Error('Negative withdraw amount');
    }
    if (this.#amount - amount < 0) { // throw an exception if amount is greater than the current balance
      throw new Error('Insufficient funds');
    }
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();