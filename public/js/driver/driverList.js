const sampleData = [
    {
        driverName : "Driver 1",
        driverID : "1234",
    }
]
var table = document.getElementById("driver_list").getElementsByTagName("tbody")[0]
sampleData.forEach((data)=>{
    var row = table.insertRow()
    var cell1 = row.insertCell()
    cell1.innerHTML = `${data.driverName}`
    var cell2 = row.insertCell()
    cell2.innerHTML = `${data.driverID}`
    var cell3 = row.insertCell()
    cell3.innerHTML = `<a href="#" class="btn btn-info " role="button">View</a>`
    var cell4 = row.insertCell()
    cell4.innerHTML = `<a href="#" class="btn btn-info " role="button">Delete</a>`
})