const loginForm = document.getElementById("");
const loginButton = document.getElementById("login_form_submit");
const loginErrorMsg = document.getElementById("login_error_msg");

loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    const username = document.getElementById("username_field").value;
    const password = document.getElementById("password_field").value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})