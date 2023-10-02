function wait(ms) {
  return new Promise((resolve) => {
    setInterval(resolve, ms);
  });}

module.exports = { wait };
``