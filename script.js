// ==========================================================
// This is the ONLY JavaScript in the whole site — it just
// shows/hides the mobile menu when the hamburger icon is tapped.
// ==========================================================

// Grab the hamburger button and the nav links list
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// When hamburger is clicked, toggle the "show" class on nav links
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional nice touch: close the menu automatically after
// clicking a link (so it doesn't stay open on mobile)
const allLinks = navLinks.querySelectorAll('a');
allLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
