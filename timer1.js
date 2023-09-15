
/**
 * timer Takes multiple numbers from the command line argv. The numbers entered set timers to go off at the specified number of seconds.
 * @param {string} timers Are entered into the command line argv.
 */
const timer = function(timers) {
  // variables for timers
  timers = process.argv.slice(2).map(Number);
  let lastTimerSetAt = 0;
  
  // the sound for timers
  const playSound = () => process.stdout.write('.');
  
  // checks for edge cases
  const check = function (element) {
    // if timer is a number and no less than 0
    if (!isNaN(element) && element >= 0) {
      return true;
    }
  };
  
  // to finish without any artifacts
  const finish = function() {
    setTimeout(() => {
      process.stdout.write('\r \n');
    }, lastTimerSetAt + 200);
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
  finish();
};

timer(process.argv); // Test Code

module.export = timer;
