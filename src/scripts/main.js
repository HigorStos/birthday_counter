AOS.init();

const eventDate = new Date("Jun 6, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const eventCounter = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const distanceUntilEvent = eventTimeStamp - nowTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;
    const secondInMs = 1000;

    const daysUntilEvent = Math.floor(distanceUntilEvent / dayInMs);
    const hoursUntilEvent = Math.floor((distanceUntilEvent % dayInMs) / hourInMs);
    const minutesUntilEvent = Math.floor((distanceUntilEvent % hourInMs) / minuteInMs);
    const secondsUntilEvent = Math.floor((distanceUntilEvent % minuteInMs) / secondInMs);

    console.log(daysUntilEvent);
    console.log(hoursUntilEvent);
    console.log(minutesUntilEvent);
    console.log(secondsUntilEvent);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`

}, 1000);