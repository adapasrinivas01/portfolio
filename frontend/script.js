const form = document.getElementById("contact-form");
const status = document.getElementById("status");

const API_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5000/contact"
        : "https://portfolio-backend-abc123.onrender.com/contact";

form.addEventListener("submit", async (e) => {

e.preventDefault();  

const data = {  
    name: document.getElementById("name").value,  
    email: document.getElementById("email").value,  
    message: document.getElementById("message").value  
};  

status.innerHTML = "Sending...";  

try {  

    const response = await fetch(API_URL, {  

        method: "POST",  

        headers: {  
            "Content-Type": "application/json"  
        },  

        body: JSON.stringify(data)  

    });  

    const result = await response.json();  

    if (response.ok) {  

        status.innerHTML = "✅ Message Sent Successfully";  

        status.style.color = "green";  

        form.reset();  

    } else {  

        status.innerHTML = result.message;  

        status.style.color = "red";  

    }  

} catch (err) {  

    status.innerHTML = "Server Error";  

    status.style.color = "red";  

}

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlinks a");

window.addEventListener("scroll", () => {

let current = "";  

sections.forEach(section => {  

    const sectionTop = section.offsetTop - 100;  

    if (pageYOffset >= sectionTop) {  

        current = section.getAttribute("id");  

    }  

});  

navLinks.forEach(link => {  

    link.classList.remove("active");  

    if (link.getAttribute("href") === "#" + current) {  

        link.classList.add("active");  

    }  

});

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){  

    e.preventDefault();  

    document.querySelector(this.getAttribute("href")).scrollIntoView({  

        behavior:"smooth"  

    });  

});

});