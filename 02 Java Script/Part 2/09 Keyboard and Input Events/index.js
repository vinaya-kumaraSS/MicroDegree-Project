// Add an event listener to the form for submission
document.getElementById('calculationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission which would refresh the page

    // Get the values of num1 and num2 input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Perform the calculation (for example, sum)
    const sum = num1 + num2;

    // Display the result in the <h3> element with class "result"
    const resultElement = document.querySelector('.result');
    resultElement.textContent = `Result: ${sum}`;
});
