class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onCompleteOrChange = callbacks.onCompleteOrChange;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
    this.durationInput.addEventListener("change", this.onDurationChange);
  }

  start = () => {
    if (this.durationInput.value < 0) {
      this.durationInput.value *= -1;
    }

    if (this.onStart) {
      this.onStart(this.durationInput.value);
    }

    this.tick();
    if (!this.interval) {
      this.interval = setInterval(this.tick, 10);
    }
  };

  pause = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  onDurationChange = () => {
    this.onCompleteOrChange();
  };

  tick = () => {
    if (this.durationInput.value <= 0) {
      this.pause();
      if (this.onCompleteOrChange) {
        this.onCompleteOrChange();
      }
    } else {
      this.durationInput.value = (this.durationInput.value - 0.01).toFixed(2);
      if (this.onTick) {
        this.onTick(this.durationInput.value);
      }
    }
  };
}
