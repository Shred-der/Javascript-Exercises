// Create a BMI calculator using Javascript functions. You can calculate it using the formula below
// bmi = weight / (height * height);

function bmiCalculator (weight, height) {
    var bmi = (weight / (height * height)).toFixed(2);

    console.log("Your Body Mass Index is " + bmi);
}
