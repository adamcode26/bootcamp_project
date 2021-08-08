const loginButton = document.getElementById("login_form_submit");

loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    const username = document.getElementById("username_field").value;
    const password = document.getElementById("password_field").value;
    obj = {}
    obj.username = username
    obj.password = password
    console.log(username+" "+ password)
    fetch("http://localhost:8080/admin/validate",{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem( "adminId", data.adminId );
            window.location = "http://127.0.0.1:8081/html/landingPages/adminLanding.html";
        })
})
