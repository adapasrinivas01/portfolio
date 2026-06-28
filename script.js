const form = document.getElementById("contact-form");
const status = document.getElementById("status");

const API_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5000"
        : window.location.origin;

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#555";

    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    try {

        const response = await fetch(`${API_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {

            status.textContent = result.message || "Message sent successfully!";
            status.style.color = "green";
            form.reset();

        } else {

            status.textContent = result.message || "Failed to send message.";
            status.style.color = "red";

        }

    } catch (error) {

        console.error(error);

        status.textContent = "Server unavailable. Please try again later.";
        status.style.color = "red";

    }

});