const { compose } = require("./compose");
const { appendAMPM, civilianHours, serializeClockTime } = require("./date");
const { display, formatClock, prependZero } = require("./highOrderFunctions");
const { clear, getCurrentTime, oneSecond, log } = require("./utils");

const convertToCivilianTime = (clockTime) =>
  compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = (civilianTime) =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );

startTicking();
