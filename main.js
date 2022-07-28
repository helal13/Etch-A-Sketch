const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");

// -- Function that create divs and color it on hover
const createDivs = (row, column) => {
  for (let i = 0; i < row * column; i++) {
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      "border: 1px solid black; width: 24px;height: 25px;"
    );
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = createRandomColor();
    });
    container.appendChild(div);
  }
};

// -- Firing the creation function on start btn click
btn.addEventListener("click", () => {
  const value = prompt("What is the number of squares in row");
  if (value >= 2 && value < 100) {
    container.setAttribute(
      "style",
      `display: flex; flex-wrap: wrap; width: ${value * 26}px;`
    );
    createDivs(value, value);
  } else {
    alert("Please Enter a number between 2 and 100");
  }
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

// -- Create black darken background
