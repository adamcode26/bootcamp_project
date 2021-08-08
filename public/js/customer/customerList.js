/*const sampleData = [
    {
        customerName : "John Doe",
        customerID : "1234",
    }
]*/
var table = document.getElementById("customer_list").getElementsByTagName("tbody")[0]
fetch("http://localhost:8080/customer/view",{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            sampleData.forEach((data)=>{
                var row = table.insertRow()
                var cell1 = row.insertCell()
                cell1.innerHTML = `${data.cusId}`
                var cell2 = row.insertCell()
                cell2.innerHTML = `${data.username}`
                var cell3 = row.insertCell()
                cell3.innerHTML = `${data.address}`
                var cell4 = row.insertCell()
                cell4.innerHTML = `${data.email}`
                var cell5 = row.insertCell()
                cell5.innerHTML = `${data.mobileNumber}`
                const url = "http://127.0.0.1:8081/html/customer/updateCustomer.html?id="+data.cusId
                var cell6 = row.insertCell()
                cell6.innerHTML = `<a href="${url}" class="btn btn-info" role="button" onclick = "view(${data.cusId})">Update</a>`
                var cell7 = row.insertCell()
                cell7.innerHTML = `<a href="#" class="btn btn-info" role="button" onclick= "del(${data.cusId})">Delete</a>`
            })
            console.log(data);
            // is to render on the dom 
        })

       /* function view(cusId){
            const url = "http://127.0.0.1:8081/html/customer/updateCustomer.html?id="+cusId
            window.location(url)
        }*/
  
        function del(cusId){
            const url = "http://localhost:8080/customer/delete/" + cusId 
            console.log(url)
            fetch(url,{method: 'DELETE'})
            .then(resp => resp.json())
            .then(data=>{
                alert("Record Deleted Successfully")
                window.location.reload()
            })
        }