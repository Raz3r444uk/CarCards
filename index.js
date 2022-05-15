const panels = document.querySelectorAll(".panel");

panels.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClasse();
    el.classList.add("active");
  });
});

function removeActiveClasse() {
  panels.forEach((el) => {
    el.classList.remove("active");
  });
}
