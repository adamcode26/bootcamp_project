const submit = document.getElementById("submit")

submit.addEventListener("click", function(event){
    
    obj={}
    obj.carType = document.getElementById("car_type").value;
    obj.perKmRate = document.getElementById("per_km_rate").value

    console.log(JSON.stringify(obj))
    event.preventDefault()
    fetch("http://localhost:8080/cab/new-cab", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
        alert("Record Inserted Successfully");
    } )
})
.catch((error)=>{
    alert("Something Went Wrong")
})