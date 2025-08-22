let totalIncome = 0;
let totalExpenses = 0;

function addTransaction() {
  const type = document.getElementById('type').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const desc = document.getElementById('desc').value;

  if (isNaN(amount) || amount <= 0) {alert("Please enter a valid amount.");
    return;
  }

  if (type === 'income') {
    totalIncome += amount;
  } else {
    totalExpenses += amount;
  }

  document.getElementById('income').textContent = Income: ₦totalIncome.toFixed(2);
  document.getElementById('expenses').textContent = Expenses: ₦{totalExpenses.toFixed(2)};
  document.getElementById('balance').textContent = Balance: ₦${(totalIncome - totalExpenses).toFixed(2)};

  // Clear inputs
  document.getElementById('desc').value = '';
  document.getElementById('amount').value = '';
}
