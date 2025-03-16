function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}
function speakResult(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "az-AZ"; // Azərbaycan dili
    window.speechSynthesis.speak(speech);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
        playSound("success");
        speakResult("Cavab " + result);
    } catch {
        document.getElementById("display").value = "Error";
        playSound("error");
        speakResult("Səhv baş verdi.");
    }
}