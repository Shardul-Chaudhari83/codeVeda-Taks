document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const successMessage = document.getElementById("successMessage");

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-\(\)]{10,15}$/;

    // Function to show error
    const showError = (input, message) => {
        const errorDiv = document.getElementById(input.id + "Error");
        input.classList.remove("success");
        input.classList.add("error");
        errorDiv.textContent = message;
        errorDiv.style.display = "block";
    };

    // Function to show success
    const showSuccess = (input) => {
        const errorDiv = document.getElementById(input.id + "Error");
        input.classList.remove("error");
        input.classList.add("success");
        errorDiv.textContent = "";
        errorDiv.style.display = "none";
    };

    // Real-time validation functions
    const validateName = () => {
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name cannot be blank.");
            return false;
        } else if (!nameRegex.test(nameInput.value.trim())) {
            showError(nameInput, "Name can only contain letters and spaces.");
            return false;
        } else {
            showSuccess(nameInput);
            return true;
        }
    };

    const validateEmail = () => {
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email cannot be blank.");
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email address.");
            return false;
        } else {
            showSuccess(emailInput);
            return true;
        }
    };

    const validatePhone = () => {
        if (phoneInput.value.trim() === "") {
            showError(phoneInput, "Phone number cannot be blank.");
            return false;
        } else if (!phoneRegex.test(phoneInput.value.trim())) {
            showError(phoneInput, "Please enter a valid phone number.");
            return false;
        } else {
            showSuccess(phoneInput);
            return true;
        }
    };

    const validatePassword = () => {
        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password cannot be blank.");
            return false;
        } else if (passwordInput.value.trim().length < 6) {
            showError(passwordInput, "Password must be at least 6 characters.");
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    };

    // Event listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    phoneInput.addEventListener("input", validatePhone);
    passwordInput.addEventListener("input", validatePassword);

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            // Simulate successful submission
            successMessage.style.display = "block";

            // Optionally, reset the form after a delay
            setTimeout(() => {
                form.reset();
                // Remove success classes
                nameInput.classList.remove("success");
                emailInput.classList.remove("success");
                phoneInput.classList.remove("success");
                passwordInput.classList.remove("success");
                successMessage.style.display = "none";
            }, 3000);
        } else {
            successMessage.style.display = "none";
        }
    });
});
