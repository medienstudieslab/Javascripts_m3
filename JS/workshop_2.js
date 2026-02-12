document.addEventListener("DOMContentLoaded", function () {
  //   workshop 2
  let smolBlueCircle = document.querySelector(".circle");
  smolBlueCircle.addEventListener("click", () => {
    smolBlueCircle.classList.toggle("big");
    smolBlueCircle.classList.toggle("pink");
    smolBlueCircle.classList.toggle("square");
  });
});
