function togglePasswordVisibility() {
    var passwordField = document.getElementById("passwordField");
    var togglePassword = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.innerHTML = '<i class="fas fa-eye-slash" style="color: blue;"></i>';
    } else {
        passwordField.type = "password";
        togglePassword.innerHTML = '<i class="fas fa-eye" style="color: blue;"></i>';
    }
}