// DARK MODE TOGGLE

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Change icon
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
}
/* -------------------------
     SIMPLE BUTTON ALERT
  ------------------------- */
  const buttons = document.querySelectorAll("button, .btn-outline, .btn-primary, .login-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });

  // SCROLL TO TOP BUTTON

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
// SHOW WELCOME ALERT ONLY ON HOME PAGE

if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    window.addEventListener("load", () => {
        alert("Welcome to PropEase! Your Dream Home Awaits.");
    });
}



















