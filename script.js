const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;

  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const success = document.querySelector('.success');
  const holderForFailUsername = document.querySelector('.holderForFailUsername');
  const holderForFailEmail = document.querySelector('.holderForFailEmail');
  const holderForFailPassword = document.querySelector('.holderForFailPassword');

  const patternForUsername = /^[A-Za-z][A-Za-z0-9_]{2,15}$/;
  const patternForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const patternForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


  // Username must be 3-16 characters long

  if (patternForUsername.test(username)) {
    // Username is valid
    usernameInput.style.border = '1px solid transparent'
    holderForFailUsername.textContent = ''
  } else {
    usernameInput.style.border = '1px solid red'
    holderForFailUsername.textContent = 'Username must be 3-16 characters long'
  }


  if (patternForEmail.test(email)) {
    // Email is valid
    emailInput.style.border = '1px solid transparent'
    holderForFailEmail.textContent = ''
  } else {
    emailInput.style.border = '1px solid red'
    holderForFailEmail.textContent = 'Type a valid Email'
  }


  // Password should be at least 8 characters long, and requires at least one uppercase letter and one digit

  if (patternForPassword.test(password)) {
    // Password is valid
    passwordInput.style.border = '1px solid transparent'
    holderForFailPassword.textContent = ''
  } else {
    passwordInput.style.border = '1px solid red'
    holderForFailPassword.textContent = 'Password should be at least 8 characters long, and requires at least one uppercase letter and one digit'
  }

  if(patternForUsername.test(username) && patternForEmail.test(email) && patternForPassword.test(password)) {
    success.textContent = 'Success'
  }

});
