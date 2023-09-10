const d_date = document.querySelector(".date");
const d_time = document.querySelector(".utc");
const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
const siku = d.getDay();

d_date.innerHTML = `<span data-testid="currentDayOfTheWeek">${Days[siku]}</span>`;

setInterval(() => {
  const d = new Date();
  return (d_time.innerHTML = `<span data-testid="currentUTCTime">${d.getUTCMilliseconds()}<span>`);
}, 1000);
