document
  .getElementById('btn-cash-out')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputCashOut = getInputFiledValueById('input-cash-out');
    const cashOutPinNumber = getInputFiledValueById(
      'input-cash-out-pin-number'
    );

    if (isNaN(inputCashOut)) {
      alert('Please Enter your Correct Amount');
      return;
    }

    if (cashOutPinNumber === 0000) {
      const currentBalance = getTextFiledValueById('current-balance');
      if (inputCashOut > currentBalance) {
        alert('Please Check Your Balance');
        return;
      }
      const updateBalance = currentBalance - inputCashOut;

      document.getElementById('current-balance').innerText = updateBalance;

      // const p = document.createElement('p');
      // p.innerText = `Cash out: ${inputCashOut}, Now your balance: ${updateBalance}`;
      // document.getElementById('transaction-container').appendChild(p);

      // transaction history set
      const div = document.createElement('div');
      div.classList.add('bg-red-300');
      div.innerHTML = `<h1 class=" font-bold">Cash Out</h1>
      <p>${inputCashOut} Withdraw, Your New Balance: ${updateBalance}</p> 
      `;
      document.getElementById('transaction-container').appendChild(div);
    } else {
      alert('Wrong phone and pin number! Enter your correct information');
    }
  });
