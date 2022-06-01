class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }
  
  deposit(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    }

    if (this.#amount < amount) {
      throw new Error('You cannot withdraw more than account balance');
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
try {
  const bankAccount = new BankAccount(100);
  bankAccount.deposit(50);
  bankAccount.withdraw(200);
  bankAccount.view();
} catch (error) {
  console.log(error.message);
}



