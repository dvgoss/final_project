document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gets form data
    var formData = new FormData(this);

    //Sends form data to server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Handle success (optional)
                alert("Email sent successfully!");
            } else {
                // Handle error (optional)
                alert("Failed to send email.");
            }
        }
    };
    xhr.send(formData);
});

// toggle dark mode and store user preference
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Stores user preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

//hamburger menu
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}