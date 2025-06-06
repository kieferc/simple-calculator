function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}
function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const display = document.getElementById("display");

  // Allow digits, operators, parentheses, decimal
  if (
    /[0-9+\-*/().]/.test(key)
  ) {
    appendValue(key);
  }

  // Enter = calculate
  if (key === "Enter") {
    event.preventDefault(); // prevents form submission if any
    calculate();
  }

  // Backspace = delete last
  if (key === "Backspace") {
    event.preventDefault();
    deleteLast();
  }

  // Escape = clear
  if (key === "Escape") {
    clearDisplay();
  }
});

