import { format } from 'date-fns';

export const dateTime = (date, timeZone = "Asia/Dhaka") => {
    date = new Date(date);
    console.log('timeZone', timeZone, date);
    date.toLocaleString('en-US', { timeZone })
    return format(new Date(date), 'MMM dd, yyyy kk:mm aaa');
}