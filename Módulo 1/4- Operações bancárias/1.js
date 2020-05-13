const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  };
  
  function createTransaction(transaction) {
    user.transactions.push(transaction);
    
    if (transaction.type == 'credit') {
      user.balance += transaction.value;
    } else {
      user.balance -= transaction.value;
    }
  
    return user.balance;
  }
  
  function getHigherTransactionByType(type) {
    let higherValue = 0;
    let typeTransaction;
  
    for (transaction of user.transactions) {
      if (type == transaction.type && higherValue < transaction.value) {
        higherValue = transaction.value;
        typeTransaction = transaction.type;
      }
    }
  
    const result = {
      type: typeTransaction,
      value: higherValue
    }
  
    console.log(result);
  }
  
  function getAverageTransactionValue() {
    let count = 0;
    let sumTransactions = 0;
    let average = 0;
  
    for (transaction of user.transactions) {
      count++;
      sumTransactions += transaction.value;
    }
  
    average = sumTransactions / count;
  
    console.log('Average is:', average);
  }
  
  function getTransactionsCount() {
    const count = {
      credit: 0,
      debit: 0
    };
  
    for (transaction of user.transactions) {
      if (transaction.type == 'credit') {
        count.credit++;
      } else {
        count.debit++;
      }
    }
  
    console.log(count);
  }
  
  createTransaction({ type: 'credit', value: 50 });
  createTransaction({ type: 'credit', value: 120 });
  createTransaction({ type: 'debit', value: 80 });
  createTransaction({ type: 'debit', value: 30 });
  
  console.log(user.balance); // 60
  
  getHigherTransactionByType('credit'); // { type: 'credit', value: 120 }
  getHigherTransactionByType('debit'); // { type: 'debit', value: 80 }
  
  getAverageTransactionValue(); // 70
  
  getTransactionsCount(); // { credit: 2, debit: 2 }