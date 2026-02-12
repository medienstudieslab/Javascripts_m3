document.addEventListener("DOMContentLoaded", function () {
  let circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      circle.classList.toggle("black");
    });
  });
});
