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

setInterval(() => {
  const d = new Date();
  return (d_time.innerHTML = ` ${d.getUTCMilliseconds()}`);
}, 1000);
