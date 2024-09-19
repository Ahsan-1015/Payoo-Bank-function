document
  .getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFiledValueById('input-add-money');
    const pinNumber = getInputFiledValueById('input-pin-number');

    if (isNaN(addMoney)) {
      alert('Please Enter your Correct Amount');
      return;
    }

    if (pinNumber === 0000) {
      const currentBalance = getTextFiledValueById('current-balance');
      const updateBalance = currentBalance + addMoney;

      document.getElementById('current-balance').innerText = updateBalance;

      // const p = document.createElement('p');
      // p.innerText = ` You added: ${addMoney}, Now your balance: ${updateBalance}`;
      // document.getElementById('transaction-container').appendChild(p);

      const div = document.createElement('div');
      div.classList.add('bg-green-300');
      div.innerHTML = `<h1 class=" font-bold">Add money</h1>
      <p>${addMoney} Added, Your New Balance: ${updateBalance}</p> 
      `;
      document.getElementById('transaction-container').appendChild(div);
    } else {
      alert('Wrong phone and pin number! Enter your correct information ');
    }
  });
