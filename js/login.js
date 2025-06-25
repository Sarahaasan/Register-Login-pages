const form = document.querySelector('form');
const container = document.querySelector('.Login');
const NotReg = document.querySelector('.NotReg');
const loggedIN = document.querySelector('.loggedIN');
const enteredPass = document.querySelector('#password')

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value;

  const storedEmail = localStorage.getItem('Email');

  if (storedEmail === email) {
    if(localStorage.getItem('Password') != enteredPass.value)
    {
        window.alert('Incorrect Password, Try again ')
    }
    else {
    container.style.display = 'none';
    loggedIN.style.display = 'flex'; 
    document.getElementById('userName').innerHTML=localStorage.getItem('FullName');
    }
  }
   else {
    container.style.display = 'none';
   
    NotReg.style.display = 'flex';
  }
});
document.getElementById('ProfileBtn').addEventListener('click', function() {
  window.location.href = '/profile.html';
});
