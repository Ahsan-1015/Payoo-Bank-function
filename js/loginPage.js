document
  .getElementById('button-login')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '01754678436' && pinNumber === '1234') {
      console.log('Welcome to home page');
      window.location.href = '/home-page.html';
    } else {
      alert('Enter your correct phone and pin number');
    }
  });
