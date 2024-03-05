


const formData = document.getElementById("form-data");
formData.addEventListener("submit", function (e) {
    e.preventDefault();
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (number === "" || isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    number = parseInt(number);

    var tableOutput = "<table border='1'>";
    for (var i = 1; i <= 10; i++) {
        var mul = number * i;
        tableOutput += "<tr><td>" + number + " x " + i + "</td><td>=</td><td>" + mul + "</td></tr>";
    }
    tableOutput += "</table>";

    result.innerHTML = tableOutput;


})