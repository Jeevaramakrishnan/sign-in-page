document.addEventListener('DOMContentLoaded', () => {
    showLogin();
});

function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signUpForm').classList.remove('active');
}

function showSignUp() {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signUpForm').classList.add('active');
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Login Attempt\nUsername: ${username}\nPassword: ${password}`);
}

function signUp() {
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert(`Sign Up Attempt\nUsername: ${username}\nPassword: ${password}`);
}