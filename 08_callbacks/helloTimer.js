const printHello = () => {
  console.log("Hello!");
};

// setTimeout(printHello, 3000);

const executeAfterDelay = (delay, callback) => {
  const delayInMs = delay * 1000;
  setTimeout(callback, delayInMs);
};

executeAfterDelay(5, printHello);
