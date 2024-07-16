let currentIndex = 0;
let codeIndex = 0;
let randomIndex = 0;

const listaAlura = ["a", "l", "u", "r", "a", ">"];
const letras = ["AY", "BY", "CX", "DR", "EX", "DF", "GG", "TH", "IG", "JG", "KK", "LS", "MA", "CN", "ÑO", "YO", "AP", "XQ", "YR", "SI", "TU", "UV", "VA", "KW", "XD", "YB", "ZT"];
const ipAddresses = [
    "192.168.0.1",
    "10.0.0.1",
    "152.16.0.1",
    "192.148.1.1",
    "10.0.1.1",
    "172.16.1.1",
    "142.125.2.1",
    "10.0.2.1",
    "172.16.2.1",
    "192.16.31.1"
];

let d = new Date();

const dateInfo = {
    local: d.toLocaleDateString(),
    h: d.getHours(),
    m: d.getMinutes()
}

const elements = {
    logo: document.getElementById("logo"),
    code: document.getElementById("code"),
    hour: document.getElementById("hour"),
    date: document.getElementById("date"),
    random_font: document.getElementById("random-font"),
    random_font2: document.getElementById("random-font2"),
    parent: document.getElementById("parent"),
    loader: document.getElementById("loader")
}

elements.date.textContent = dateInfo.local;
elements.hour.textContent = `${dateInfo.h}:${dateInfo.m}`;

window.addEventListener("load", (event) => {
    setTimeout(() => {
        elements.parent.style.display = "flex";
        elements.loader.style.display = 'none';
    },1500)
  });

function updateTime(){
    dateInfo.m += 1;

    if(dateInfo.m === 60){
        dateInfo.m = 0;
        dateInfo.h = (dateInfo.h + 1) % 24;
    }
    
    elements.hour.textContent = `${dateInfo.h}:${dateInfo.m < 10 ? '0' : ''}${dateInfo.m}`;
}

function changeText() {
    logo.textContent = listaAlura[currentIndex];
    code.textContent = ipAddresses[codeIndex];

    currentIndex = (currentIndex + 1) % listaAlura.length;
    codeIndex = (codeIndex + 1) % ipAddresses.length;
}

function randomFont() {
    elements.random_font.textContent = letras[randomIndex].at(0);
    elements.random_font2.textContent = letras[randomIndex].at(1);
    randomIndex = (randomIndex + 1) % letras.length;
}

setInterval(updateTime, 60000);
setInterval(changeText, 500);
setInterval(randomFont, 200);