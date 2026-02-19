document.addEventListener("DOMContentLoaded", function () {
  mouseCoodinates();
});

function mouseCoodinates() {
  let coords = document.querySelector(".coords");
  let status = document.querySelector(".status");

  let rotative = document.querySelector(".flower");

  let container = document.querySelector(".container");

  document.addEventListener("mousemove", () => {
    console.log(`X: ${event.pageX}, Y: ${event.pageY}`);
    coords.innerHTML = `X: ${event.pageX}, Y: ${event.pageY}`;

    let x = container.offsetWidth / 2 + container.offsetLeft;
    if (x < event.pageX) {
      status.innerHTML = "right";
      rotative.classList.add("status-anim-right");
      rotative.classList.remove("status-anim-left");
    } else {
      status.innerHTML = "left";
      rotative.classList.add("status-anim-left");
      rotative.classList.remove("status-anim-right");
    }
  });
}
