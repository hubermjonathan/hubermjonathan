document.getElementById("theme-toggler").addEventListener("click", () => {
  if (getComputedStyle(document.documentElement).getPropertyValue("--background") === "#fff" || getComputedStyle(document.documentElement).getPropertyValue("--background") === " #fff") {
    document.documentElement.style.setProperty("--background", "#000");
    document.documentElement.style.setProperty("--text", "#fff");
    document.documentElement.style.setProperty("--text-hover", "#ccc");

    let icon = document.getElementById("theme-toggler");
    icon.classList.add("fas");
    icon.classList.remove("far");
  } else {
    document.documentElement.style.setProperty("--background", "#fff");
    document.documentElement.style.setProperty("--text", "#000");
    document.documentElement.style.setProperty("--text-hover", "#333");

    let icon = document.getElementById("theme-toggler");
    icon.classList.add("far");
    icon.classList.remove("fas");
  }
});
