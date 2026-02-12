document.addEventListener("DOMContentLoaded", function () {
  //   взаимодействие с html
  document.querySelector("button").addEventListener("click", () => {
    let demo = document.querySelector("#demo");
    if (demo.innerHTML === "Обычный день") {
      demo.innerHTML = "День повеселее!";
    } else if (demo.innerHTML === "День повеселее!") {
      demo.innerHTML = "Очень хороший день!";
    } else {
      demo.innerHTML = "Обычный день";
    }
  });
  //   взаимодействие с html + prompt
  //   let userName = prompt("Как твоё имя?", "");
  //   document.querySelector(".userName").innerHTML =
  //     `Будь как дома, ${userName}, я ни в чём не откажу`;
  //   let demo = document.querySelector("#demo");
  //   demo.addEventListener("click", () => {});
});
