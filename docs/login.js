document.getElementById("loginBtn").addEventListener("click", function(event) {

    event.preventDefault(); // Prevents form submit

    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    // If any field is empty
    if (email === "" || pass === "") {
        alert("Please fill in both email and password.");
        return;
    }

    // Check if email contains @
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is correct
    alert("Login successful!");
});