let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers and operators
    if (
        (key >= '0' && key <= '9') ||
        key === '+' ||
        key === '-' ||
        key === '*' ||
        key === '/' ||
        key === '.'
    ) {
        appendValue(key);
    }

    // Enter OR = key → calculate
    if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    }

    // Backspace → delete last character
    if (key === "Backspace") {
        deleteLast();
    }

    // Delete OR Escape → clear display
    if (key === "Delete" || key === "Escape") {
        clearDisplay();
    }
});
