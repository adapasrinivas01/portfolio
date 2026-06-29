const form = document.getElementById("contact-form");
const status = document.getElementById("status");

// API URL for both Localhost and Render
const API_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "http://localhost:5000/contact"
        : "https://portfolio-9j3o.onrender.com/contact";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    status.textContent = "Sending...";
    status.style.color = "#fff";

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
            status.textContent = "✅ Message Sent Successfully!";
            status.style.color = "lime";
            form.reset();
        } else {
            status.textContent = result.message || "Failed to send message.";
            status.style.color = "red";
        }
    } catch (err) {
        console.error(err);
        status.textContent = "❌ Server Error";
        status.style.color = "red";
    }
});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlinks a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});