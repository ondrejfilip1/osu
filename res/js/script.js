const point = document.getElementById("point");
const startGame = document.getElementById("startGame");

let pointInterval;

point.onclick = () => {
    point.classList.add("clickedPoint");
    setInterval(removeClass("clickedPoint"), 1000);
}

const removeClass = (classThing) => {
    point.classList.remove(`${classThing}`);
}

startGame.onclick = () => {
    startPointInterval();
    startGame.style.pointerEvents = "none";
    startGame.style.opacity = "0";
}

const movePoint = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}


const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point);
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(60, 120));
        movePoint(point, getRandomNumber(100, 600), getRandomNumber(100, 600));
    }, 700);
}

const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;
    }
}

const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
}