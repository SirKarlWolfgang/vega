let clickCount = 0;

function changeHeading() {
    clickCount++;

    const heading = document.getElementById("heading");
    const btn = document.querySelector(".clickable");

    if (clickCount === 1) {
        heading.innerText = "Vegabonn!";
    } else if (clickCount === 2) {
        heading.innerText = "one more time...";
    } else if (clickCount === 3) {
        heading.innerText = ": - )";
        btn.style.display = "none";
        setTimeout(() => {
            window.location.href = "https://sirkarlwolfgang.github.io/tour/";
        }, 1200);
    }
}

function setRandomRotationSpeed() {
    const square = document.querySelector(".rotating-square");
    if (!square) return;
    const randomDuration = (Math.random() * 3 + 1).toFixed(2);
    square.style.animationDuration = randomDuration + "s";
}

setInterval(setRandomRotationSpeed, 5000);
setRandomRotationSpeed();
