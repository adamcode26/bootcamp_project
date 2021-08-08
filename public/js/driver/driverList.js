const sampleData = [
    {
        driverName : "Driver 1",
        driverID : "1234",
    }
]

var table = document.getElementById("driver_list").getElementsByTagName("tbody")[0]
fetch("http://localhost:8080/driver/getalldriver",{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            sampleData.forEach((data)=>{
                var row = table.insertRow()
                var cell1 = row.insertCell()
                cell1.innerHTML = `${data.username}`
                var cell2 = row.insertCell()
                cell2.innerHTML = `${data.email}`
                var cell3 = row.insertCell()
                cell3.innerHTML = `${data.mobileNumber}`
                var cell4 = row.insertCell()
                cell4.innerHTML = `${data.licenceNo}`
                var cell5 = row.insertCell()
                cell5.innerHTML = `${data.rating}`
                var cell6 = row.insertCell()
                cell6.innerHTML = `${data.cab.cabId}`
                var cell7 = row.insertCell()
                const url = "http://127.0.0.1:8081/html/driver/updateDriver.html?id="+data.driverId
                cell7.innerHTML = `<a href="${url}" class="btn btn-info" onclick = "view(${data.driverId})"  role="button">View</a>`
                var cell8 = row.insertCell()
                cell8.innerHTML = `<a href="#" class="btn btn-info" onclick= "del(${data.driverId})" role="button">Delete</a>`
            })
            console.log(data);
            // is to render on the dom 
        })

        function view(driverId){

        }

        function del(driverId){
            const url = "http://localhost:8080/driver/delete/" + driverId 
            console.log(url)
            fetch(url,{method: 'DELETE'})
            .then(resp => resp.json())
            .then(data=>{
                alert("Record Deleted Successfully")
                window.location.reload()
            })
        }