// Get variables
const progressBar = document.querySelector('.progress');
const percent = document.querySelector('.percent');
const currentYear = document.querySelector('.current-year');
const time = document.querySelector('.timeleft');
let year = new Date();

const refreshingTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    
    now = (Date.parse(now) / 1000);
    let lastDay = new Date(year+1, 0, 1)
    lastDay = (Date.parse(lastDay) / 1000);

    let timeLeft = lastDay - now;

    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    time.innerHTML = `${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`;
}

const diffrenceOfDates = () => {
    let now = new Date();
    let endDay = new Date(now.getFullYear()+1, 0, 1);

    let diffrence = endDay - now;
    diffrence = diffrence / 1000;

    return parseInt(diffrence);
}

const checkProgress = (year, result) => {
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap)
        result = result / 31622400 * 100
    else
        result = result / 31536000 * 100

    result = 100 - result;

    percent.textContent = result.toFixed(2)+'%';
    progressBar.style.width = result+'%'; 
}

setInterval(refreshingTime, 1000);
setInterval(() => {
    checkProgress(year.getFullYear(), diffrenceOfDates())
}, 1000);

currentYear.textContent = year.getFullYear();








