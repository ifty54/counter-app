function createCounter() {
  let count = 0;

  return {
    increment: function () {
      console.log("Increment clicked. Waiting 2 seconds...");
      setTimeout(() => {
        count++;
        updateDisplay();
        console.log("Incremented!");
      }, 2000);
    },
    decrement: function () {
      count--;
      updateDisplay();
      console.log("Decremented immediately!");
    },
    reset: function () {
      count = 0;
      updateDisplay();
      console.log("Reset done!");
    },
    getCount: function () {
      return count;
    },
  };

  function updateDisplay() {
    document.getElementById("counter").innerText = count;
  }
}

const counter = createCounter();

document.getElementById("inc").addEventListener("click", counter.increment);
document.getElementById("dec").addEventListener("click", counter.decrement);
document.getElementById("reset").addEventListener("click", counter.reset);

// Corrected toggling logic
let toggleState = true;
setInterval(() => {
  if (toggleState) {
    document.getElementById("brandText").style.display = "inline";
    document.getElementById("brandImg").style.display = "none";
  } else {
    document.getElementById("brandText").style.display = "none";
    document.getElementById("brandImg").style.display = "inline";
  }
  toggleState = !toggleState;
}, 2000);
