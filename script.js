// =================================
// The below is the js code for home page
// =================================

// 1) implemnting toggle button feature
let menuIcon = document.querySelector(".menu-icon");
let header = document.querySelector(".header");
menuIcon.addEventListener("click", () => {
    header.classList.toggle("mobile-open");
    if (header.classList.contains("mobile-open")) {
        menuIcon.textContent = "✖";
    }
    else {
        menuIcon.textContent = "☰";

    }
});


// 2) implementing animation by increasing numbers of hours, patients and doctors
let counters = document.querySelectorAll(".about-hospital-history h2");

counters.forEach((counter) => {
    let text = counter.innerText;   // "100+", "10k+", "24/7"
    let number = parseInt(text);    // 100, 10, 24
    let current = 0;

    let interval = setInterval(function () {
        current++;

        counter.innerText = current;

        if (current >= number) {
            counter.innerText = text; // bring back original text
            clearInterval(interval);
        }
    }, 20);
});


//implementing the animation on sections by user scroll
// Select elements to animate
let animatedElements = document.querySelectorAll(
    ".cards, .card, .section2, .section3, .section4"
);

// Add fade-section class initially
animatedElements.forEach((el) => {
    el.classList.add("fade-section");
});

// Detect scroll
window.addEventListener("scroll", () => {
    animatedElements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});




// ==============================
// The below is the js code for doctor page
// =================================
// Get elements
let searchInput = document.getElementById("searchDoctor");
let filterSelect = document.getElementById("filterSpecialty");
let resetBtn = document.getElementById("resetFilters");
let noDoctorsMessage = document.getElementById("noDoctorsMessage");
let doctorCards = document.querySelectorAll(".doctor-card");


// ------------------------------
// FUNCTION: Check visible doctors
// ------------------------------
function checkDoctorsVisible() {
    if (!noDoctorsMessage) return;

    let visibleCount = 0;

    doctorCards.forEach(function (card) {
        if (card.style.display !== "none") {
            visibleCount++;
        }
    });

    if (visibleCount === 0) {
        noDoctorsMessage.style.display = "block";
    } else {
        noDoctorsMessage.style.display = "none";
    }
}


