const point = document.getElementById("point");
const pointNumber = document.getElementById("pointnumber");
const startGame = document.getElementById("startGame");
const timeInfo = document.getElementById("timeInfo");
const curSpeed = document.getElementById("curSpeed");

const plusSpeed = document.getElementById("plusSpeed");
const minusSpeed = document.getElementById("minusSpeed");

let pointInterval;
let speed = 1000;

/*
point.onclick = () => {
    point.classList.add("clickedPoint");
    setInterval(removeClass("clickedPoint"), 1000);
}
*/

const removeClass = (classThing) => {
    point.classList.remove(`${classThing}`);
}

startGame.onclick = () => {
    startPointInterval();
    startGame.style.pointerEvents = "none";
    startGame.style.opacity = "0";
}

plusSpeed.onclick = () => {
    clearInterval(pointInterval);
    speed += 100;
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(60, 130));
        movePoint(point, getRandomNumber(parseFloat(point.style.width), window.innerWidth - parseFloat(point.style.width)), getRandomNumber(parseFloat(point.style.height), window.innerHeight - parseFloat(point.style.height)));
    }, speed);
    curSpeed.innerText = `Current speed: ${speed}`;
}

minusSpeed.onclick = () => {
    clearInterval(pointInterval);
    speed -= 100;
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(60, 130));
        movePoint(point, getRandomNumber(parseFloat(point.style.width), window.innerWidth - parseFloat(point.style.width)), getRandomNumber(parseFloat(point.style.height), window.innerHeight - parseFloat(point.style.height)));
    }, speed);
    curSpeed.innerText = `Current speed: ${speed}`;
}

const movePoint = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}


const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point, pointNumber);
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(60, 130));
        movePoint(point, getRandomNumber(parseFloat(point.style.width), window.innerWidth - parseFloat(point.style.width)), getRandomNumber(parseFloat(point.style.height), window.innerHeight - parseFloat(point.style.height)));
    }, speed);
}

const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

let timeStart = 0;
const setPointClick = (element, elementNumberChange) => {
    element.onclick = () => {
        if (timeStart == 0) {
            timeStart = performance.now();
        } else {
            let timeEnd = performance.now();
            let result = timeEnd - timeStart;
            timeInfo.innerText = `Time: ${result}ms`;
            timeStart = performance.now();
        }
        elementNumberChange.innerText++;
    }
}

const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
}