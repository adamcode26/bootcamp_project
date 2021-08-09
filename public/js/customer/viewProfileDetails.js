const cusId = localStorage.getItem("id")
const url = "http://localhost:8080/customer/view/" + cusId;


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
            element.innerHTML = `${sampleData.cusId}`
            //console.log(data);
            // is to render on the dom 
})
.catch((error)=>{
    alert("Something Went Wrong")
})