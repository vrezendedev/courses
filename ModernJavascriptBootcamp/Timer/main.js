const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
let alreadyStarted = false;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    if (alreadyStarted == false) {
      duration = totalDuration;
    }
    alreadyStarted = true;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onCompleteOrChange() {
    alreadyStarted = false;
  },
});
