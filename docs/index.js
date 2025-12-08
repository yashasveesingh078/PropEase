// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------
     1. LIGHT / DARK MODE TOGGLE
  ------------------------- */
  const themeBtn = document.createElement("button");
  themeBtn.textContent = "Toggle Dark Mode";
  themeBtn.style.position = "fixed";
  themeBtn.style.bottom = "20px";
  themeBtn.style.right = "20px";
  themeBtn.style.padding = "10px 15px";
  themeBtn.style.cursor = "pointer";
  document.body.appendChild(themeBtn);

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  /* -------------------------
     2. FLASH CARD SIMPLE FLIP
     (works if you have cards with .property-card or .service-card)
  ------------------------- */
  const cards = document.querySelectorAll(".property-card, .service-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  /* -------------------------
     3. SIMPLE BUTTON ALERT
  ------------------------- */
  const buttons = document.querySelectorAll("button, .btn-outline, .btn-primary, .login-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });

});


