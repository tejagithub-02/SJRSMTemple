document.addEventListener("DOMContentLoaded", () => {
  let section = document.getElementById("counter-section");
  let hasRun = false;
  function startCounter(el, target, suffix) {
    let count = 0;
    let increment = target / 100;

    let interval = setInterval(() => {
      count += increment;

      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      el.textContent = Math.floor(count) + suffix;
    }, 15);
  }

  function checkViewport() {
    let rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !hasRun) {
      hasRun = true;
      startCounter(document.getElementById("first"), 25, "+");
      startCounter(document.getElementById("second"), 10, "K");
      startCounter(document.getElementById("third"), 12, "+");
    }
  }

  window.addEventListener("scroll", checkViewport);
  checkViewport();
});
