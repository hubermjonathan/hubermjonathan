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

document.getElementById("change-theme").addEventListener("change", () => {
  console.log(getComputedStyle(document.documentElement).getPropertyValue("--background-color"));
  if (getComputedStyle(document.documentElement).getPropertyValue("--background-color") === "#fff" || getComputedStyle(document.documentElement).getPropertyValue("--background-color") === " #fff") {
    document.documentElement.style.setProperty("--background-color", "#000");
    document.documentElement.style.setProperty("--text-1", "#fff");
    document.documentElement.style.setProperty("--text-2", "#ccc");

    let cards = Array.from(document.getElementsByClassName("card"));
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("bg-dark");
    }

    let icon = document.getElementById("theme-icon");
    icon.classList.add("fas");
    icon.classList.remove("far");
  } else {
    document.documentElement.style.setProperty("--background-color", "#fff");
    document.documentElement.style.setProperty("--text-1", "#000");
    document.documentElement.style.setProperty("--text-2", "#333");

    let cards = Array.from(document.getElementsByClassName("card"));
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("bg-dark");
    }

    let icon = document.getElementById("theme-icon");
    icon.classList.add("far");
    icon.classList.remove("fas");
  }
});
