let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

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
    let email = emailInput.value;
    let password = passwordInput.value;
    let error = "";

    if (!email.endsWith("@gmail.com") || email.startsWith('@')) {
        error = "Email invalid";
    } else if (password.length < 8) {
        error = "Password must consist of at least 8 characters";
    } 

    if (error !== "") {
        errorMessage.innerHTML = error;
    } else {
        errorMessage.innerHTML = "";
        alert("You have successfully signed into your account");
        window.location.href = "index.html"; // manually redirect
    }
});
