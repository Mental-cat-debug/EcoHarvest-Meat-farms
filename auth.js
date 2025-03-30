document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const validUsername = "Clarissa Peters";
        const validPassword = "c3RhZmYncw==";

        if (username === validUsername && password === validPassword) {
            window.location.href = "staff.html"; // Redirects to login.html
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});
