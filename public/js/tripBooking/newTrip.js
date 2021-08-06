
let sampleData

fetch("http://localhost:8080/driver//getfreedriver",{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            sampleData.forEach((data)=>{
               const option=document.getElementById("driver")
               const newOption=document.createElement("option")
               newOption.textContent = data.username
               newOption.value =  data.username
               option.appendChild(newOption)
            })
            //console.log(data);
            // is to render on the dom 
        })
const submit = document.getElementById("submit")


  
submit.addEventListener("click", function(event){
    event.preventDefault()
    obj = {}
    console.log(document.getElementById("driver").value)
    fetch("http://localhost:8080/driver/getfreedriver",{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
                obj.driver = sampleData.find((data)=>{
                data.username = document.getElementById("driver").value
                }) 
        })
        obj.fromLocation = document.getElementById("from").value
        obj.toLocation = document.getElementById("to").value
        obj.fromDate = document.getElementById("from_date").value
        obj.todate = document.getElementById("to_date").value
        obj.distanceKm = document.getElementById("distance").value
        fetch("http://localhost:8080/trip/new-trip", 
        {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => {
        alert("Record Inserted Successfully"+  data);
    } )
    })  

    /* {
        "cabId": 1,
        "carType": "Sedan",
        "perKmRate": 12.7
    },
    {
        "cabId": 2,
        "carType": "Sedan",
        "perKmRate": 12.5
    } 
    {
    "username": "adam1",
    "password": null,
    "address": null,
    "email": null,
    "mobileNumber": null,
    "driverId": 5,
    "licenceNo": "111111",
    "rating": 4.7,
    "cab": {
        "cabId": 1,
        "carType": "Sedan",
        "perKmRate": 12.7
    }
}

{
        "tripId": 2,
        "customer": {
            "username": "ayush",
            "password": "123456",
            "address": "Mirzapur",
            "email": "test@gmail.com",
            "mobileNumber": null,
            "cusId": 1
        },
        "driver": null,
        "fromLocation": "MZP",
        "toLocation": "BSB",
        "fromDate": null,
        "toDate": null,
        "status": false,
        "distanceKm": 0.0,
        "bill": 0.0
    }

    {
        "customer": {
            "username": "ayush",
            "password": "123456",
            "address": "Mirzapur",
            "email": "test@gmail.com",
            "mobileNumber": null,
            "cusId": 1
        },
        "driver": {
            "username": "adam1",
    "password": null,
    "address": null,
    "email": null,
    "mobileNumber": null,
    "driverId": 5,
    "licenceNo": "111111",
    "rating": 4.7,
    "cab": {
        "cabId": 1,
        "carType": "Sedan",
        "perKmRate": 12.7
            }
        },
        "fromLocation": "MZP",
        "toLocation": "BSB",
        "fromDate": null,
        "toDate": null,
        "status": false,
        "distanceKm": 0.0,
        "bill": 0.0

    }

    */