<!DOCTYPE html>
<html>
<head>
    <title>BMI Calculator</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            background-color: #f2f2f2;
        }
        .container {
            width: 300px;
            margin: auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }
        input {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            background-color: blue;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: darkblue;
        }
        h2 {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>BMI Calculator</h2>

    <label>Weight (kg):</label><br>
    <input type="number" id="weight" placeholder="Enter weight"><br>

    <label>Height (cm):</label><br>
    <input type="number" id="height" placeholder="Enter height"><br>

    <button onclick="calculateBMI()">Calculate</button>

    <h3 id="result"></h3>
    <h4 id="status"></h4>
</div>

<script>
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    height = height / 100; // convert cm to meter
    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);
    document.getElementById("result").innerText = "Your BMI: " + bmi;

    let status = "";
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("status").innerText = "Status: " + status;
}
</script>

</body>
</html>