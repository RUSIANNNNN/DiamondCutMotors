let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let passwordInput = document.getElementById('password');
let confirmpasswordInput = document.getElementById('confirmpassword');
let aggreInput = document.getElementById('terms-and-services');

let errorMessage = document.getElementById('error');
let form = document.getElementById('form');

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let username = usernameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmpasswordInput.value;
    let check = aggreInput.checked;
    let error = "";

    if (username.length < 5 || username.length > 20) {
        error = "Username must consist of 5 - 20 characters";
    } else if (!email.endsWith("@gmail.com") || email.startsWith('@')) {
        error = "Email invalid";
    } else if(phone.length < 8 ){
        error = "Phone number must consist of at least 8 number"
    } else if (password.length < 8) {
        error = "Password must consist of at least 8 characters";
    } else if (password !== confirmPassword) {
        error = "Passwords do not match";
    } else if (!check) {
        error = "Checkbox hasn't been checked";
    } 

    if (error !== "") {
        errorMessage.innerHTML = error;
    } else {
        errorMessage.innerHTML = "";
        alert("Your account was created succesfully. Please login to access the website");
        window.location.href = "login.html"; // manually redirect
    }
});
