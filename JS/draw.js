document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main3");
  const card = document.querySelector(".card");
  const amount = document.querySelector("#amount");

  document.addEventListener("mousemove", (e) => {
    const x = e.pageX - 25;
    const y = e.pageY - 25;

    card.style.left = x + "px";
    card.style.top = y + "px";

    const clone = card.cloneNode(true);
    clone.classList.remove("card");
    clone.classList.add("clone");
    clone.style.left = x + "px";
    clone.style.top = y + "px";
    clone.style.zIndex = 2;

    main.appendChild(clone);

    const clones = document.querySelectorAll(".clone");
    if (clones.length > 200) {
      clones[0].remove();
    }

    amount.textContent = clones.length;
  });
});
