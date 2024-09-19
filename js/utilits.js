// input filed value function
function getInputFiledValueById(id) {
  const inputField = document.getElementById(id).value;
  const inputNumber = Number(inputField);

  return inputNumber;
}

// text filed value function
function getTextFiledValueById(id) {
  const textFiled = document.getElementById(id).innerText;
  const textNumber = Number(textFiled);
  return textNumber;
}

// show display btn
function showSectionById(id) {
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-form').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}
