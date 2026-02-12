document.addEventListener("DOMContentLoaded", function () {
  mouseMoveStatus();
});

function mouseMoveStatus() {
  let coords = document.querySelector(".coords");
  let status = document.querySelector(".status");
  let flower = document.querySelector(".flower");
  let container = document.querySelector(".container");

  document.addEventListener("mousemove", () => {
    // console.log(`X: ${event.pageX}, Y: ${event.pageY}`);
    coords.innerHTML = `X: ${event.pageX}, Y: ${event.pageY}`;

    let x = container.offsetWidth / 2 + container.offsetLeft;
    if (x < event.pageX) {
      status.innerHTML = "right";
      flower.classList.add("status-anim-right");
      flower.classList.remove("status-anim-left");
    } else {
      status.innerHTML = "left";
      flower.classList.add("status-anim-left");
      flower.classList.remove("status-anim-right");
    }

    // let y = container.offsetHeight / 2 + container.offsetTop;
    // if (y < event.pageY) {
    //   status.innerHTML = "bottom";
    // } else {
    //   status.innerHTML = "top";
    // }
  });
}
