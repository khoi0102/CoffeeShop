document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const form = document.querySelector('.login-form'); // Reference to the form itself
    const signin = document.querySelector('.sign-in');
    const input = document.querySelector('.input-group');
    const label1 = document.querySelector('.password')
    const pass = document.getElementById('password')

    function login(event) {
        event.preventDefault(); // Prevent the default form submission
        const username = document.getElementById('username').value; // Get the username value
        const password = document.getElementById('password').value; // Get the password value

        // Check if both username and password are not empty
        if (username && password) {
            signin.innerText = `Welcome Back, ${username}`;
            input.style.display = 'none'; // Hide the entire form container if needed
            label1.style.display='none';
            pass.style.display='none';
            button.style.display='none';
        } else {
            // Optional: Alert the user if one or both fields are empty
            alert('Please enter both username and password.');
        }
    }

    button.addEventListener('click', login); // Attach the event listener to the button
});
