const sampleData = [
    {
        carId : "1234",
        carType : "SUV",
        rate : "12",
        driver : "Jhon Doe",
        driverid : "1234"
    }
]
var table = document.getElementById("table_list").getElementsByTagName("tbody")[0]
fetch("http://localhost:8080/cab/view/Seadan",{method: 'GET'})
        .then(resp => resp.json())
        .then(data => {
            /*data.forEach((entry) => {
                var row = table.insertRow()
                var cell1 = row.insertCell()
                //cell1.innerHTML = `${entry.carId}`
                var cell2 = row.insertCell()
                cell2.innerHTML = `${entry.carType}`
                var cell3 = row.insertCell()
                //cell3.innerHTML = `${entry.rate}`
                var cell4 = row.insertCell()
                //cell4.innerHTML = `${entry.driver}`
                var cell5 = row.insertCell()
                cell5.innerHTML = `${entry.perKmRate}`
                var cell6 = row.insertCell()
                cell6.innerHTML = `<a href="#" class="btn btn-info " role="button">View</a>`
                var cell7 = row.insertCell()
                cell7.innerHTML = `<a href="#" class="btn btn-info " role="button">Delete</a>`
            })*/
            console.log(data);
            // is to render on the dom 
        })
/*sampleData.forEach((data)=>{
    var row = table.insertRow()
    var cell1 = row.insertCell()
    cell1.innerHTML = `${data.carId}`
    var cell2 = row.insertCell()
    cell2.innerHTML = `${data.carType}`
    var cell3 = row.insertCell()
    cell3.innerHTML = `${data.rate}`
    var cell4 = row.insertCell()
    cell4.innerHTML = `${data.driver}`
    var cell5 = row.insertCell()
    cell5.innerHTML = `${data.driverid}`
    var cell6 = row.insertCell()
    cell6.innerHTML = `<a href="#" class="btn btn-info " role="button">View</a>`
    var cell7 = row.insertCell()
    cell7.innerHTML = `<a href="#" class="btn btn-info " role="button">Delete</a>`
})*/