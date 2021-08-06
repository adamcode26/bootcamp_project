const submit = document.getElementById("submit")  
submit.addEventListener("click", function(event){
    event.preventDefault()
    obj = {}
    cab = {}
    //console.log(localStorage.getItem("id"))
        cab.cabId = document.getElementById("cab").value
        obj.username = document.getElementById("username").value
        obj.password = document.getElementById("password").value
        obj.address = document.getElementById("address").value
        obj.licenceNo = document.getElementById("licence").value
        obj.mobileNumber = document.getElementById("mobile").value
        obj.email = document.getElementById("email").value
        obj.cab = cab
        fetch("http://localhost:8080/driver/new-driver", 
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