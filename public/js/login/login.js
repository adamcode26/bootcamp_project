const loginButton = document.getElementById("login_form_submit");

loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    const username = document.getElementById("username_field").value;
    const password = document.getElementById("password_field").value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Enter correect username/password")
    }
})