const driverId = localStorage.getItem("driverId")
const url = "http://localhost:8080/driver/view/" + driverId;


fetch(url,{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            let element = document.getElementById("username")
            element.innerHTML = `${sampleData.username}`
            element = document.getElementById("email")
            element.innerHTML = `${sampleData.email}`
            element = document.getElementById("address")
            element.innerHTML = `${sampleData.address}`
            element = document.getElementById("mobile")
            element.innerHTML = `${sampleData.mobileNumber}`
            element = document.getElementById("id")
            element.innerHTML = `${sampleData.driverId}`
            element = document.getElementById("licence")
            element.innerHTML = `${sampleData.licenceNo}`
            element = document.getElementById("rating")
            element.innerHTML = `${sampleData.rating}`
            element = document.getElementById("carType")
            element.innerHTML = `${sampleData.cab.carType}`
            element = document.getElementById("perKmRate")
            element.innerHTML = `${sampleData.cab.perKmRate}`
            element = document.getElementById("cabId")
            element.innerHTML = `${sampleData.cab.cabId}`
            //console.log(data);
            // is to render on the dom 
})