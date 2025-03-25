function updateTime(){
const time = document.getElementById('time')
const date = document.getElementById('date')

const now = new Date()
const hour = now.getHours() % 12 || 12
const minuite = now.getMinutes().toString().padStart(2,'0')
const seconds = now.getSeconds().toString().padStart(2,'0')

const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const dateString = now.toLocaleDateString(undefined,options)

time.textContent = `${hour}:${minuite}:${seconds}`
date.textContent = `${dateString}`
}
setInterval(updateTime,1000);

updateTime()