document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.querySelector(".sign-btn");

    signInButton.addEventListener("click", function() {
        window.location.href = 'SignIn.html';
    });
});
