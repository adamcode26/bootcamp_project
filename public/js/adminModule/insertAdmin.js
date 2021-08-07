const submit = document.getElementById("submit")  
submit.addEventListener("click", function(event){
    event.preventDefault()
    obj = {}
    //console.log(localStorage.getItem("id"))
        obj.username = document.getElementById("username").value
        obj.password = document.getElementById("password").value
        obj.address = document.getElementById("address").value
        obj.mobileNumber = document.getElementById("mobile").value
        obj.email = document.getElementById("email").value
        fetch("http://localhost:8080/admin/new-admin", 
        {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => {
        alert("Record Inserted Successfully"+  data);
    } )
    })