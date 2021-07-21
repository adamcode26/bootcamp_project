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
sampleData.forEach((data)=>{
    var row = table.insertRow()
    var cell1 = row.insertCell()
    cell1.innerHTML = `${data.carId}`
    var cell2 = row.insertCell()
    cell2.innerHTML = `${data.cartype}`
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
})