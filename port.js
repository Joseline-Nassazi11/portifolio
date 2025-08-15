// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== Contact Form Validation =====
const form = document.querySelector(".contact-section form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before sending.");
    return;
  }

  // Simple email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset();
});

// ===== Theme Switcher (Test Different Palettes) =====
const themes = [
  { bg: "#F0F4F8", text: "#1C1C1C", link: "#4C8BF5" }, // Current
  { bg: "#1E1E1E", text: "#F5F5F5", link: "#00BFA6" }, // Dark
  { bg: "#FFF9F0", text: "#2C2C2C", link: "#CDA34F" }, // Cream Gold
  { bg: "#0B1B2B", text: "#F5F7FA", link: "#FFD166" }, // Deep Navy
];

let currentTheme = 0;

// Create a small theme toggle button
const themeBtn = document.createElement("button");
themeBtn.textContent = " Change Theme";
themeBtn.style.position = "fixed";
themeBtn.style.bottom = "20px";
themeBtn.style.right = "20px";
themeBtn.style.padding = "10px 15px";
themeBtn.style.background = "#444";
themeBtn.style.color = "#fff";
themeBtn.style.border = "none";
themeBtn.style.cursor = "pointer";
themeBtn.style.borderRadius = "8px";
document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.style.backgroundColor = themes[currentTheme].bg;
  document.documentElement.style.setProperty(
    "--text-color",
    themes[currentTheme].text
  );
  document.documentElement.style.setProperty(
    "--link-color",
    themes[currentTheme].link
  );
});