// ------------------------------
// SEARCH BY DOCTOR NAME
// ------------------------------
if (searchInput) {
    searchInput.addEventListener("input", function () {
        let searchText = searchInput.value.toLowerCase();

        doctorCards.forEach(function (card) {
            let doctorName = card.querySelector("h3").innerText.toLowerCase();

            if (doctorName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        checkDoctorsVisible();
    });
}


// ------------------------------
// FILTER BY SPECIALIZATION
// ------------------------------
if (filterSelect) {
    filterSelect.addEventListener("change", function () {
        let selectedValue = filterSelect.value;

        doctorCards.forEach(function (card) {
            let specialty = card.getAttribute("data-specialty");

            if (selectedValue === "" || specialty === selectedValue) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        checkDoctorsVisible();
    });
}


// ------------------------------
// RESET FILTERS BUTTON
// ------------------------------
if (resetBtn) {
    resetBtn.addEventListener("click", function () {

        if (searchInput) searchInput.value = "";
        if (filterSelect) filterSelect.value = "";

        doctorCards.forEach(function (card) {
            card.style.display = "block";
        });

        if (noDoctorsMessage) {
            noDoctorsMessage.style.display = "none";
        }
    });
}


// Initial check (safe)
checkDoctorsVisible();




//the below is the js code for specialization page
let animatedSpecializationPage = document.querySelectorAll(
    ".specializations-grid-large, .spec-card-large"
);

// Add fade-section initially
animatedSpecializationPage.forEach((el) => {
    el.classList.add("fade-section");
});

// Detect scroll
window.addEventListener("scroll", function () {
    animatedSpecializationPage.forEach(function (el) {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});


//the below is the js code for about page
// ABOUT PAGE SCROLL ANIMATION
let aboutElements = document.querySelectorAll(
    ".about-content, .about-image, .stat-card"
);

aboutElements.forEach((el) => {
    el.classList.add("fade-section");
});

window.addEventListener("scroll", function () {
    aboutElements.forEach(function (el) {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});



//the below is the js code for contact page
// CONTACT PAGE SCROLL ANIMATION
let contactElements = document.querySelectorAll(
    ".contact-info, .contact-form-wrapper"
);

contactElements.forEach((el) => {
    el.classList.add("fade-section");
});

window.addEventListener("scroll", function () {
    contactElements.forEach(function (el) {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});


// CONTACT FORM VALIDATION
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (email === "") {
            alert("Please enter your email");
            return;
        }

        if (message === "") {
            alert("Please write your message");
            return;
        }

        alert("Message sent successfully! (Frontend)");

        contactForm.reset();
    });
}




//the below is the js code for login page
// ===============================
// LOGIN PAGE SCRIPT
// ===============================
const loginForm = document.querySelector(".login-form");

if (loginForm) {
    const loginEmailInput = document.getElementById("email");
    const loginPasswordInput = document.getElementById("password");
    const loginRememberCheckbox = document.querySelector(".remember input");
    const loginForgotPassword = document.querySelector(".forgot-password");
    const loginButton = document.querySelector(".login-btn");

    // Message element
    const loginMessage = document.createElement("p");
    loginMessage.style.marginTop = "10px";
    loginMessage.style.textAlign = "center";
    loginForm.appendChild(loginMessage);

    // Regex
    const loginEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const loginPasswordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // Submit event
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginEmailInput.value.trim();
        const password = loginPasswordInput.value.trim();

        loginMessage.textContent = "";
        loginMessage.style.color = "red";

        if (email === "" || password === "") {
            loginMessage.textContent = "Email and password are required";
            return;
        }

        if (!loginEmailRegex.test(email)) {
            loginMessage.textContent = "Please enter a valid email address";
            return;
        }

        if (!loginPasswordRegex.test(password)) {
            loginMessage.textContent =
                "Password must be at least 8 characters and include a letter, number, and symbol";
            return;
        }

        loginButton.disabled = true;
        loginButton.textContent = "Logging in...";

        setTimeout(() => {
            loginMessage.style.color = "green";
            loginMessage.textContent = "Login successful";

            if (loginRememberCheckbox.checked) {
                console.log("Remember Me selected");
            }

            loginForm.reset();
            loginButton.disabled = false;
            loginButton.textContent = "Login";
        }, 1000);
    });

    loginEmailInput.addEventListener("input", () => loginMessage.textContent = "");
    loginPasswordInput.addEventListener("input", () => loginMessage.textContent = "");

    loginForgotPassword.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Forgot password feature will be handled by backend.");
    });
}



//this is the js code for my registration page
// ===============================
// REGISTER PAGE SCRIPT
// ===============================
const registerForm = document.querySelector(".register-form");

if (registerForm) {
    const registerFirstName = document.getElementById("firstName");
    const registerLastName = document.getElementById("lastName");
    const registerEmail = document.getElementById("email");
    const registerPhone = document.getElementById("phone");
    const registerPassword = document.getElementById("password");
    const registerConfirmPassword = document.getElementById("confirmPassword");
    const registerTerms = document.querySelector(".terms input");

    // Message element
    const registerMessage = document.createElement("p");
    registerMessage.style.marginTop = "10px";
    registerMessage.style.textAlign = "center";
    registerForm.appendChild(registerMessage);

    // Regex
    const registerNameRegex = /^[A-Za-z]{2,}$/;
    const registerEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const registerPhoneRegex = /^[0-9]{10}$/;
    const registerPasswordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = registerFirstName.value.trim();
        const lastName = registerLastName.value.trim();
        const email = registerEmail.value.trim();
        const phone = registerPhone.value.trim();
        const password = registerPassword.value.trim();
        const confirmPassword = registerConfirmPassword.value.trim();

        registerMessage.textContent = "";
        registerMessage.style.color = "red";

        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            registerMessage.textContent = "All fields are required";
            return;
        }

        if (!registerNameRegex.test(firstName) || !registerNameRegex.test(lastName)) {
            registerMessage.textContent =
                "First and last name must contain only letters and at least 2 characters";
            return;
        }

        if (!registerEmailRegex.test(email)) {
            registerMessage.textContent = "Please enter a valid email address";
            return;
        }

        if (!registerPhoneRegex.test(phone)) {
            registerMessage.textContent = "Phone number must be exactly 10 digits";
            return;
        }

        if (!registerPasswordRegex.test(password)) {
            registerMessage.textContent =
                "Password must be at least 8 characters and include a letter, number, and symbol";
            return;
        }

        if (password !== confirmPassword) {
            registerMessage.textContent = "Passwords do not match";
            return;
        }

        if (!registerTerms.checked) {
            registerMessage.textContent = "Please accept the Terms & Conditions";
            return;
        }

        registerMessage.style.color = "green";
        registerMessage.textContent = "Registration successful";

        registerForm.reset();
    });

    [
        registerFirstName,
        registerLastName,
        registerEmail,
        registerPhone,
        registerPassword,
        registerConfirmPassword
    ].forEach(input => {
        input.addEventListener("input", () => {
            registerMessage.textContent = "";
        });
    });
}




//this is the js code for appoitement page
// ===============================
// APPOINTMENT PAGE SCRIPT
// ===============================

// Select form
const appointmentForm = document.querySelector(".appointment-form");

if (appointmentForm) {

    // Select inputs
    const fullNameInput = appointmentForm.querySelector('input[placeholder="Enter your full name"]');
    const emailInput = appointmentForm.querySelector('input[type="email"]');
    const phoneInput = appointmentForm.querySelector('input[type="tel"]');
    const ageInput = appointmentForm.querySelector('input[type="number"]');
    const genderSelect = appointmentForm.querySelector('select');
    const specializationSelect = appointmentForm.querySelectorAll('select')[1];
    const doctorSelect = appointmentForm.querySelectorAll('select')[2];
    const dateInput = appointmentForm.querySelector('input[type="date"]');
    const timeSelect = appointmentForm.querySelectorAll('select')[3];
    const symptomsInput = appointmentForm.querySelector('textarea');

    // Message element
    const appointmentMessage = document.createElement("p");
    appointmentMessage.style.marginTop = "10px";
    appointmentMessage.style.textAlign = "center";
    appointmentForm.appendChild(appointmentMessage);

    // ===============================
    // REGEX
    // ===============================
    const nameRegex = /^[A-Za-z ]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // ===============================
    // SUBMIT EVENT
    // ===============================
    appointmentForm.addEventListener("submit", function (e) {
        // 1. Prevent reload
        e.preventDefault();

        // Get values
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const age = ageInput.value.trim();
        const gender = genderSelect.value;
        const specialization = specializationSelect.value;
        const doctor = doctorSelect.value;
        const date = dateInput.value;
        const time = timeSelect.value;
        const symptoms = symptomsInput.value.trim();

        appointmentMessage.textContent = "";
        appointmentMessage.style.color = "red";

        //  2. Empty field validation
        if (
            fullName === "" ||
            email === "" ||
            phone === "" ||
            age === "" ||
            gender === "" ||
            specialization === "" ||
            doctor === "" ||
            date === "" ||
            time === ""
        ) {
            appointmentMessage.textContent = "Please fill all required fields";
            return;
        }

        // 3. Name validation
        if (!nameRegex.test(fullName)) {
            appointmentMessage.textContent = "Please enter a valid full name";
            return;
        }

        //  4. Email validation
        if (!emailRegex.test(email)) {
            appointmentMessage.textContent = "Please enter a valid email address";
            return;
        }

        //  5. Phone validation
        if (!phoneRegex.test(phone)) {
            appointmentMessage.textContent = "Phone number must be exactly 10 digits";
            return;
        }

        //  6. Age validation
        if (age < 1 || age > 120) {
            appointmentMessage.textContent = "Please enter a valid age between 1 and 120";
            return;
        }

        //  10. Date validation (no past date)
        const today = new Date().toISOString().split("T")[0];
        if (date < today) {
            appointmentMessage.textContent = "Please select today or a future date";
            return;
        }

        //  12. Symptoms validation (optional)
        if (symptoms !== "" && symptoms.length < 5) {
            appointmentMessage.textContent = "Symptoms must be at least 5 characters";
            return;
        }

        //  14. Success message
        appointmentMessage.style.color = "green";
        appointmentMessage.textContent = "Appointment booked successfully";

        //  15. Clear form
        appointmentForm.reset();
    });

    // ===============================
    // CLEAR MESSAGE ON INPUT
    // ===============================
    appointmentForm.querySelectorAll("input, select, textarea").forEach(el => {
        el.addEventListener("input", () => {
            appointmentMessage.textContent = "";
        });
    });
}