
// =============================
// MOBILE NAVIGATION
// =============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// =============================
// DARK / LIGHT MODE
// =============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☀";

    localStorage.setItem("portfolioTheme",
        isLight ? "light" : "dark");
});


// Restore previously selected theme

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☾";
}


// =============================
// PROJECT FILTER
// =============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const selected = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (selected === "all" ||
                selected === category) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// =============================
// RECRUITER CONTACT FORM
// =============================

const contactForm =
    document.getElementById("contactForm");

// Replace with your actual email address
const recruiterEmail = "YOUR_EMAIL@gmail.com";

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill all fields.");
        return;
    }

    const mailSubject =
        encodeURIComponent(subject);

    const mailBody =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

    const mailLink =
        "mailto:" + recruiterEmail +
        "?subject=" + mailSubject +
        "&body=" + mailBody;

    window.location.href = mailLink;

});
