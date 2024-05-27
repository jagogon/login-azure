const init = () => {
    console.log("setTimeout 66666")

    const emailLabel = document.querySelector('label[for="email"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordLabel = document.querySelector('label[for="password"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const errorDiv = document.querySelector('.error.itemLevel'); 
    const signInButton = document.getElementById('next');

    if (emailLabel) emailLabel.textContent = 'Usuario';
    if (emailInput) emailInput.placeholder = 'samplemail@gmail.com';
    if (passwordLabel) passwordLabel.textContent = 'Contraseña';
    if (passwordInput) passwordInput.placeholder = '********';
    if (errorDiv) errorDiv.remove();  
    if (signInButton) signInButton.textContent = 'Entrar';


  };

  setTimeout(init, 100);