var validEmail = "examplexyz@gmail.com";
var validPassword = "1234567";

document.getElementById("btn").addEventListener("click", verify);

function verify() {
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value; 
    
    if (email === validEmail && password === validPassword) {
        alert("Login Successful!");
  
    } else {
        alert("Invalid email or password.");
    }
};
