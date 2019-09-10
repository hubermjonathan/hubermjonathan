let landing = document.getElementById("landing");
let projects = document.getElementById("projects");

document.getElementById("go-to-projects").addEventListener("click", () => {
  landing.classList.add("hidden");
  projects.classList.remove("hidden");
});

document.getElementById("go-to-landing").addEventListener("click", () => {
  projects.classList.add("hidden");
  landing.classList.remove("hidden");
});
