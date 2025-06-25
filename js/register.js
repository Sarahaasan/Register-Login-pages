const form = document.querySelector('form');
const container = document.querySelector('.Register');
const afterReg = document.querySelector('.after');
const alreadyReg = document.querySelector('.already-reg');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const Fullname = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value;

  const storedEmail = localStorage.getItem('Email');

  if (storedEmail === email) {
    container.style.display = 'none';
    afterReg.style.display = 'none';
    alreadyReg.style.display = 'flex';  
  } else {
    localStorage.setItem('FullName', Fullname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);

    container.style.display = 'none';
    alreadyReg.style.display = 'none';
    afterReg.style.display = 'flex';
  }
});
