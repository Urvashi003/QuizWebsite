function handleLogin(event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate and perform login logic (you would replace this with your actual authentication logic)
    if (email && password) {
        alert(`Login successful!\nEmail: ${email}\nPassword: ${password}`);
    } else {
        alert('Please enter both email and password.');
    }
}
