document.addEventListener("DOMContentLoaded", () => {
    // Function to dynamically update the greeting based on the time of day
    function updateGreeting() {
        const greetingElement = document.getElementById('greeting');
        const currentHour = new Date().getHours();

        let greetingText;

        if (currentHour < 12) {
            greetingText = 'Good Morning!';
        } else if (currentHour < 18) {
            greetingText = 'Good Afternoon!';
        } else {
            greetingText = 'Good Evening!';
        }

        // Update the greeting text
        greetingElement.textContent = greetingText;
    }

    // Call the function to set the initial greeting
    updateGreeting();
});