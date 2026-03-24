document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('count-display');
    const btnIncrement = document.getElementById('btn-increment');
    const btnDecrement = document.getElementById('btn-decrement');
    const btnReset = document.getElementById('btn-reset');
    const card = document.querySelector('.counter-card');

    let count = 0;

    const updateDisplay = () => {
        display.textContent = count;
        
        // Add bump animation class
        display.classList.remove('bump');
        // Trigger reflow to restart animation
        void display.offsetWidth;
        display.classList.add('bump');
    };

    btnIncrement.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    btnDecrement.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateDisplay();
        } else {
            // Shake effect if trying to go below zero
            card.classList.remove('shake');
            void card.offsetWidth;
            card.classList.add('shake');
        }
    });

    btnReset.addEventListener('click', () => {
        if (count !== 0) {
            count = 0;
            updateDisplay();
        }
    });
});
