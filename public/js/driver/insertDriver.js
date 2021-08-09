fetch("http://localhost:8080/cab/viewfreecab",{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            sampleData.forEach((data)=>{
               const option=document.getElementById("cab")
               const newOption=document.createElement("option")
               newOption.textContent = data.cabId
               newOption.value =  data.cabId
               option.appendChild(newOption)
            })
            //console.log(data);
            // is to render on the dom 
        })
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
    .catch((error)=>{
        alert("Something Went Wrong")
    })
    })