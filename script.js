let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;

  // Add bounce animation
  countDisplay.classList.add('bounce');
  setTimeout(() => countDisplay.classList.remove('bounce'), 300);

  // Change number color based on value
  if (count === 0) {
    countDisplay.style.color = "#ffffff";   // white when zero
  } else if (count > 0 && count <= 5) {
    countDisplay.style.color = "#00bcd4";   // sky blue
  } else if (count > 5 && count <= 10) {
    countDisplay.style.color = "#ffca28";   // gold
  } else {
    countDisplay.style.color = "#4caf50";   // green
  }
}
