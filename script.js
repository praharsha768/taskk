function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'batchupraharsha@gmail.com' && password === '123') {
        alert('Login successful!');
        // Redirect to another page or perform additional actions here
    } else {
        alert('Invalid email or password. Please try again.');
    }
}