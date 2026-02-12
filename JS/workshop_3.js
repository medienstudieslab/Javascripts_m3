document.addEventListener("DOMContentLoaded", function () {
  // взаимодействие с html
  //   document.querySelector("button").addEventListener("click", () => {
  //     let demo = document.querySelector("#demo");
  //     if (demo.innerHTML === "Обычный день") {
  //       demo.innerHTML = "День повеселее!";
  //     } else if (demo.innerHTML === "День повеселее!") {
  //       demo.innerHTML = "Очень хороший день!";
  //     } else {
  //       demo.innerHTML = "Обычный день";
  //     }
  //   });
  // взаимодействие с html + prompt
  //   let userName = prompt("Как твоё имя?", "");
  //   document.querySelector(".userName").innerHTML =
  //     `Будь как дома, ${userName}, я ни в чём не откажу`;
  //   let demo = document.querySelector("#demo");
  //   demo.addEventListener("click", () => {});

  //   workshop 2
  //   let smolBlueCircle = document.querySelector(".circle");
  //   smolBlueCircle.addEventListener("click", () => {
  //     smolBlueCircle.classList.toggle("big");
  //     smolBlueCircle.classList.toggle("pink");
  //     smolBlueCircle.classList.toggle("square");
  //   });

  let circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      circle.classList.toggle("black");
    });
  });
});
