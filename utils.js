const oneSecond = () => 1000; // ?
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

module.exports = {
  oneSecond,
  getCurrentTime,
  clear,
  log,
};
