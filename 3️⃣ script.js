document.getElementById("year").textContent = new Date().getFullYear();

function updateTime() {
  let options = { timeZone: "Africa/Johannesburg", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  let now = new Intl.DateTimeFormat("en-ZA", options).format(new Date());
  document.getElementById("localTime").textContent = now;
}

setInterval(updateTime, 1000);
updateTime();