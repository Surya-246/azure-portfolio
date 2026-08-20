// ===============================
// CURRENT YEAR
// ===============================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ===============================
// RESUME BUTTON
// ===============================

const resumeButton = document.getElementById("resumeButton");

if (resumeButton) {

    resumeButton.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Resume download will be enabled once the resume PDF is added to the project."
        );

    });

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {

            formStatus.textContent = "Please fill in all fields.";

            return;
        }

        formStatus.textContent =
            "Message received! Backend integration will be added soon.";

        contactForm.reset();

    });

}