import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

buttonStartRef.addEventListener('click', () => {
    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
    buttonStartRef.disabled = true;
})

buttonStopRef.addEventListener('click', () => {
    clearInterval(timerId);
    buttonStartRef.disabled = false;
} )





