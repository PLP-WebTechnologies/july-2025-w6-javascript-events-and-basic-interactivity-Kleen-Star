const container = document.getElementById("container");
const button = document.getElementById("prizebtn");
button.addEventListener("click", () => {
    container.innerHTML = "<p>Sorry! you will receive a prize at the end of the course.</p>";
});


const tog = document.getElementById("toggle")
const togbtn = document.getElementById("togglebtn")

togbtn.onclick = function () {
    tog.style.backgroundColor = "darkgrey";
    tog.style.color = "white";
}

const form = document.getElementById("signupForm");
const nam = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const errorMessage = document.getElementById("errorMessage");
form.onsubmit = function (e) {
    if (!nam.value) {
        e.preventDefault(); 
        errorMessage.textContent = "name field is empty";
    }
    if (!email.value) {
        e.preventDefault(); 
        errorMessage.textContent = "Email is required!";
    }
    if (!pass.value) {
        e.preventDefault(); 
        errorMessage.textContent = "password cannot be empty!";
    }
}; 