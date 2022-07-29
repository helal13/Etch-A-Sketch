const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");
const size = document.querySelector("#size");
const colorPicker = document.querySelector("#color_picker");
const rainbow = document.querySelector("#rainbow");
const color = document.querySelector("#color");
const eraser = document.querySelector("#eraser");
let currentMode = "color";
const rangeValue = document.querySelector(".size_value");

// -- Function that create divs and color it on hover
const createDivs = (row, column) => {
  for (let i = 0; i < row * column; i++) {
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      "width: 24px;height: 25px; background-color: white;"
    );
    div.addEventListener("mouseover", () => {
      if (currentMode === "color") {
        div.style.backgroundColor = colorPicker.value;
      } else if (currentMode === "rainbow") {
        div.style.backgroundColor = createRandomColor();
      } else {
        div.style.backgroundColor = "white";
      }
    });
    container.appendChild(div);
  }
};

// -- Firing the creation function on start btn click
btn.addEventListener("click", () => {
  const value = size.value;
  container.setAttribute(
    "style",
    `display: flex; flex-wrap: wrap; width: ${value * 25}px;`
  );
  createDivs(value, value);
});

// -- Reseting Everything to start over
reset.addEventListener("click", () => {
  container.innerHTML = "";
});

// -- Function creates random colors
const createRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b})`;
};

// -- Firing the rainbow mode
rainbow.addEventListener("click", () => {
  currentMode = "rainbow";
});

// -- Firing the color mode
color.addEventListener("click", () => {
  currentMode = "color";
});

// -- Firing the eraser mode
eraser.addEventListener("click", () => {
  currentMode = "eraser";
});

// -- Showing size on screen
rangeValue.textContent = `${size.value} X ${size.value}`;
size.addEventListener("change", () => {
  rangeValue.textContent = `${size.value} X ${size.value}`;
});
