
// pnotify

import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const elements = {
    startButtonEl: document.querySelector(".start-button"),
    scoreEl: document.querySelector(".score-span"),
    mistakesEl: document.querySelector(".mistakes-span"),
}

const keys = ["W", "R", "B", "C", "K", "L", "P", "S", "D", "F", "G", "H", "M", "X", "Z", "A", "Q"];

let currentKey = "";
let key = "";
let score = 0;
let mistakes = 0;

elements.startButtonEl.addEventListener("click", startGameFunction);

function startGameFunction() {
    key = keys[Math.round(Math.random() * ((keys.length - 1) - 0) + 0)];
    currentKey = key;
    const myInfo = info({
    text: `Click the ${key}`
    });
    window.addEventListener("keydown", checkKeyFunction);
}

function checkKeyFunction(event) {
    if (event.key.toUpperCase() === currentKey) {
        score += 1;
        elements.scoreEl.textContent = score;
        const mySuccess = success({
            text: "Correct!"
        });
        window.removeEventListener("keydown", checkKeyFunction)
    } else {
        mistakes += 1;
        elements.mistakesEl.textContent = mistakes;
        const myError = error({
        text: `Mistake! Click the ${key}`
        });
    }
    
}

// Chart.js

import Chart from 'chart.js/auto';

const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
    label: 'Продажі за останній місяць',
    data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
    backgroundColor: '#2196f3',
    borderColor: '#2196f3',
    borderWidth: 1
    }]
    };

    const salesChart = new Chart(document.getElementById("sales-chart"), {
        type: 'line',
        data: {
            labels: chartData.datasets[0].data.map((row) => row),
            datasets: [ {
                label: chartData.datasets[0].label,
                data: chartData.datasets[0].data.map((item) => item),
                backgroundColor: chartData.datasets[0].backgroundColor,
                borderColor: chartData.datasets[0].borderColor,
                borderWidth: chartData.datasets[0].borderWidth,
            }
        ]
        }
    });