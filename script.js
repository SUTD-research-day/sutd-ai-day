

document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register-btn");
    registerButton.addEventListener("click", function() {
        alert("Registration is currently closed. Stay tuned for updates!");
        //https://forms.office.com/r/rMPzntEGgh
    });
    const navbarHeight = document.querySelector("nav").offsetHeight;
    
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.offsetTop - navbarHeight - 20; // Adjust offset
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });
});

