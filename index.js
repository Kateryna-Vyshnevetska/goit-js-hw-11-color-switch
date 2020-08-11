const ref = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('#start'),
  btnStop: document.querySelector('#stop'),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let timerId = null;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

ref.btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    ref.btnStart.disabled = true;
    ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)];
  }, 1000);
});

ref.btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  ref.btnStart.disabled = false;
});