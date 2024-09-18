//Access the display
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let displayValue = ''; // Store the current input

// Add event listener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        // If user clicks 'C', clear the display
        if (buttonText === 'C'){
            displayValue = '';
            display.value = displayValue;

        //If user clicks '=', evaluate the expression
        } else if (buttonText === '=') {
            try {
                display.value = eval (displayValue);
            }
            catch {
                display.value = 'Error'; // Handle invalid expressions
            }
        // Otherwise, append the clicked button to the display
        } else {
            displayValue += buttonText;
            display.value = displayValue;
        }


    });
});