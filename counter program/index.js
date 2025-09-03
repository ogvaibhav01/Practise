let count = 0;

function increase() {
  count += 1;
  document.getElementById("H2").textContent = count;
}

function decrease() {
  count -= 1;
  document.getElementById("H2").textContent = count;
}

function reset() {
  count = 0; 
  document.getElementById("H2").textContent = count;
}

document.getElementById("H2").textContent = count;
document.getElementById("b1").onclick = decrease;
document.getElementById("b2").onclick = reset;
document.getElementById("b3").onclick = increase;
