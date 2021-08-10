let url = "http://localhost:8080/trip/view"

var table = document.getElementById("driver_list").getElementsByTagName("tbody")[0]
fetch(url,{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            sampleData.forEach((data)=>{
                var row = table.insertRow()
                var cell1 = row.insertCell()
                cell1.innerHTML = `${data.customer.username}`
                var cell3 = row.insertCell()
                cell3.innerHTML = `${data.driver.username}`
                var cell2 = row.insertCell()
                cell2.innerHTML = `${data.distanceKm}`
                var cell4 = row.insertCell()
                cell4.innerHTML = `${data.distanceKm*data.driver.cab.perKmRate}`
                var cell5 = row.insertCell()
                cell5.innerHTML = `${data.fromDate}`
                var cell6 = row.insertCell()
                cell6.innerHTML = `${data.toDate}`
                var cell7 = row.insertCell()
                cell7.innerHTML = `${data.fromLocation}`
                var cell8 = row.insertCell()
                cell8.innerHTML = `${data.toLocation}`

            })
            // is to render on the dom 
        })
        .catch((error)=>{
            alert("Something Went Wrong")
        })