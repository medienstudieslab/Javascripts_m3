// document.addEventListener("DOMContentLoaded", function () {
//   //   let hi = document.querySelectorAll("h1");
//   //   console.log(hi);

//   let x = document.querySelector("#demo");
//   x.addEventListener("click", () => {
//     x.innerHTML = "Какой-то текст";
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // взаимодействие с html
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
// });

document.addEventListener("DOMContentLoaded", function () {
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
