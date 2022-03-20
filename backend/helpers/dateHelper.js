const { DateTime } = require("luxon");

module.exports = {
  randomDate: (minToDay = 0, maxToDay = 10, minus = false) => {
    if (minus) {
      return DateTime.now().minus({
        seconds: Math.floor(Math.random() * 10000),
        days: Math.floor(Math.random() * (maxToDay - minToDay + 1) + minToDay),
      });
    }

    return DateTime.now().plus({
      seconds: Math.floor(Math.random() * 10000),
      days: Math.floor(Math.random() * (minToDay - maxToDay + 1) + maxToDay),
    });
  },
};
