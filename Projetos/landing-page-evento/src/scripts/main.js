AOS.init();

const eventDay = new Date("mar 30, 2023 19:00:00");
const timesTampEvent = eventDay.getTime();

const countHours = setInterval(() => {
  const now = new Date();
  const currentTimesTamp = now.getTime();

  const distanceTheEvent = timesTampEvent - currentTimesTamp

  const daysUntilTheEvent = Math.floor(distanceTheEvent / (1000 * 60 * 60 * 24));
  const hoursUntilTheEvent = Math.floor((distanceTheEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesUntilTheEvent = Math.floor((distanceTheEvent % (1000 * 60 * 60) / (1000 * 60)));
  const secondsUntilTheEvent = Math.floor((distanceTheEvent % (1000 * 60)) / 1000);

  document.getElementById('contador').innerHTML = `${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m  ${secondsUntilTheEvent}s`;

  if (distanceTheEvent < 0) {
    clearInterval(countHours)
    document.getElementById('contador').innerHTML = `Evento expirado`
  }

}, 1000)