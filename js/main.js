document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const toggleBtn = document.getElementById("dark-mode-toggle");
  const isDarkModeOn = document.body.classList.contains("dark-mode");

  toggleBtn.innerText = isDarkModeOn ? "☀️" : "🌓";
});

particlesJS('particles-js', {
  particles: {
    // ... (particle configuration remains the same)
  },
  interactivity: {
    // ... (interactivity configuration remains the same)
  },
  retina_detect: true
});

const elevator = new Elevator({
  mainAudio: "https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/elevator.mp3",
  endAudio: "https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/ding.mp3",
  duration: 5000,
});
