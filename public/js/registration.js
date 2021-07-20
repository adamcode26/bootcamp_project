const states = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
 "Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
 "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh",
 "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi",
 "Lakshadweep", "Puducherry"]

states.forEach((state)=>{
    const option = document.getElementById("state")
    const newOption = document.createElement("option")
    newOption.textContent = state
    option.appendChild(newOption)
})

const isDriver = document.getElementById("is_driver")
isDriver.addEventListener("click", function(){
    console.log(isDriver.checked)
    if(isDriver.checked === true){
        document.getElementById("driver_hidden").style.display="block"
    }
    else{
        document.getElementById("driver_hidden").style.display="none"
    }
})