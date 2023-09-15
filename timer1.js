

const timer = function(timers) {
  // timers to numbers
  timers = process.argv.slice(2).map(Number);
  let lastTimerSetAt = 0;
  // sound for setTimeouts
  const playSound = () => process.stdout.write('.');
  
  // checks for edge cases
  const check = function (element) {
    // if timer is number and no less than 0
    if (!isNaN(element) && element >= 0) {
      return true;
    }
  };

  // setting timers
  for (const time of timers) {
    const seconds = time * 1000;
    // timer passes check
    if (check(time)) {
      // start timer
      setTimeout(playSound, seconds);
    }
    // updating for finish
    if (time > lastTimerSetAt) {
      lastTimerSetAt = time;
    }
  }

  setTimeout(() => {
    process.stdout.write('\r \n');
  }, lastTimerSetAt + 200);
};

timer(process.argv);
