// Define passwords and corresponding redirect pages
const passwordRedirects = {
    "c3RhZmYncw==": "login1.html",
    "HXM4NF@RM": "humanfarm.html",
    "3": "info.html"
};

function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if the entered password exists in the object
    if (passwordRedirects[enteredPassword]) {
        // Redirect to the corresponding page
        window.location.href = passwordRedirects[enteredPassword];
    } else {
        // Show error message if the password is incorrect
        errorMessage.style.display = "block";
    }
}

