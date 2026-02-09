document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {
            alert("❌ Please fill in all fields");
            return;
        }

        if (!validateEmail(email)) {
            alert("❌ Please enter a valid email address");
            return;
        }

        if (password.length < 6) {
            alert("❌ Password must be at least 6 characters");
            return;
        }

        alert("✅ Login successful!");
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
