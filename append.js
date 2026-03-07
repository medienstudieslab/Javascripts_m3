document.addEventListener("DOMContentLoaded", () => {
  animatePopup();
});

function animatePopup() {
  let button = document.querySelector(".popupButton");
  let popup = document.querySelector(".popup");

  button.addEventListener("click", () => {
    let like = document.createElement("div");

    like.innerHTML = "@";
    like.classList.add("popupEl");

    popup.appendChild(like);
  });
}
