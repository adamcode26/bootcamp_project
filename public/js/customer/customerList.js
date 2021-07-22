const sampleData = [
    {
        customerName : "John Doe",
        customerID : "1234",
    }
]
var table = document.getElementById("customer_list").getElementsByTagName("tbody")[0]
sampleData.forEach((data)=>{
    var row = table.insertRow()
    var cell1 = row.insertCell()
    cell1.innerHTML = `${data.customerName}`
    var cell2 = row.insertCell()
    cell2.innerHTML = `${data.customerID}`
    var cell3 = row.insertCell()
    cell3.innerHTML = `<a href="#" class="btn btn-info " role="button">View</a>`
    var cell4 = row.insertCell()
    cell4.innerHTML = `<a href="#" class="btn btn-info " role="button">Delete</a>`
})