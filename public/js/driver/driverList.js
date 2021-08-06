const sampleData = [
    {
        driverName : "Driver 1",
        driverID : "1234",
    }
]

var table = document.getElementById("driver_list").getElementsByTagName("tbody")[0]
fetch("http://localhost:8080/driver/getbestdriver",{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            sampleData.forEach((data)=>{
                var row = table.insertRow()
                var cell1 = row.insertCell()
                cell1.innerHTML = `${data.username}`
                var cell2 = row.insertCell()
                cell2.innerHTML = `${data.driverId}`
                var cell4 = row.insertCell()
                cell4.innerHTML = `${data.rating }`
                var cell3 = row.insertCell()
                cell3.innerHTML = `<a href="#" class="btn btn-info" id=${data.cusId} role="button">View</a>`
                var cell4 = row.insertCell()
                cell4.innerHTML = `<a href="#" class="btn btn-info" id=${data.cusId} role="button">Delete</a>`
            })
            console.log(data);
            // is to render on the dom 
        })