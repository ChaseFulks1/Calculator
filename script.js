document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM content to be fully loaded

    // Get the input element with the name 'display'
    var displayInput = document.querySelector('input[name="display"]');

    // Add an event listener for the 'keydown' event on the document
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            // Prevent the default behavior of the Enter key (e.g., form submission)
            event.preventDefault();
            
            // Evaluate the expression in the display input and update the value
            displayInput.value = eval(displayInput.value);
        }
    });
});
