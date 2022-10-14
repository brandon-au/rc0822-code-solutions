/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1; // first accuont number would be assigned 1
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) { // checking if balance is more
    // than 0 and an integer
    var account = new Account(this.nextAccountNumber, holder); // initialized
    // Account to new variable named account with properties
    // this.nextAccountNumber and holder
    account.deposit(balance); // use previously defined deposit method to add
    // balance to account
    this.accounts.push(account); // pushes account with updated balance into
    // accounts array of Bank object
    this.nextAccountNumber++; // increments nextAccountNumber property in Bank
    // object by 1; each following account number increases by 1 as they are opened
    return account.number; // returns number of the account object
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  if (number <= this.accounts.length) { // if the account number is less than
    // lenth of accounts array - meaning account number cant be bigger than the number of accounts
    return this.accounts[number - 1]; // returns the account number - 1 to get
    // the index position in the array
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0; // starting balance is always 0 with no accounts
  for (var i = 0; i < this.accounts.length; i++) { // // loops through accounts
    // array in bank constructor
    totalBalance += this.accounts[i].getBalance(); // use getBalance method on
    // each account in array and adds + assigns to totalBalance
  }
  return totalBalance;
};
