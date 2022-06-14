export const getTimeCalculate = (date, offset) => {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const now = new Date(utc + (3600000 * offset));
    now.getTime();

    const countDownDate = new Date(date).getTime();
    const timeLeft = countDownDate - now;

    if (timeLeft < 0) {
        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        }
    }



    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (days < 10) {
        days = `0${days}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return {
        days,
        hours,
        minutes,
        seconds
    }
}