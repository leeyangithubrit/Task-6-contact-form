const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const contactField = document.getElementById("contact");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const contactError = document.getElementById("contactError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

// Validation Functions
function validateName() {
    if (nameField.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameField.classList.add("invalid");
        nameField.classList.remove("valid");
        return false;
    } else if (nameField.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        nameField.classList.add("invalid");
        nameField.classList.remove("valid");
        return false;
    } else {
        nameError.textContent = "";
        nameField.classList.add("valid");
        nameField.classList.remove("invalid");
        return true;
    }
}

function validateEmail() {
    if (emailField.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailField.classList.add("invalid");
        emailField.classList.remove("valid");
        return false;
    } else if (!emailField.value.includes("@") || !emailField.value.includes(".")) {
        emailError.textContent = "Invalid email format.";
        emailField.classList.add("invalid");
        emailField.classList.remove("valid");
        return false;
    } else {
        emailError.textContent = "";
        emailField.classList.add("valid");
        emailField.classList.remove("invalid");
        return true;
    }
}

function validateContact() {
    let phonePattern = /^[0-9]{10}$/;
    if (contactField.value.trim() === "") {
        contactError.textContent = "Contact number is required.";
        contactField.classList.add("invalid");
        contactField.classList.remove("valid");
        return false;
    } else if (!phonePattern.test(contactField.value.trim())) {
        contactError.textContent = "Contact number must be exactly 10 digits.";
        contactField.classList.add("invalid");
        contactField.classList.remove("valid");
        return false;
    } else {
        contactError.textContent = "";
        contactField.classList.add("valid");
        contactField.classList.remove("invalid");
        return true;
    }
}

function validateMessage() {
    if (messageField.value.trim() === "") {
        messageError.textContent = "Message is required.";
        messageField.classList.add("invalid");
        messageField.classList.remove("valid");
        return false;
    } else if (messageField.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        messageField.classList.add("invalid");
        messageField.classList.remove("valid");
        return false;
    } else {
        messageError.textContent = "";
        messageField.classList.add("valid");
        messageField.classList.remove("invalid");
        return true;
    }
}

// Live Validation Listeners
nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
contactField.addEventListener("input", validateContact);
messageField.addEventListener("input", validateMessage);

// On Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let validName = validateName();
    let validEmail = validateEmail();
    let validContact = validateContact();
    let validMessage = validateMessage();

    if (validName && validEmail && validContact && validMessage) {
        successMsg.textContent = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
        [nameField, emailField, contactField, messageField].forEach(input => {
            input.classList.remove("valid", "invalid");
        });
        setTimeout(() => successMsg.textContent = "", 3000);
    }
});
