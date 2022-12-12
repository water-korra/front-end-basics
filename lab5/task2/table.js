const rows = 6;
const columns = 6;
const cell = 3;
let cellText = 1;
const table = document.getElementById("table");

for (let i = 0; i < rows; i++) {
  let row = document.createElement("tr");
  table.append(row);
  for (let k = 0; k < columns; k++) {
    let col = document.createElement("td");
    col.innerText = cellText;
    row.append(col);
    if (cellText == cell) col.classList.add("masterCell");
    cellText++;
  }
}

const createRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;
  return color;
};  

const changeColor = (element, color1, color2) => {
  element.style.backgroundColor = color1;
  element.style.color = color2;
};
let masterCell = document.querySelector(".masterCell");

masterCell.addEventListener("mouseover", (e) => {
  changeColor(masterCell, createRandomColor(), createRandomColor());
});

masterCell.addEventListener("click", (e) => {
  let selectedColor = document.querySelector(".colorPalette").value;
  masterCell.style.backgroundColor = selectedColor;
});

masterCell.addEventListener("dblclick", (e) => {
  let selectedColor = document.querySelector(".colorPalette").value;
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = selectedColor;
  }
});