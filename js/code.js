function showDateInput() {
    // აჩვენებს date-ის ველს და აძევს ღილაკს
    document.getElementById("date").style.display = "block";
    document.getElementById("dateBtn").style.display = "none";
}

function showTimeInput() {
    // აჩვენებს time-ის ველს და აძევს ღილაკს
    document.getElementById("time").style.display = "block";
    document.getElementById("timeBtn").style.display = "none";
}

function showGuestsInput() {
    // აჩვენებს guests-ის ველს და აძევს ღილაკს
    document.getElementById("guests").style.display = "block";
    document.getElementById("guestsBtn").style.display = "none";
}

function submitForm() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    alert(`თქვენი არჩევანი:\nთარიღი: ${date}\nდრო: ${time}\nმასპინძები: ${guests}`);
}