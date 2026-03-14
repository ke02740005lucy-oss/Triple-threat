function toggleInfo(id){

let text = document.getElementById(id);

if(text.style.display === "none"){
    text.style.display = "block";
}
else{
    text.style.display = "none";
}

}
function showMore(){

let text = document.getElementById("moreText");

if(text.style.display === "none"){
    text.style.display = "block";
}
else{
    text.style.display = "none";
}

}
function toggleChallenge(id){

let text = document.getElementById(id);

if(text.style.display === "none" || text.style.display === ""){
    text.style.display = "block";
}
else{
    text.style.display = "none";
}

}
// script.js
function toggleInfo(id){
    let text = document.getElementById(id);
    if(text.style.display === "none"){
        text.style.display = "block";
    } else{
        text.style.display = "none";
    }
}

function toggleChallenge(id){
    let text = document.getElementById(id);
    if(text.style.display === "none" || text.style.display === ""){
        text.style.display = "block";
    } else{
        text.style.display = "none";
    }
}

function showMore(){
    let text = document.getElementById("moreText");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else{
        text.style.display = "none";
    }
}
// Form validation and submission simulation
function validateForm(){
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return false;
    }

    // Simple email pattern check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email)){
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email.";
        return false;
    }

    // Simulate successful submission
    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your message has been sent.";
    
    // Clear form
    document.getElementById("contactForm").reset();

    return false; // prevent actual form submission
}