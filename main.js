const months = document.querySelector('#months');
const weeks = document.querySelector('#weeks');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

/* setInterval(secondsTest, 1000); */

const today = new Date();
const christmasYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDay > 25) {
    christmasYear += 1;
}

const christmas = new Date(christmasYear, 11, 25);

const daysMiliseconds = 1000 * 60 * 60 * 24;

let remaingDays = Math.floor((christmas.getTime() - today.getTime()) / daysMiliseconds);
const monthsLeft = Math.floor(remaingDays / 30);
remaingDays = remaingDays % 30;
const weeksLeft = Math.floor(remaingDays / 7);

const daysLeft = remaingDays % 7;
const hoursLeft = 23 - today.getHours();
const minutesLeft = 59 - today.getMinutes();
const secondsLeft = 59 - today.getSeconds();

let secondCount = secondsLeft;
let minutesCount = minutesLeft;
let hoursCount = hoursLeft;
let daysCount = daysLeft;
let weeksCount = weeksLeft;
let monthsCount = monthsLeft;
setInterval(HowManyDays, 1000);

function HowManyDays() {
    switch (true) {
        case secondCount == 0:
            secondCount = 59;
            minutesCount -= 1;
            break;
        case minutesCount < 0:
            minutesCount = 59;
            hoursCount -= 1;
            break;

        case hoursCount < 0:
            hoursCount = 23;
            daysCount -= 1;
            break;
        case daysCount < 0:
            daysCount = 6;
            weeksCount -= 1;
            break;
        case weeksCount < 0:
            weeksCount = 3;
            monthsCount -= 1;
            break;
        case monthsCount < 0:
            monthsCount = 10;
            break;
    }

    secondCount -= 1;
    seconds.innerText = secondCount;
    minutes.innerText = minutesCount;
    hours.innerText = hoursCount;
    months.innerText = monthsCount;
    weeks.innerText = weeksCount;
    days.innerText = daysCount;

}