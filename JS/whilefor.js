const newText = document.createElement("p");

newText.textContent = "Спавн параграфа";
newText.classList.add("paragraph-4");

console.log(newText);

const boxEl = document.querySelector(".box");

boxEl.appendChild(newText);
