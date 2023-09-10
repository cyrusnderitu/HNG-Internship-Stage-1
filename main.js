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

d_date.innerHTML = Days[siku];
const hour = d.getUTCHours();
const minute = d.getUTCMinutes();
const seconds = d.getUTCSeconds();
const UTCTime = `${hour}: ${minute}: ${seconds}`;
setInterval(() => {
  d_time.innerText = UTCTime;
}, 1000);
