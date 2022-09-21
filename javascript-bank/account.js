/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) { // checks amount deposited is positive and an integer
    var transaction = new Transaction('deposit', amount); // creates new object from Transaction constructor
    this.transactions.push(transaction); // pushes new object into transactions array
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};
Account.prototype.getBalance = function () {
  var totalBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) { // loops through the transactions array
    if (this.transactions[i].type === 'deposit') { // checks if transactions.type is a deposit
      totalBalance += this.transactions[i].amount; // if yes, adds value of deposit to totalBalance and assigns new value
    } else {
      totalBalance -= this.transactions[i].amount; // if not deposit, has to be withdrawal so subtract and assign from totalBalance
    }
  }
  return totalBalance;
};
