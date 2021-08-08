const params = new URLSearchParams(window.location.search)
const myParam = params.get('id');
const url = "http://localhost:8080/driver/view/" + myParam

const form = document.getElementById("update_form")
fetch(url,{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            form.innerHTML = `
            <div class="col-md-4">
                <label for="id" class="form-label">ID</label>
                <input type="text" class="form-control" name="id" id="id" required value="${sampleData.driverId}" readonly>
            </div>
            <label for="user_name" class="form-label">Username</label>
            <div class="input-group col-md-4">
              <span class="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" class="form-control" id="username" name="username" aria-describedby="inputGroupPrepend2" value="${sampleData.username}" required>
            </div>
          </div>
          <div class="col-md-4">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" name="email" id="email" value="${sampleData.email}" required>
          </div>
          <div class="col-md-4">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="password" value="${sampleData.password}" required>
          </div>
          <div class="col-md-4">
            <label for="city" class="form-label">Address</label>
            <input type="text" class="form-control" name="address" id="address" value="${sampleData.address}" required>
          </div>
          <div class="col-md-4">
            <label for="city" class="form-label">Mobile No.</label>
            <input type="text" class="form-control" name="moile" id="mobile" value="${sampleData.mobileNumber}" required>
          </div>
          <div class="col-md-4">
            <label for="city" class="form-label">Licence No.</label>
            <input type="text" class="form-control" name="licence" id="licence" value="${sampleData.licenceNo}" required>
          </div>
          <div class="col-md-4">
            <label for="city" class="form-label">Rating No.</label>
            <input type="text" class="form-control" name="rating" id="rating" value="${sampleData.rating}" required>
          </div>
          <div class="col-md-4">
            <label for="city" class="form-label">Car ID</label>
            <input type="text" class="form-control" name="car" id="car" value="${sampleData.cab.cabId}" readonly>
          </div>
          <div class="col-12">
          <a href="#" class="btn btn-info" role="button" onclick= "update()">Submit</a>
          </div>`
        })


 

    function update(){
        obj = {}
        cab = {}
        cab.cabId = document.getElementById("car").value
        console.log(document.getElementById("id").value)
        obj.username = document.getElementById("username").value
        obj.password = document.getElementById("password").value
        obj.address = document.getElementById("address").value
        obj.mobileNumber = document.getElementById("mobile").value
        obj.email = document.getElementById("email").value
        obj.driverId = document.getElementById("id").value
        obj.rating = document.getElementById("rating").value
        obj.licenceNo = document.getElementById("licence").value
        obj.cab = cab
        fetch("http://localhost:8080/driver/update", 
        {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => {
        alert("Record updataed sucessfully");
        window.location.reload();
    } )
    }