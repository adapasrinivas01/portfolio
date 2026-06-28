const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    try {
        const response = await fetch("https://portfolio-backend.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            status.textContent = result.message;
            status.style.color = "green";
            form.reset();
        } else {
            status.textContent = result.message;
            status.style.color = "red";
        }
    } catch (error) {
        status.textContent = "Server unavailable. Please try again later.";
        status.style.color = "red";
    }
});