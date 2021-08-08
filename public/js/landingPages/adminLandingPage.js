
function logout(){
    localStorage.removeItem("adminId")
    window.location = "http://127.0.0.1:8081/html/landingPages/welcomeLanding.html";
}