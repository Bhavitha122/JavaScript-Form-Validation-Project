document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        displayResult();
    }
});

function validateForm() {
    let isValid = true;

    // Full Name validation
    const fullName = document.getElementById('fullName').value;
    const nameError = document.getElementById('nameError');
    if (fullName.length < 5) {
        nameError.textContent = 'Full Name must be at least 5 characters long';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = 'Enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Phone Number validation
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '123456789' || !phonePattern.test(phone)) {
        phoneError.textContent = 'Enter a valid 10-digit phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase() || password.length < 8) {
        passwordError.textContent = 'Password cannot be "password", your name, or less than 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    return isValid;
}

function displayResult() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const resultHtml = `
        <div class="alert alert-success">
            <h4 class="alert-heading">Registration Successful!</h4>
            <p>Full Name: ${fullName}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
        </div>
    `;

    document.getElementById('result').innerHTML = resultHtml;
}
